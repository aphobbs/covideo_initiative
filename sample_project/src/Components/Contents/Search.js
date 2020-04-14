import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Carousel from './Components/Carousel';


const useStyles = makeStyles((theme) => ({
  Content: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(0, 0, 6),
  },
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  textField: {
    width: '100% ',
  },
}));

export default function _() {
  const classes = useStyles();

  return (
    <div className={classes.Content}>
      <Container maxWidth="md">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Search
            </Typography>

        <TextField id="outlined-basic" label="Search"  variant="outlined" className={classes.textField} />

        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Recommendations
            </Typography>

        <Carousel></Carousel>

        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Favorites
            </Typography>

            <Carousel></Carousel>
      </Container>
    </div>
  );
}