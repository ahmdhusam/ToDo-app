import Link from 'next/link';

// MUI components
import { Button, Checkbox, Stack, Typography } from '@mui/material';
import CalendarIcon from '@mui/icons-material/CalendarTodayOutlined';
import TreeIcon from '@mui/icons-material/AccountTreeRounded';

// Global State
import type { IInProgressTodo } from '../../store/todos';

interface ITodoProps extends IInProgressTodo {
    isCompleted?: boolean;
}

export default function Todo({ task, collection, date, isCompleted = false }: ITodoProps) {
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
            />
            <Stack spacing={1}>
                <Typography variant='body2' component={isCompleted ? 'del' : 'p'}>
                    {task}
                </Typography>
                <Stack direction='row' spacing={1}>
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
                            {date}
                        </Button>
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    );
}
