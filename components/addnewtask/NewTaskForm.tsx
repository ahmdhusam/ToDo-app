import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Stack } from '@mui/material';

export default function NewTaskForm({ isOpen, onClose }: any) {
    return (
        <Dialog open={isOpen} onClose={onClose}>
            <Stack minWidth='45vw'>
                <DialogTitle>New Task</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin='dense'
                        id='addTask'
                        label='Add New Task'
                        type='text'
                        fullWidth
                        variant='standard'
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button onClick={onClose}>Add</Button>
                </DialogActions>
            </Stack>
        </Dialog>
    );
}
