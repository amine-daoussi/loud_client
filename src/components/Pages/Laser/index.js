import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { pictures } from './data';

import Carousel from '../../dumb/Carousel';
import Button, { buttonType } from '../../dumb/Button';

const useStyles = makeStyles(theme => ({
  root: { fontFamily: 'HelveticaNeueBold' },
  carouselContainer: {
    width: '100vh',
    marginTop: '8vh',
    [theme.breakpoints.down('900')]: {
      width: '100%',
      height: '70%',
    },
  },
}));

const Laser = ({ setOpenToast, lang }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} direction="column" alignItems="center" justify="center">
      <Grid container item className={classes.carouselContainer}>
        <Carousel pictures={pictures} carouselStyle={{ width: '100vh', height: '60vh' }} />
      </Grid>
      <Grid item>
        <Button type={buttonType.BUTTON_REQUEST} setOpenToast={setOpenToast} lang={lang} product />
      </Grid>
    </Grid>
  );
};

export default Laser;
