import { Grid, makeStyles } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import React from 'react';
import messages from './messages';
import photo1 from '../../../assets/contact/1.JPG';
import photo3 from '../../../assets/contact/3.JPG';
import photo4 from '../../../assets/contact/4.JPG';

const useStyles = makeStyles(theme => ({
  root: {
    fontFamily: 'HelveticaNeueBold',
    padding: '2vh 1vh 7vh 1vh',
    [theme.breakpoints.down('800')]: { padding: '3vh 1vh 7vh 1vh' },
  },
  title: {
    fontSize: '4vh',
    fontWeight: 'bold',
    marginBottom: '10vh',
    [theme.breakpoints.down('799')]: { marginBottom: '5vh', fontSize: '3vh' },
  },
  descriptionTop: { marginBottom: '2vh' },
  image: { width: '20vh', marginLeft: '3vh' },
  photosContainer: { marginBottom: '10vh' },
  photoBlock: { flex: 1 },
  descriptionContainer: {
    padding: '0 30vh',
    [theme.breakpoints.down('1000')]: { padding: '0 10vh' },
    [theme.breakpoints.down('700')]: { padding: '0 4vh' },
  },
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column" justify="center" alignItems="center" className={classes.root}>
      <span className={classes.title}>
        <FormattedMessage {...messages.title} />
      </span>
      <Grid
        className={classes.photosContainer}
        container
        justify="space-between"
        align="center"
        direction="row"
        wrap="wrap"
      >
        <Grid className={classes.photoBlock} item container direction="column" alignItems="center" justify="center">
          <img src={photo1} alt="team" className={classes.image} />
          <span>Adriaan Van Der Werf</span>
        </Grid>
        <Grid className={classes.photoBlock} item container direction="column" alignItems="center" justify="center">
          <img src={photo4} alt="team" className={classes.image} />
          <span>Vincent Vidal</span>
        </Grid>
        <Grid className={classes.photoBlock} item container direction="column" alignItems="center" justify="center">
          <img src={photo3} alt="team" className={classes.image} />
          <span>Rémi Recoque </span>
        </Grid>
        {/* <img src={photo2} alt="team" className={classes.imageResponsive} /> */}
      </Grid>
      <Grid className={classes.descriptionContainer}>
        <p className={classes.descriptionTop}>
          <FormattedMessage {...messages.descriptionTop} />
        </p>
        <p className={classes.descriptionTop}>
          <FormattedMessage {...messages.descriptionBottom} />
        </p>
      </Grid>
    </Grid>
  );
};

export default Contact;
