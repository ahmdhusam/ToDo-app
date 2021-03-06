import { Fragment } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

// Ui Components
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Global Style
import '../styles/globals.css';

// custom Components
import { AddNewTask, Drawer, NavBar } from '../components';
import StoreProvider from '../store/StoreProvider';

const theme = createTheme({
    palette: {
        primary: {
            main: '#181820'
        },
        secondary: {
            main: '#21212b'
        }
    }
});
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Fragment>
            <Head>
                <title>ToDo App</title>
            </Head>
            <ThemeProvider theme={theme}>
                <StoreProvider>
                    <Drawer />
                    <NavBar />
                    <Component {...pageProps} />
                    <AddNewTask />
                </StoreProvider>
            </ThemeProvider>
        </Fragment>
    );
}

export default MyApp;
