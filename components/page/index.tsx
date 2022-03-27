import { Fragment } from 'react';
import Head from 'next/head';

import { useDispatch } from 'react-redux';

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
import { Collection, todosActions } from '../../store/todos';

// custom hooks
import { useTodosFiltered } from '../../customHooks/todosFiltered';

interface IPageProps {
    title?: 'All' | Collection;
}

export default function Page({ title = 'All' }: IPageProps) {
    const { inProgress, completed } = useTodosFiltered(title);
    const dispatch = useDispatch();

    const { removeAllCompleted } = todosActions;

    const AllTasks = inProgress.length + completed.length;
    const hasInProgress = inProgress.length !== 0;
    const hasCompleted: boolean = completed.length !== 0;

    const removeAllCompletedHandler = () => {
        dispatch(removeAllCompleted());
    };

    return (
        <Fragment>
            <Head>
                <title>{`${title} ToDo`}</title>
            </Head>
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
                        <IconButton disabled={!hasCompleted} color='primary' onClick={removeAllCompletedHandler}>
                            <DeleteIcon style={{ color: hasCompleted ? 'white' : 'grey' }} />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
                {hasInProgress && <Todos sectionTitle='In-Progress' todos={inProgress} />}
                {hasCompleted && <Todos sectionTitle='Completed' todos={completed} />}
            </Container>
        </Fragment>
    );
}
