import TodoItem from "./TodoItem";

export default function TodoList({ todos }) {
    return (
        <div className="space-y-2">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
    );
}