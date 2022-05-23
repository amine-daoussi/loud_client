import { Grid, makeStyles, Typography } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import React from 'react';
import messages from './messages';
import { pictures } from './data';
import Carousel from '../../dumb/Carousel';

const useStyles = makeStyles(theme => ({
  root: {
    fontFamily: 'HelveticaNeueBold',
    [theme.breakpoints.down('500')]: {
      marginBottom: '5vh',
    },
  },
  carouselContainer: { width: '100vh' },
  descriptionContainer: {
    marginTop: '10vh',
    width: '90%',
    [theme.breakpoints.down('700')]: {
      flexDirection: 'column',
    },
  },
  descriptionBlock: {
    width: '50vh',
    [theme.breakpoints.down('500')]: {
      width: '300px',
      marginBottom: '3vh',
    },
  },
  title: { fontFamily: 'HelveticaNeueBold' },
}));

const Showroom = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} direction="column" alignItems="center" justify="center">
      <Grid container item className={classes.carouselContainer}>
        <Carousel pictures={pictures} carouselStyle={{ width: '100vh', height: '60vh' }} />
      </Grid>
      <Grid container item className={classes.descriptionContainer} justify="space-between" wrap>
        <Grid container item className={classes.descriptionBlock} wrap>
          <Typography className={classes.title}>
            <FormattedMessage {...messages.showroomTitle} />
          </Typography>
          <Grid className={classes.desc}>
            <Typography>
              <FormattedMessage {...messages.showroomDesc} />
            </Typography>
          </Grid>
        </Grid>
        <Grid container item direction="column" className={classes.descriptionBlock}>
          <Typography className={classes.title}>
            <FormattedMessage {...messages.location} />
          </Typography>
          <Grid className={classes.desc} container direction="column">
            <Typography>Uferstrasse 8-11 (Tor A, Studio A14, HinterHof Piano Salon)</Typography>
            <Typography>DE-13357 BERLIN</Typography>
            <Typography>https://goo.gl/maps/xN4FgXkYAWQdyu2k6</Typography>
            <Typography>
              <FormattedMessage {...messages.locationDesc} />
            </Typography>
          </Grid>
        </Grid>
        <Grid container item direction="column" className={classes.descriptionBlock}>
          <Typography className={classes.title}>
            <FormattedMessage {...messages.opening} />
          </Typography>
          <Grid className={classes.desc} container direction="column">
            <Typography>
              <FormattedMessage {...messages.openingDesc1} />
            </Typography>
            <Typography>
              <FormattedMessage {...messages.openingDesc2} />
            </Typography>
            <Typography>
              <FormattedMessage {...messages.openingDesc3} />
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Showroom;
