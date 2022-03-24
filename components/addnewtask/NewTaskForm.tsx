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

interface INewTaskFormProps {
    isOpen: boolean;
    onClose(): void;
}

export default function NewTaskForm({ isOpen, onClose }: INewTaskFormProps) {
    const [collection, setCollection] = useState<string>('personal');
    const taskInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(collection);
        console.log(taskInputRef.current!.value);
        onClose();
    };

    return (
        <Dialog open={isOpen} onClose={onClose}>
            <Stack minWidth='40vw'>
                <FormControl>
                    <form onSubmit={submitHandler}>
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
                                autoComplete='off'
                                required={true}
                                inputRef={taskInputRef}
                                inputProps={{ maxLength: 70 }}
                            />
                        </DialogContent>
                        <DialogContent style={{ paddingTop: 0 }}>
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
                            <Button type='submit'>Add</Button>
                        </DialogActions>
                    </form>
                </FormControl>
            </Stack>
        </Dialog>
    );
}
