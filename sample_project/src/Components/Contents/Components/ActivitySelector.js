import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ButtonBase from '@material-ui/core/ButtonBase';

const cards = [
    {
        url: 'https://images.unsplash.com/photo-1519139270028-ab664cf42264?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        title: 'Art/Music',
        content: 'Take an art class or a music class from talented artists and musicians. Learn from them and unleash your creative side!
    },
    {
        url: 'https://images.unsplash.com/photo-1525296416200-59aaed194d0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1474&q=80',
        title: 'Dance',
        content: 'Take a dance class or simply learn to move to music. Dance is therapy for mind and body.
    },
    {
        url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        title: 'Learn',
        content: 'Learn about any topic on offer that interests you. Talk with an expert!
    },
    {
        url: 'https://images.unsplash.com/photo-1548964643-412886f1e3f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1422&q=80',
        title: 'Chat',
        content: 'Chat and share a story or two, maybe even make a new friend.
    },
    {
        url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        title: 'Fitness',
        content: 'Keep in shape with fitness gurus who will get your blood pumping!
    },
];

//const cards = [1, 2, 3, 4, 5];

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8), 
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    cardAction: {
        display: 'block',
        textAlign: 'initial',
    },
}));

export default function _() {
    const classes = useStyles();

    return (
        <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4} justify="center">
                {cards.map((card) => (
                    <Grid item key={card.title} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                        <ButtonBase
          className={classes.cardAction}
          onClick={event => { console.log("Clicked : ", card.title) }}
      >
                            <CardMedia
                                className={classes.cardMedia}
                                image={card.url}
                                title={card.title}
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2" align="center" >
                                {card.title}
              </Typography>
                                <Typography>
                                    This is a media card. You can use this section to describe the content.
              </Typography>
                            </CardContent>
                            <CardActions>
                                {/* <Button size="large" color="primary">
                                    View
              </Button> */}
                            </CardActions>
                            </ButtonBase>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
