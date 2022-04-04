import Link from 'next/link';
import { useDispatch } from 'react-redux';
import Moment from 'react-moment';

// MUI components
import { Button, Checkbox, Stack, Typography } from '@mui/material';
import CalendarIcon from '@mui/icons-material/CalendarTodayOutlined';
import TreeIcon from '@mui/icons-material/AccountTreeRounded';

// Global State
import { todosActions } from '../../store/todos';
import type { IInProgressTodo } from '../../store/todos';

interface ITodoProps extends IInProgressTodo {
    isCompleted?: boolean;
}

export default function Todo(props: ITodoProps) {
    const { task, collection, date, isCompleted = false } = props;
    const dispatch = useDispatch();

    const { setIsCompleted } = todosActions;

    const completedHandler = () => {
        dispatch(setIsCompleted({ ...props, isCompleted: !isCompleted }));
    };

    return (
        <Stack
            direction={'row'}
            justifyContent='flex-start'
            alignItems='flex-start'
            spacing={1}
            color='white'
            borderRadius={6}
            pl={0.5}
            pr={2}
            py={2}
            bgcolor='secondary.main'>
            <Checkbox
                style={{ color: 'hsl(341deg 96% 73%)' }}
                checked={isCompleted}
                inputProps={{
                    'aria-labelledby': task
                }}
                onClick={completedHandler}
            />
            <Stack spacing={1}>
                <Typography
                    sx={{ wordBreak: 'break-word' }}
                    whiteSpace='break-spaces'
                    textTransform='capitalize'
                    variant='body1'
                    component={isCompleted ? 'del' : 'p'}>
                    {task}
                </Typography>
                <Stack direction='row' spacing={1} alignItems='center'>
                    <Link href={`/${collection.toLowerCase()}`}>
                        <a>
                            <Typography variant='caption' component='span'>
                                <Button style={{ color: 'wheat' }} size='small' startIcon={<TreeIcon />}>
                                    {collection}
                                </Button>
                            </Typography>
                        </a>
                    </Link>
                    <Typography variant='caption' component='span'>
                        <Button color='warning' size='small' startIcon={<CalendarIcon />}>
                            <Moment fromNow>{date}</Moment>
                        </Button>
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    );
}
