import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from './store';

interface IStoreProviderProps {
    children: ReactNode;
}

export default function StoreProvider({ children }: IStoreProviderProps) {
    return <Provider store={store}>{children}</Provider>;
}
