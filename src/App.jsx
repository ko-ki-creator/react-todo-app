import { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

export default function App() {

  // 静的な配列をuseStateで管理するように変更
  const [todos, setTodos] = useState([]); // 初期値を空の配列に変更

  // 新しいIDを生成する関数
  const generateNewId = () => {
    if (todos.length === 0) return 1;
    const maxId = Math.max(...todos.map(todo => todo.id));
    return maxId + 1;
  };

  // 新しいTodoを追加する関数
  const addTodo = (text) => {
    const newTodo = {
      id: generateNewId(),
      text: text,
      completed: false
    };

    setTodos([...todos, newTodo]);
  };


  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Todo アプリ
        </h1>

        {/* 入力フォームを追加 */}
        <TodoForm onAddTodo={addTodo} />

        {/* Todo一覧を表示 */}
        <TodoList todos={todos} />

      </div>
    </div>
  );
}