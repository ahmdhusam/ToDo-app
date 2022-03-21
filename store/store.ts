import { configureStore } from '@reduxjs/toolkit';

import drawer, { IDrawer } from './drawer';

export interface iGlobalState {
    drawer: IDrawer;
}

const reducer = {
    drawer
};

const store = configureStore({ reducer });

export default store;
