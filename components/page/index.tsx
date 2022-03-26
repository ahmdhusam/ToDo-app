import { useSelector } from 'react-redux';

// MUI components
import { Container } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';

// custom components
import Todos from '../todos';

// Global State
import { IGlobalState } from '../../store/store';

interface IPageProps {
    title?: string;
}

export default function Page({ title = 'All' }: IPageProps) {
    const { inProgress, completed } = useSelector((state: IGlobalState) => state.todos);

    const AllTasks = inProgress.length + completed.length;
    const hasCompleted: boolean = completed.length !== 0;

    return (
        <Container maxWidth='md'>
            <Toolbar
                sx={{
                    pl: { sm: 2 },
                    pr: { xs: 1, sm: 1 }
                }}>
                <Typography sx={{ flex: '1 1 100%' }} color='white' variant='h6' id='Title' component='div'>
                    {title} Tasks - {AllTasks}
                </Typography>
                <Tooltip title='Delete Completed'>
                    <IconButton disabled={!hasCompleted} color='primary' onClick={() => {}}>
                        <DeleteIcon style={{ color: hasCompleted ? 'white' : 'grey' }} />
                    </IconButton>
                </Tooltip>
            </Toolbar>
            <Todos sectionTitle='In-Progress' todos={inProgress} />
            {hasCompleted && <Todos sectionTitle='Completed' todos={completed} />}
        </Container>
    );
}
