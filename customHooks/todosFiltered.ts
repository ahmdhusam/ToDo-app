import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// Global State
import type { IGlobalState } from '../store/store';
import type { Collection, ICompletedTodo, IInProgressTodo, ITodos } from '../store/todos';

export const useTodosFiltered = (type: Collection | 'All') => {
    const oldTodos = useSelector((state: IGlobalState) => state.todos);
    const [todosFiltered, setTodosFiltered] = useState<ITodos>(oldTodos);

    useEffect(() => {
        if (type === 'All') {
            setTodosFiltered(oldTodos);
            return;
        }

        const { inProgress, completed } = oldTodos;
        const newInProgress = todosFilter<IInProgressTodo[]>(inProgress, type);
        const newCompleted = todosFilter<ICompletedTodo[]>(completed, type);

        const newTodosFiltered: ITodos = {
            inProgress: newInProgress,
            completed: newCompleted
        };

        setTodosFiltered(newTodosFiltered);
    }, [oldTodos, type]);

    return todosFiltered;
};

function todosFilter<T extends Array<IInProgressTodo | ICompletedTodo>>(todos: T, type: Collection): T {
    return todos.filter(todo => todo.collection === type) as T;
}
