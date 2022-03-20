import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Drawer from '../components/drawer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from '../components/navbar';
import AddNewTask from '../components/addnewtask';

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
        <ThemeProvider theme={theme}>
            <Drawer />
            <NavBar />
            <Component {...pageProps} />
            <AddNewTask />
        </ThemeProvider>
    );
}

export default MyApp;
