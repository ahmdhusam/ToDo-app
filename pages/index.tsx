import { Box } from '@mui/material';
import type { NextPage } from 'next';

// MUI components
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';

const Home: NextPage = () => {
    return (
        <Box
            px={{ xs: 1, sm: 5, md: 15, lg: 25, xl: 35 }}
            pt={{ xs: 2, md: 5, xl: 10 }}
            bgcolor='primary.main'
            color='white'>
            <Toolbar
                sx={{
                    pl: { sm: 2 },
                    pr: { xs: 1, sm: 1 }
                }}>
                <Typography sx={{ flex: '1 1 100%' }} variant='h6' id='tableTitle' component='div'>
                    Tasks - 0
                </Typography>
                <Tooltip title='Delete All Completed'>
                    <IconButton onClick={() => {}}>
                        <DeleteIcon style={{ color: 'white' }} />
                    </IconButton>
                </Tooltip>
            </Toolbar>
        </Box>
    );
};

export default Home;
