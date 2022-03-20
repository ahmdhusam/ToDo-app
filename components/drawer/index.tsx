import { Fragment, useState } from 'react';

// MUI components
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function Drawer() {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    return (
        <SwipeableDrawer anchor={'left'} open={isOpen} onClose={() => setIsOpen(false)} onOpen={() => setIsOpen(true)}>
            <Box color='white' bgcolor='secondary.main' minHeight='100vh'>
                <Typography variant='h5' p={1} m={0} pl={2} gutterBottom component='h5'>
                    Collections
                </Typography>
                <Divider />
                <Box sx={{ width: 250 }} role='presentation'>
                    <List>
                        {['Home', 'Cart'].map(text => (
                            <Fragment key={text}>
                                <ListItem button>
                                    <ListItemIcon>
                                        {text === 'Home' ? (
                                            <HomeIcon color='info' />
                                        ) : (
                                            <ShoppingCartIcon color='info' />
                                        )}
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
