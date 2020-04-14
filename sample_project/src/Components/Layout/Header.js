import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Icon from '@material-ui/icons/FindReplace';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    }
}));

export default function _() {
    const classes = useStyles();

    return (
        <AppBar position="relative">
            <Toolbar>
                <Icon className={classes.icon} />
                <Typography variant="h6" color="inherit" noWrap>
                    #COVIDEO
          </Typography>
            </Toolbar>
        </AppBar>
    );
}