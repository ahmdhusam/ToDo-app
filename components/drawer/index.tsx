import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// MUI components
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';
import AccountIcon from '@mui/icons-material/AccountBoxRounded';
import WorkIcon from '@mui/icons-material/WorkHistoryRounded';

// Global State
import type { iGlobalState } from '../../store/store';
import { drawerActions } from '../../store/drawer';

export default function Drawer() {
    const { isOpen } = useSelector((state: iGlobalState) => state.drawer);
    const dispatch = useDispatch();
    const { openDrawer, closeDrawer } = drawerActions;

    return (
        <SwipeableDrawer
            anchor={'left'}
            open={isOpen}
            onClose={dispatch.bind(null, closeDrawer())}
            onOpen={dispatch.bind(null, openDrawer())}>
            <Box color='white' bgcolor='secondary.main' minHeight='100vh'>
                <Typography variant='h5' p={1} m={0} pl={2} gutterBottom component='h5'>
                    Collections
                </Typography>
                <Divider />
                <Box sx={{ width: 250 }} role='presentation'>
                    <List>
                        {['Personal', 'Work'].map(text => (
                            <Fragment key={text}>
                                <ListItem button>
                                    <ListItemIcon>
                                        {text === 'Personal' ? <AccountIcon color='info' /> : <WorkIcon color='info' />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                                <Divider />
                            </Fragment>
                        ))}
                    </List>
                </Box>
            </Box>
        </SwipeableDrawer>
    );
}
