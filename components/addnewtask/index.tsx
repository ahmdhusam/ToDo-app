import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import EditIcon from '@mui/icons-material/Edit';

export default function AddNewTask() {
    return (
        <Box
            sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1, position: 'fixed', bottom: 16, left: '50%' }}>
            <SpeedDial
                ariaLabel='SpeedDial openIcon example'
                sx={{
                    borderRadius: '1.3rem',
                    position: 'absolute',
                    bottom: 16,
                    right: '50%',
                    transform: 'translatex(50%)'
                }}
                icon={<SpeedDialIcon openIcon={<EditIcon />} />}
            />
        </Box>
    );
}
