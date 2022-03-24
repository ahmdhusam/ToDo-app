import type { NextPage } from 'next';

// MUI components
import { Container } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';

// custom components
import { Todos } from '../components';
import sections from '../lib/sections';

const Home: NextPage = () => {
    const hasCompleted: boolean = true;
    return (
        <Container maxWidth='md'>
            <Toolbar
                sx={{
                    pl: { sm: 2 },
                    pr: { xs: 1, sm: 1 }
                }}>
                <Typography sx={{ flex: '1 1 100%' }} color='white' variant='h6' id='Title' component='div'>
                    {'All Tasks'} - 5
                </Typography>
                <Tooltip title='Delete Completed'>
                    <IconButton disabled={!hasCompleted} color='primary' onClick={() => {}}>
                        <DeleteIcon style={{ color: hasCompleted ? 'white' : 'grey' }} />
                    </IconButton>
                </Tooltip>
            </Toolbar>
            {sections.map((section: string) => (
                <section key={section}>
                    <Todos sectionTitle={section} />
                </section>
            ))}
        </Container>
    );
};

export default Home;
