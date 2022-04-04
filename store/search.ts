import { createSlice } from '@reduxjs/toolkit';

export interface ISearch {
    searchBy: string;
}

interface ISearchAciton {
    payload: string;
}

const initialState: ISearch = {
    searchBy: ''
};

const slice = {
    name: 'search',
    initialState,
    reducers: {
        search(state: ISearch, action: ISearchAciton) {
            state.searchBy = action.payload;
        }
    }
};

const searchSlice = createSlice(slice);
export default searchSlice.reducer;

export const searchActions = searchSlice.actions;
