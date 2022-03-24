import React, { Fragment } from 'react';

import { Stack } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';

// custom components
import Todo from './Todo';

export default function Todos() {
    return (
        <Fragment>
            <Stack mb={2} color='white'>
                <Toolbar
                    sx={{
                        pl: { sm: 2 },
                        pr: { xs: 1, sm: 1 }
                    }}>
                    <Typography sx={{ flex: '1 1 100%' }} variant='h6' id='Title' component='div'>
                        Tasks - 0
                    </Typography>
                    <Tooltip title='Delete Completed'>
                        <IconButton disabled={true} color='primary' onClick={() => {}}>
                            <DeleteIcon style={{ color: false ? 'white' : 'grey' }} />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </Stack>
            <Stack className='custom-scrollbar' px={1} spacing={2} maxHeight={'40vh'} sx={{ overflowY: 'scroll' }}>
                <Todo />
            </Stack>
        </Fragment>
    );
}
