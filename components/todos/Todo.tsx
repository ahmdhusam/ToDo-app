import { Button, Checkbox, Stack, Typography } from '@mui/material';
import CalendarIcon from '@mui/icons-material/CalendarTodayOutlined';

interface ITodoProps {
    task: string;
    date: string;
    isCompleted: boolean;
}

export default function Todo({ task, date, isCompleted }: ITodoProps) {
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
                <Typography variant='caption' component='span'>
                    <Button color='warning' size='small' startIcon={<CalendarIcon />}>
                        {date}
                    </Button>
                </Typography>
            </Stack>
        </Stack>
    );
}
