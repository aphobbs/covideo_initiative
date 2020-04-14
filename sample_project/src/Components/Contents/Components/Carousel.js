import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const useStyles = makeStyles((theme) => ({
  Content: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  root: {
    minWidth: 275,
  },
}));

export default function _() {
  const classes = useStyles();

  return (
    <Carousel   slidesPerPage={3} arrows infinite>

    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Card 1
  </Typography>
        <Typography variant="h5" component="h2">
        Title
  </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Secondary text
  </Typography>
        <Typography variant="body2" component="p">
          Description
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        Card 2
  </Typography>
        <Typography variant="h5" component="h2">
        Title
  </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Secondary text
  </Typography>
        <Typography variant="body2" component="p">
          Description
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        Card 3
  </Typography>
        <Typography variant="h5" component="h2">
          Title
  </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Secondary text
  </Typography>
        <Typography variant="body2" component="p">
          Description
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        Card 4
  </Typography>
        <Typography variant="h5" component="h2">
          Title
  </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Secondary text
  </Typography>
        <Typography variant="body2" component="p">
          Description
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

  </Carousel>
  );
}
