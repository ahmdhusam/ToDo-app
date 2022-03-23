import { Container } from '@mui/material';
import type { NextPage } from 'next';
import { Todos } from '../components';

// custom components

const Home: NextPage = () => {
    return (
        <Container maxWidth='sm'>
            <Todos />
        </Container>
    );
};

export default Home;
