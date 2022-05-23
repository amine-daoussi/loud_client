import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Flag from 'react-world-flags';

const useStyles = makeStyles(theme => ({
  root: { padding: '0 1vh' },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontFamily: 'HelveticaNeueBold',
    cursor: 'pointer',
    fontSize: '1.5vh',
  },
  flagContainer: {
    cursor: 'pointer',
  },
  flag: { width: '3.5vh', height: 'auto' },
  void: { flex: 1 },
  footerContainer: { flex: 1 },
  impressiumContainer: {
    flex: 1,
  },
  languageContainer: { flex: 1 },
}));
const Footer = ({ lang, setLang, setOpenToast }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} alignItems="center">
      <Grid item container className={classes.impressiumContainer} justify="flex-start" alignItems="center">
        <a href="/impressum" target="_blank" className={classes.link}>
          <span>Impressium</span>
        </a>
      </Grid>
      <Grid item container className={classes.languageContainer} justify="flex-end" alignItems="center">
        <Grid
          item
          style={{ margin: '15px', border: lang === 'en' ? '2px solid white' : null }}
          className={classes.flagContainer}
          onClick={() => {
            setLang('en');
            lang !== 'en' && setOpenToast({ open: true, severity: 'info', message: 'Language switched to English!' });
          }}
        >
          <Flag code="gb" className={classes.flag} />
        </Grid>
        <Grid
          item
          style={{ border: lang === 'de' ? '2px solid white' : null }}
          className={classes.flagContainer}
          onClick={() => {
            setLang('de');
            lang !== 'de' && setOpenToast({ open: true, severity: 'info', message: 'Sprache auf Deutsch umgestellt!' });
          }}
        >
          <Flag code="de" className={classes.flag} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
