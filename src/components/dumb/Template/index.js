import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, makeStyles } from '@material-ui/core';

import layout from '../../../assets/template/layout.gif';
import ResponsiveAppBar from './ResponsiveAppBar';
import Toast from '../../dumb/Toast';
import AppBar from './AppBar';
import Burger from './Burger';
import Footer from './Footer';
import logo from '../../../assets/template/logo.jpg';

const useStyles = makeStyles(theme => ({
  '@global': {
    'html,body': { backgroundColor: 'black' },
  },
  root: {
    fontFamily: 'unherit',
    backgroundColor: 'black',
    backgroundImage: `url(${layout})`,
    backgroundSize: 'cover',
    color: 'white',
    minHeight: '100vh',
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
  },
  header: { flex: 1 },
  appBarContainer: {
    [theme.breakpoints.down('800')]: { display: 'none' },
  },
  responsiveAppBarContainer: {
    [theme.breakpoints.up('799')]: { display: 'none' },
    position: 'fixed',
    top: '8vh',
    zIndex: 10,
  },
  burgerContainer: {
    position: 'fixed',
    zIndex: 200,
    paddingRight: '1vh',
    [theme.breakpoints.up('799')]: { display: 'none' },
  },
  burgerTitle:{fontFamily: 'HelveticaNeueBold'},
  footerContainer: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
  },
  lg: { fontFamily: 'HelveticaNeueBold', marginLeft: '2vh', cursor: 'pointer' },
  logoBlock: { position: 'absolute', top: 0, left: 0, width: '50vh' },
  logo: { width: '4vh' },
  cloud: { fontSize: '3vh', fontFamily: 'HelveticaNeueBold', marginLeft: '3vh' },
  componentsContainer: {
    flex: 10,
    paddingTop: '10vh',
  },
  langContainer: {
    backgroundColor: 'white',
  },
}));

const Template = ({ lang, setLang, children, openToast, setOpenToast }) => {
  const classes = useStyles();
  const [isOpenBurger, toggleBurger] = useState(false);

  return (
    <Grid className={classes.root} container direction="column">
      <Grid className={classes.header} item>
        <Grid className={classes.burgerContainer} container alignItems="center" justify="space-between">
          <Burger isOpenBurger={isOpenBurger} toggleBurger={toggleBurger} />
          <span className={classes.burgerTitle} >Loud And Clear</span>
          <img className={classes.logo} src={logo} alt="loud and clear" />
        </Grid>
        <Grid className={classes.appBarContainer}>
          <AppBar />
        </Grid>
        {isOpenBurger && (
          <Grid className={classes.responsiveAppBarContainer}>
            <ResponsiveAppBar isOpenBurger={isOpenBurger} toggleBurger={toggleBurger} />
          </Grid>
        )}
      </Grid>
      <Grid className={classes.componentsContainer}>{children}</Grid>
      <Grid className={classes.footerContainer} item container alignItems="center">
        <Footer lang={lang} setLang={setLang} openToast={openToast} setOpenToast={setOpenToast} />
      </Grid>
      <Toast openToast={openToast} setOpenToast={setOpenToast} />
    </Grid>
  );
};

Template.propTypes = {
  setLang: PropTypes.func,
  children: PropTypes.node,
  lang: PropTypes.string,
};

export default Template;
