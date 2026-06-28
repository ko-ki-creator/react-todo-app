import { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

export default function App() {

  // 初期データを用意
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Reactの基礎を学ぶ",
      completed: false
    },
    {
      id: 2,
      text: "Todoアプリを作成する",
      completed: false
    },
    {
      id: 3,
      text: "JavaScriptの復習をする",
      completed: true
    }
  ]);

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

  // Todo削除関数を追加
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  // Todo更新関数を追加
  const updateTodo = (id, newText) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Todo アプリ
        </h1>

        {/* 入力フォームを追加 */}
        <TodoForm onAddTodo={addTodo} />

        {/* 更新関数をPropsとして渡す */}
        <TodoList
          todos={todos}
          onDeleteTodo={deleteTodo}
          onUpdateTodo={updateTodo}
        />
      </div>
    </div>
  );
}