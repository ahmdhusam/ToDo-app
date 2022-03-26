// MUI components
import { Stack } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

// custom components
import Todo from './Todo';

// Global State
import type { ICompletedTodo, IInProgressTodo } from '../../store/todos';

interface ITodosProps {
    sectionTitle: 'In-Progress' | 'Completed';
    todos: IInProgressTodo[] | ICompletedTodo[];
}

export default function Todos({ sectionTitle, todos }: ITodosProps) {
    return (
        <Container maxWidth='sm' title={sectionTitle} style={{ paddingTop: '1rem' }}>
            <Stack mb={2} color='white'>
                <Toolbar
                    sx={{
                        pl: { sm: 2 },
                        pr: { xs: 1, sm: 1 }
                    }}>
                    <Typography sx={{ flex: '1 1 100%' }} variant='h6' id='Title' component='div'>
                        {sectionTitle}
                    </Typography>
                    <Typography sx={{ px: 2 }} variant='h6' component='span'>
                        {todos.length}
                    </Typography>
                </Toolbar>
            </Stack>
            <Stack className='custom-scrollbar' px={1} spacing={2} maxHeight={'50vh'} sx={{ overflowY: 'auto' }}>
                {todos.map(todo => (
                    <Todo key={todo.task} {...todo} />
                ))}
            </Stack>
        </Container>
    );
}
