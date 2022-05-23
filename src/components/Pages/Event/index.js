import { Grid, makeStyles } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import React, { useState, useEffect } from 'react';
import messages from './messages';
import { loudProfPictures, ourEventPictures, partnerPictures } from './data';
import Carousel from '../../dumb/Carousel';
import { equals } from 'ramda';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  root: {
    fontFamily: 'HelveticaNeueBold',
    [theme.breakpoints.down('600')]: {
      flexDirection: 'reverse',
    },
  },
  eventPictures: { flex: 5 },
  space: { flex: 1 },
  titleContainer: {
    marginBottom: '10vh',
    [theme.breakpoints.down('1000')]: {
      flexDirection: 'column',
    },
  },
  title: { fontFamily: 'HelveticaNeueBold', fontSize: '2vh', cursor: 'pointer' },
  carousselContainer: {
    [theme.breakpoints.down('1000')]: {
      width: '30vh',
      height: '15vh',
    },
    [theme.breakpoints.down('600')]: {
      marginLeft: '-100px',
    },
    width: '80vh',
    height: '40vh',
  },
  caroussel: { width: '70vh' },
}));

const carouselStyle = { width: '90vh', height: '50vh' };

const Event = () => {
  const classes = useStyles();
  const [pictures, setPictures] = useState({ data: loudProfPictures, loading: false });

  useEffect(() => {
    setTimeout(() => (pictures.loading ? setPictures({ ...pictures, loading: false }) : null), 200);
  }, [pictures]);

  return (
    <Grid container className={classes.root} justify="center" alignItems="center">
      <Grid container className={classes.eventPicturesContainer} justify="center" alignItems="center">
        <Grid item className={classes.space}></Grid>
        <Grid item container className={classes.eventPictures} direction="column" justify="center" alignItems="center">
          <Grid item container className={classes.titleContainer} justify="space-between" alignItems="center">
            <span
              className={classes.title}
              style={{ borderBottom: equals(pictures.data, loudProfPictures) ? '1px solid white' : 'none' }}
              onClick={() =>
                !equals(pictures.data, loudProfPictures) ? setPictures({ data: loudProfPictures, loading: true }) : null
              }
            >
              <FormattedMessage {...messages.loudProf} />
            </span>
            <span
              className={classes.title}
              style={{ borderBottom: equals(pictures.data, ourEventPictures) ? '1px solid white' : 'none' }}
              onClick={() =>
                !equals(pictures.data, ourEventPictures) ? setPictures({ data: ourEventPictures, loading: true }) : null
              }
            >
              <FormattedMessage {...messages.ourEvent} />
            </span>
            <span
              className={classes.title}
              style={{ borderBottom: equals(pictures.data, partnerPictures) ? '1px solid white' : 'none' }}
              onClick={() =>
                !equals(pictures.data, partnerPictures) ? setPictures({ data: partnerPictures, loading: true }) : null
              }
            >
              <FormattedMessage {...messages.partner} />
            </span>
          </Grid>
          <Grid item className={classes.carousselContainer}>
            {pictures.loading ? (
              <CircularProgress />
            ) : (
              <Carousel pictures={pictures.data} carouselStyle={carouselStyle} />
            )}
          </Grid>
        </Grid>
        <Grid item className={classes.space}></Grid>
      </Grid>
    </Grid>
  );
};

export default Event;
