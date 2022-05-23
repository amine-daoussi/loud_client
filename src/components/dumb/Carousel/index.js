import { Grid, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import '../../../fonts.css';
import React, { useEffect, useState } from 'react';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import Image from '../Image';

const useStyles = makeStyles(theme => ({
  root: { position: 'relative' },
  controller: {
    transform: 'translateX(10vh)',
    transition: 'transform ease-out 0.45s',
    zIndex: 5,
    position: 'absolute',
    bottom: '7vh',
    right: 0,
    color: 'black',
    backgroundColor: 'white',
    width: '33vh',
    border: '0.5px solid black',
    [theme.breakpoints.down('1400')]: {
      position: 'absolute',
      bottom: '7vh',
      right: '50vh',
    },
    [theme.breakpoints.down('900')]: {
      position: 'absolute',
      bottom: '7vh',
      right: '20vh',
    },
    [theme.breakpoints.down('900')]: {
      display: 'none',
    },
  },
  carousel: {
    [theme.breakpoints.down('900')]: { maxWidth: '50vh', maxHeight: '25vh' },
    [theme.breakpoints.down('600')]: { maxWidth: '40vh', maxHeight: '20vh' },
  },
  description: {
    textTransform: 'uppercase',
    fontSize: '2vh',
    padding: '2vh 0.5vh',
    width: 'max-content',
  },
  buttonContainer: { borderLeft: '0.5px solid black', width: '3vh', height: 'max-content', paddingTop: '1vh' },
  hideImg: { display: 'none' },
  button: { width: '3vh', height: 'auto' },
}));

const Carousel = ({ pictures, carouselStyle }) => {
  const classes = useStyles();
  const [picture, setPicture] = useState(pictures ? pictures[0] : '');
  const [loaded, setLoaded] = useState(false);
  const handlePrevious = index =>
    index === 0 ? setPicture(pictures[pictures.length - 1]) : setPicture(pictures[index - 1]);
  useEffect(() => {
    let timeout = setInterval(() => {
      picture.id === pictures?.length - 1
        ? pictures && setPicture(pictures[0])
        : pictures && setPicture(pictures[picture.id + 1]);
    }, 3500);
    return () => {
      pictures && clearTimeout(timeout);
    };
  }, [picture, pictures]);

  return (
    <Grid item className={classes.root}>
      <Image
        style={carouselStyle}
        className={classes.carousel}
        src={picture.src}
        alt={picture.alt}
        setLoaded={setLoaded}
      />
      {picture.name && loaded && (
        <Grid className={classes.controller} container alignItems="center">
          <Grid item xs={10}>
            <span className={classes.description}>{picture.name}</span>
          </Grid>
          <Grid item xs={1} className={classes.buttonContainer} onClick={() => handlePrevious(picture.id)}>
            <ArrowBackIosOutlinedIcon className={classes.button} />
          </Grid>
          <Grid
            item
            xs={1}
            className={classes.buttonContainer}
            onClick={() =>
              picture.id === pictures.length - 1 ? setPicture(pictures[0]) : setPicture(pictures[picture.id + 1])
            }
          >
            <ArrowForwardIosOutlinedIcon className={classes.button} />
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};
Carousel.propTypes = {
  pictures: PropTypes.array,
  carouselStyle: PropTypes.object,
};
export default Carousel;
