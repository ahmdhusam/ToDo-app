import { configureStore } from '@reduxjs/toolkit';

import drawer, { IDrawer } from './drawer';
import todos, { ITodos } from './todos';

export interface IGlobalState {
    todos: ITodos;
    drawer: IDrawer;
}

const reducer = {
    todos,
    drawer
};

const store = configureStore({ reducer });

export default store;
