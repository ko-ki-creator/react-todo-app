export default function TodoItem({ todo, onDeleteTodo }) {

    // 削除ボタンのクリック処理
    const handleDelete = () => {

        // 削除前に確認ダイアログを表示
        const isConfirmed = window.confirm(` 「${todo.text}」を削除してもよろしいですか？`);

        if (isConfirmed) {
            onDeleteTodo(todo.id);
        }
    };

    return (
        <div className={`p-3 rounded shadow flex justify-between items-center ${
                todo.completed
                    ? 'bg-green-50 border border-green-200'
                    : 'bg-white'
            }`}>
                <div className="flex-1">
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

                {/* 削除ボタンを追加 */}
                <button
                    onClick={handleDelete}
                    className="ml-4 px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 focus:outline-none"
                >
                    削除
                </button>
        </div>
    );
}
