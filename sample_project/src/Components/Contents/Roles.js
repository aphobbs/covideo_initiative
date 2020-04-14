import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import RoleSelector from './Components/RoleSelector';

const useStyles = makeStyles((theme) => ({
    Content: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    }
}));

export default function _() {
    const classes = useStyles();

    return (
        <div className={classes.Content}>
          <Container maxWidth="md">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              What is your role?
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Select your role
            </Typography>
            <RoleSelector />
          </Container>
        </div>
    );
}
