import { useCallback } from 'react';

function ToDo({ todo, toggleTask, removeTask }) {

    const onToggleHandler = useCallback(() => {
        toggleTask(todo.id)
    }, [todo, toggleTask]);

    const onRemoveHandler = useCallback(() => {
        removeTask(todo.id)
    }, [todo, removeTask]);

    return (
        <div key = {todo.id} className='item-todo'>
            <div
                className={todo.complete ? 'item-text strike' : 'item-text'}
                onClick={onToggleHandler}
            >
                {todo.task}
            </div>
            <div
                className='item-delete'
                onClick={onRemoveHandler}
            >
                X
            </div>
        </div>
    )
}

export default ToDo;