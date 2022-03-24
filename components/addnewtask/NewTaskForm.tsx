import { useRef, useState } from 'react';

// MUI components
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Stack } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function NewTaskForm({ isOpen, onClose }: any) {
    const [collection, setCollection] = useState<string>('personal');
    const taskInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(collection);
        console.log(taskInputRef.current!.value);
    };

    return (
        <Dialog open={isOpen} onClose={onClose}>
            <Stack minWidth='45vw'>
                <FormControl onSubmit={submitHandler}>
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
                            inputRef={taskInputRef}
                            autoComplete='off'
                        />
                    </DialogContent>
                    <DialogContent>
                        <FormLabel id='demo-row-radio-buttons-group-label'>Collection?</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby='demo-row-radio-buttons-group-label'
                            name='row-radio-buttons-group'
                            value={collection}
                            onChange={e => setCollection(e.target.value)}>
                            <FormControlLabel value='personal' control={<Radio />} label='Personal' />
                            <FormControlLabel value='work' control={<Radio />} label='Work' />
                        </RadioGroup>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button onClick={onClose} type='submit'>
                            Add
                        </Button>
                    </DialogActions>
                </FormControl>
            </Stack>
        </Dialog>
    );
}
