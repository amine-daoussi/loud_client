import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { pictures } from './data';

import Carousel from '../../dumb/Carousel';
import Description from './Description';

const useStyles = makeStyles(theme => ({
  root: {
    fontFamily: 'HelveticaNeueBold',
    marginTop: '5vh',
    width: '100%',
    [theme.breakpoints.down('1113')]: {
      padding: '1vh 2vh',
      flexDirection: 'column-reverse',
      alignItems: 'center',
      justifyContent: 'center',
    },
    [theme.breakpoints.down('700')]: {
      padding: '1vh',
    },
  },
  descriptionContainer: {
    margin: '40vh 0 0 0',
    textAlign: 'justify',
    [theme.breakpoints.down('1100')]: { margin: '2vh 0 0 0 ' },
    [theme.breakpoints.down('900')]: { margin: '2vh 0 0 0 ' },
    [theme.breakpoints.down('600')]: { maxWidth: '50vh' },
    [theme.breakpoints.down('500')]: { maxWidth: '40vh' },
  },
}));
const carouselStyle = { width: '70vh' };

const Home = () => {
  const classes = useStyles();
  return (
    <Grid container justify="space-around" className={classes.root} wrap>
      <Grid item className={classes.descriptionContainer}>
        <Description />
      </Grid>
      <Grid item className={classes.carouselContainer}>
        <Carousel pictures={pictures} carouselStyle={carouselStyle} />
      </Grid>
    </Grid>
  );
};

export default Home;
