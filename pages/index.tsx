import type { NextPage } from 'next';

// MUI components
import { Container } from '@mui/material';

// custom components
import { Todos } from '../components';

const Home: NextPage = () => {
    return (
        <Container maxWidth='sm'>
            <Todos />
        </Container>
    );
};

export default Home;
