import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    }
}));

export default function _() {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
                #COVIDEO
        </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Work in progress
        </Typography>
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="#">
                    COVIDEO
      </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </footer>
    );
}
