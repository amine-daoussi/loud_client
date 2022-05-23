import { Grid, makeStyles } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import React from 'react';
import messages from './messages';
import { pictures } from './data';
import Carousel from '../../dumb/Carousel';
import Button, { buttonType } from '../../dumb/Button';

const useStyles = makeStyles(theme => ({
  root: {
    fontFamily: 'HelveticaNeueBold',
    padding: '1vh 20vh',
    [theme.breakpoints.down('1200')]: {
      padding: '1vh 10vh',
    },
    [theme.breakpoints.down('1000')]: {
      padding: '1vh 4vh',
    },
    [theme.breakpoints.down('850')]: {
      padding: '1vh 0',
    },
  },
  blockContainer: {
    marginTop: '5vh',
    [theme.breakpoints.down('800')]: {
      marginTop: '8vh',
    },
  },
  carouselContainer: { width: '100%' },
  button: { marginBottom: '1vh' },
  buttonContainer: {
    width: '30%',
    [theme.breakpoints.down('1500')]: {
      width: '50%',
    },
    [theme.breakpoints.down('800')]: {
      flexDirection: 'column',
      width: 'max-content',
      marginTop: '3vh',
      alignItems: 'space-between',
    },
  },
  butt: {
    [theme.breakpoints.down('800')]: {
      marginBottom: '3vh',
    },
  },
}));

const MonitoringBundle = ({ lang, setOpenToast }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} direction="column" alignItems="center" justify="center">
      <Grid container item className={classes.carouselContainer} alignItems="center" justify="center">
        <Carousel pictures={pictures} carouselStyle={{ width: '100vh', height: '60vh' }} />
      </Grid>
      <Grid item container className={classes.blockContainer} direction="column" alignItems="center" justify="center">
        <Grid className={classes.button} item>
          <FormattedMessage {...messages.downloadDescription} />
        </Grid>
        <Grid item container className={classes.buttonContainer} alignItems="center" justify="space-between">
          <Grid className={classes.butt}>
            <Button type={buttonType.BUTTON_DOWNLOAD} />
          </Grid>
          <Button
            type={buttonType.BUTTON_REQUEST}
            setOpenToast={setOpenToast}
            lang={lang}
            product="Monitoring Bundle"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MonitoringBundle;
