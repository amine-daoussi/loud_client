import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

import image from '../../../assets/rental/soundSystem/Powerack/1.jpg';
import Image from '../../dumb/Image';
import Button, { buttonType } from '../../dumb/Button';

const useStyles = makeStyles(theme => ({
  root: {
    fontFamily: 'HelveticaNeueBold',
    padding: '1vh 20vh',
    [theme.breakpoints.down('900')]: {
      padding: '1vh 10vh',
    },
    [theme.breakpoints.down('600')]: {
      padding: '1vh 2vh',
    },
  },
  img: {
    width: '100vh',
    height: '60vh',
    [theme.breakpoints.down('900')]: {
      width: '100%',
      height: '70%',
    },
  },
  block: { height: '100vh' },
  buttonContainer: { marginTop: '5vh' },
  carouselContainer: { width: '100%' },
  button: { marginBottom: '1vh' },
}));

const Powerack = ({ setOpenToast, lang }) => {
  const classes = useStyles();
  return (
    <Grid container item className={classes.root} direction="column" alignItems="center" justify="center">
      <Grid container item className={classes.carouselContainer} alignItems="center" justify="center">
        <Image src={image} alt="powerack powersoft" className={classes.img} />
      </Grid>
      <Grid item container className={classes.buttonContainer} direction="column" alignItems="center">
        <Grid item>
          <Button
            type={buttonType.BUTTON_REQUEST}
            setOpenToast={setOpenToast}
            lang={lang}
            product="Powerack Powersoft X8 Touring"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Powerack;
