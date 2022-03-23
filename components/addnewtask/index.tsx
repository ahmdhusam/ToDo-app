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
    return (
        <>
            <Box
                onClick={() => setIsOpen(true)}
                sx={{
                    position: 'fixed',
                    bottom: '5vh',
                    left: '50%',
                    transform: 'translatex(-50%)'
                }}>
                <SpeedDial id='speedDial' ariaLabel='add new task' icon={<SpeedDialIcon openIcon={<EditIcon />} />} />
            </Box>
            <NewTaskForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
}
