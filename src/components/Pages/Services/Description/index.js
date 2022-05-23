import { Grid, makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles =  makeStyles(theme => ({
  root: { fontFamily: 'HelveticaNeueBold', padding: '1vh 20vh',
  [theme.breakpoints.down('1113')]: {
    padding:'1vh 10vh'
   },
   [theme.breakpoints.down('900')]: {
    padding:'0 5vh'
   },
  [theme.breakpoints.down('500')]: {
    padding:0
   },
},
}));

const Description = ({ title, descr, list }) => {
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.root}>
      <Typography>{title}</Typography>
      <Typography>{descr}</Typography>
      <ul>
        {list?.map((item, id) => (
          <li key={id}>{item}</li>
        ))}
      </ul>
    </Grid>
  );
};

Description.propTypes = {
  title: PropTypes.string,
  descr: PropTypes.string,
  list: PropTypes.array,
};

export default Description;
