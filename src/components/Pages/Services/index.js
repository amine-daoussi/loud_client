import { Grid, makeStyles } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import React from 'react';
import messages from './messages';
import { picturesLoudProfRental, picturesMinuit, picturesProduction } from './data';
import Carousel from '../../dumb/Carousel';
import Description from './Description';
import Button, { buttonType } from '../../dumb/Button';

const useStyles = makeStyles(theme => ({
  root: { fontFamily: 'HelveticaNeueBold', padding: '0 100px',
  [theme.breakpoints.down('700')]: {
    padding: '0 0'
   },
},
  block: { height: '100vh',
  [theme.breakpoints.down('1113')]: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80vh'
  },
  [theme.breakpoints.down('700')]: {
    height: 'max-content',
    marginBottom:'10vh'
   },   
},
  descriptionContainer: {
    width: '50%',
     [theme.breakpoints.down('500')]: { 
      width: '100%',   
     },
     [theme.breakpoints.down('900')]: {     
      width: '80%',   
     },
  },
}));

const data1 = {
  title: <FormattedMessage {...messages.titleRental} />,
  descr: <FormattedMessage {...messages.descRental} />,
  list: [
    <FormattedMessage {...messages.club} />,
    <FormattedMessage {...messages.concert} />,
    <FormattedMessage {...messages.offLocation} />,
    <FormattedMessage {...messages.festival} />,
    <FormattedMessage {...messages.corporateEvents} />,
  ],
};

const data2 = {
  title: <FormattedMessage {...messages.titleMinuit} />,
  descr: <FormattedMessage {...messages.descMinuit} />,
  list: [
    <FormattedMessage {...messages.club} />,
    <FormattedMessage {...messages.concert} />,
    <FormattedMessage {...messages.offLocation} />,
    <FormattedMessage {...messages.corporateEvents} />,
  ],
};

const data3 = {
  title: <FormattedMessage {...messages.titleProd} />,
  descr: <FormattedMessage {...messages.descProd} />,
  list: [
    <FormattedMessage {...messages.locationScouting} />,
    <FormattedMessage {...messages.eventDesign} />,
    <FormattedMessage {...messages.TechProduction} />,
    <FormattedMessage {...messages.talentSourcing} />,
    <FormattedMessage {...messages.schedule} />,
  ],
};
const carouselStyle = { width: '80vh' };

const Services = ({ setOpenToast, lang }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} justify="center">
      <Grid item container alignItems="center" className={classes.block}>
        <Grid item className={classes.carouselContainer}>
          <Carousel pictures={picturesLoudProfRental} carouselStyle={carouselStyle} />
        </Grid>
        <Grid item container direction="column" alignItems="center" className={classes.descriptionContainer}>
          <Description {...data1} />
          <Button
            type={buttonType.BUTTON_REQUEST}
            setOpenToast={setOpenToast}
            lang={lang}
            product="Loud Professional Rental"
          />
        </Grid>
      </Grid>
      <Grid item container alignItems="center" justify="center" direction="row-reverse" className={classes.block}>
        <Grid item className={classes.carouselContainer}>
          <Carousel pictures={picturesMinuit} carouselStyle={carouselStyle} />
        </Grid>
        <Grid item container direction="column" alignItems="center" className={classes.descriptionContainer}>
          <Description {...data2} />
          <Button
            type={buttonType.BUTTON_REQUEST}
            setOpenToast={setOpenToast}
            lang={lang}
            product="Minuit Une IVL Lasers Rental "
          />
        </Grid>
      </Grid>
      <Grid item container alignItems="center" justify="center" className={classes.block}>
        <Grid item className={classes.carouselContainer}>
          <Carousel pictures={picturesProduction} carouselStyle={carouselStyle} />
        </Grid>
        <Grid item container direction="column" alignItems="center" className={classes.descriptionContainer}>
          <Description {...data3} />
          <Button type={buttonType.BUTTON_REQUEST} setOpenToast={setOpenToast} lang={lang} product="Production" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Services;
