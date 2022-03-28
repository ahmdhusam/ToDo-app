import { createSlice } from '@reduxjs/toolkit';

// libs
import saveTodos from '../lib/saveTodos';

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
        setAllTodos(state: ITodos, action: ITodoAction<ITodos>) {
            state.inProgress = action.payload.inProgress;
            state.completed = action.payload.completed;
        },
        addTodo(state: ITodos, action: ITodoAction<IInProgressTodo>) {
            state.inProgress.push(action.payload);
            saveTodos(state);
        },
        setIsCompleted(state: ITodos, action: ITodoAction<ICompletedTodo>) {
            const actionTodo = action.payload;
            if (actionTodo.isCompleted) {
                state.inProgress = state.inProgress.filter(todo => todo.id !== actionTodo.id);
                state.completed.push(action.payload);
                saveTodos(state);
                return;
            }
            state.completed = state.completed.filter(todo => todo.id !== actionTodo.id);
            const { isCompleted, ...inProgressTodo } = actionTodo;
            state.inProgress.push(inProgressTodo);
            saveTodos(state);
        },
        removeAllCompleted(state: ITodos, action: ITodoAction<Collection | 'All'>) {
            const type = action.payload;
            if (type === 'All') {
                state.completed = [];
                saveTodos(state);
                return;
            }
            state.completed = state.completed.filter(todo => todo.collection !== type);
            saveTodos(state);
        }
    }
};

const todosSlice = createSlice(slice);
export default todosSlice.reducer;

export const todosActions = todosSlice.actions;
