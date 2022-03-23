import { Button, Checkbox, Stack, Typography } from '@mui/material';
import CalendarIcon from '@mui/icons-material/CalendarTodayOutlined';

export default function Todo() {
    return (
        <Stack
            direction={'row'}
            justifyContent='flex-start'
            alignItems='center'
            spacing={1}
            color='white'
            borderRadius={6}
            pl={0.5}
            pr={2}
            bgcolor='secondary.main'>
            <Checkbox
                style={{ color: 'hsl(341deg 96% 73%)' }}
                checked={true}
                sx={{ width: 'fit-content', height: 'fit-content' }}
                inputProps={{
                    'aria-labelledby': 'hi'
                }}
            />
            <Stack py={2} spacing={1}>
                <Typography variant='body2' component='p'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, facere! Quis praesentium hic natus!
                    Quas Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, facere! Quis praesentium hic
                    natus! Quas
                </Typography>
                <Typography variant='caption' component='span'>
                    <Button color='warning' size='small' startIcon={<CalendarIcon />}>
                        today
                    </Button>
                </Typography>
            </Stack>
        </Stack>
    );
}
