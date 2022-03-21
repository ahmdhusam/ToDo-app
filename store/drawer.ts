import { createSlice } from '@reduxjs/toolkit';

export interface IDrawer {
    isOpen: boolean;
}

const initialState: IDrawer = {
    isOpen: false
};

const slice = {
    name: 'drawer',
    initialState,
    reducers: {
        openDrawer(state: IDrawer) {
            state.isOpen = true;
        },
        closeDrawer(state: IDrawer) {
            state.isOpen = false;
        }
    }
};

const drawerSlice = createSlice(slice);
export default drawerSlice.reducer;

export const drawerActions = drawerSlice.actions;
