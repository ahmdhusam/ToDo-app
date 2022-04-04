import { configureStore } from '@reduxjs/toolkit';

import todos, { ITodos } from './todos';
import drawer, { IDrawer } from './drawer';
import search, { ISearch } from './search';

export interface IGlobalState {
    todos: ITodos;
    drawer: IDrawer;
    search: ISearch;
}

const reducer = {
    todos,
    drawer,
    search
};

const store = configureStore({ reducer });

export default store;
