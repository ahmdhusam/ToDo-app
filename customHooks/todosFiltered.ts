import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Global State
import type { IGlobalState } from '../store/store';
import type { Collection, ICompletedTodo, IInProgressTodo, ITodos } from '../store/todos';
import { todosActions } from '../store/todos';

export const useTodosFiltered = (type: Collection | 'All', searchBy: string) => {
    const oldTodos = useSelector((state: IGlobalState) => state.todos);
    const dispatch = useDispatch();
    const [todosFiltered, setTodosFiltered] = useState<ITodos>(oldTodos);

    const { setAllTodos } = todosActions;

    useEffect(() => {
        const getSavedTodos: string | null = localStorage.getItem('todos');
        if (!getSavedTodos) return;
        const todos: ITodos = JSON.parse(getSavedTodos);
        dispatch(setAllTodos(todos));
    }, []);

    useEffect(() => {
        const { inProgress, completed } = oldTodos;
        const newInProgress = todosFilter<IInProgressTodo[]>(inProgress, type, searchBy);
        const newCompleted = todosFilter<ICompletedTodo[]>(completed, type, searchBy);

        const newTodosFiltered: ITodos = {
            inProgress: newInProgress,
            completed: newCompleted
        };
        setTodosFiltered(newTodosFiltered);
    }, [oldTodos, type, searchBy]);

    return todosFiltered;
};

function todosFilter<T extends Array<IInProgressTodo | ICompletedTodo>>(
    todos: T,
    type: Collection | 'All',
    searchBy: string
): T {
    return todos.filter(
        todo =>
            (type === 'All' || todo.collection === type) &&
            (todo.task.toLowerCase().includes(searchBy.toLowerCase()) ||
                todo.collection.toLowerCase().includes(searchBy.toLowerCase()))
    ) as T;
}
