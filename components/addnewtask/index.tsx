import { useState } from 'react';

// MUI components
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import EditIcon from '@mui/icons-material/Edit';

// Custom Components
import NewTaskForm from './NewTaskForm';

export default function AddNewTask() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const openNewTaskFormHandler = () => {
        setIsOpen(true);
    };

    const closeNewTaskFormHandler = () => {
        setIsOpen(false);
    };

    return (
        <>
            <Box
                onClick={openNewTaskFormHandler}
                sx={{
                    position: 'fixed',
                    bottom: '5vh',
                    transform: 'translatex(50%)'
                }}
                right={{ xs: '50%', md: '10%' }}>
                <SpeedDial id='speedDial' ariaLabel='add new task' icon={<SpeedDialIcon openIcon={<EditIcon />} />} />
            </Box>
            <NewTaskForm isOpen={isOpen} onClose={closeNewTaskFormHandler} />
        </>
    );
}
