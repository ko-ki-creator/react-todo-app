export default function TodoItem({ todo }) {
    return (
        <div className={`p-3 rounded shadow ${
                todo.completed
                    ? 'bg-green-50 border border-green-200'
                    : 'bg-white'
            }`}>
            <p className={` ${
                todo.completed
                    ? 'text-gray-500 line-through'
                    : 'text-gray-800'
                }`}>
                    {todo.text}
                </p>
            <p className="text-sm text-gray-500">
                状態： {todo.completed ? '✅ 完了' : '⏳ 未完了'}
            </p>
        </div>
    );
}
