import React from 'react';
import Checkbox from './Checkbox';
import Button from './Button';

function TodoRow({ todo, onTodoTrav, onTodoRemoval }) {
    return (
        <div>
            <Checkbox
                label={todo.todoDescription}
                value={todo.completed}
                onCheckChange={() => onTodoTrav(todo.id)}
            />
            <Button onClick={() => onTodoRemoval(todo.id)}>
                Delete
            </Button>
        </div>
    );
}

export default TodoRow;
