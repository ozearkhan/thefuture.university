import React from 'react';
import Checkbox from './Checkbox';
import Button from './Button';
import '../CSS/TodoRow.css'

function TodoRow({ todo, onTodoTrav, onTodoRemoval }) {
    return (
        <div className={"todo-row"}>
            <Checkbox
                label={todo.todoDescription}
                value={todo.completed}
                onCheckChange={() => onTodoTrav(todo.id)}
            />
            <Button size="small" onClick={() => onTodoRemoval(todo.id)}>
                X
            </Button>
        </div>
    );
}

export default TodoRow;
