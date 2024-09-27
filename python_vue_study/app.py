from flask import Flask, request, jsonify
import mysql.connector
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# データベース接続設定
def get_db_connection():
    return mysql.connector.connect(
        host="localhost",      # MySQLホスト
        user="root",           # MySQLユーザー名
        password="",# MySQLパスワード
        database="todo_db"     # 使用するデータベース名
    )

# TODOの一覧取得エンドポイント
@app.route('/todos', methods=['GET'])
def get_todos():
    conn = get_db_connection()  # データベースに接続
    cursor = conn.cursor(dictionary=True)  # 辞書形式で結果を返す
    cursor.execute("SELECT * FROM todos")  # todosテーブルからすべての項目を取得
    todos = cursor.fetchall()  # 結果を取得
    conn.close()  # データベース接続を閉じる
    return jsonify(todos)  # 結果をJSONで返す

# TODOの追加エンドポイント
@app.route('/todos', methods=['POST'])
def add_todo():
    new_todo = request.json  # フロントエンドから送信されたデータを取得
    title = new_todo['title']  # TODOのタイトルを取得
    conn = get_db_connection()  # データベースに接続
    cursor = conn.cursor()
    cursor.execute("INSERT INTO todos (title) VALUES (%s)", (title,))  # 新しいTODOをデータベースに追加
    conn.commit()  # 変更をコミット
    conn.close()  # データベース接続を閉じる
    return jsonify({'message': 'Todo added successfully'})  # 成功メッセージを返す

# TODOの更新エンドポイント
@app.route('/todos/<int:id>', methods=['PUT'])
def update_todo(id):
    updated_todo = request.json  # 更新するTODOデータを取得
    completed = updated_todo['completed']  # 完了状態を取得
    conn = get_db_connection()  # データベースに接続
    cursor = conn.cursor()
    cursor.execute("UPDATE todos SET completed = %s WHERE id = %s", (completed, id))  # TODOの完了状態を更新
    conn.commit()  # 変更をコミット
    conn.close()  # データベース接続を閉じる
    return jsonify({'message': 'Todo updated successfully'})  # 成功メッセージを返す

# TODOの削除エンドポイント
@app.route('/todos/<int:id>', methods=['DELETE'])
def delete_todo(id):
    conn = get_db_connection()  # データベースに接続
    cursor = conn.cursor()
    cursor.execute("DELETE FROM todos WHERE id = %s", (id,))  # 指定したIDのTODOを削除
    conn.commit()  # 変更をコミット
    conn.close()  # データベース接続を閉じる
    return jsonify({'message': 'Todo deleted successfully'})  # 成功メッセージを返す

if __name__ == '__main__':
    app.run(debug=True)  # アプリケーションをデバッグモードで実行
