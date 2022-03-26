import { createSlice } from '@reduxjs/toolkit';

export interface ITodos {
    inProgress: IInProgressTodo[];
    completed: ICompletedTodo[];
}

export interface IInProgressTodo {
    task: string;
    date: string;
    collection: Collection;
}

export interface ICompletedTodo extends IInProgressTodo {
    isCompleted: boolean;
}

type Collection = 'Personal' | 'Work';

const initInProgress: IInProgressTodo = {
    collection: 'Personal',
    date: 'today',
    task: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum'
};
const initCompleted: ICompletedTodo = {
    collection: 'Work',
    date: 'Now',
    task: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum',
    isCompleted: true
};

const initialState: ITodos = {
    inProgress: [initInProgress],
    completed: [initCompleted]
};

const slice = {
    name: 'todos',
    initialState,
    reducers: {
        addTodo() {},
        setIsCompleted() {},
        removeAllCompleted() {}
    }
};

const todosSlice = createSlice(slice);
export default todosSlice.reducer;

export const todosActions = todosSlice.actions;
