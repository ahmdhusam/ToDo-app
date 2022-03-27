import { createSlice } from '@reduxjs/toolkit';

export interface ITodos {
    inProgress: IInProgressTodo[];
    completed: ICompletedTodo[];
}

export interface IInProgressTodo {
    id: string;
    task: string;
    date: string;
    collection: Collection;
}

export interface ICompletedTodo extends IInProgressTodo {
    isCompleted: boolean;
}

interface ITodoAction<T> {
    payload: T;
}

export type Collection = 'Personal' | 'Work';

const initialState: ITodos = {
    inProgress: [],
    completed: []
};

const slice = {
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state: ITodos, action: ITodoAction<IInProgressTodo>) {
            state.inProgress.push(action.payload);
        },
        setIsCompleted(state: ITodos, action: ITodoAction<ICompletedTodo>) {
            const actionTodo = action.payload;
            if (actionTodo.isCompleted) {
                state.inProgress = state.inProgress.filter(todo => todo.id !== actionTodo.id);
                state.completed.push(action.payload);
                return;
            }
            state.completed = state.completed.filter(todo => todo.id !== actionTodo.id);
            const { isCompleted, ...inProgressTodo } = actionTodo;
            state.inProgress.push(inProgressTodo);
        },
        removeAllCompleted(state: ITodos) {
            state.completed = [];
        }
    }
};

const todosSlice = createSlice(slice);
export default todosSlice.reducer;

export const todosActions = todosSlice.actions;
