import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

const useStyles = makeStyles(theme => ({
  root: { fontFamily: 'HelveticaNeueBold', width: '60vh', fontSize: '1.8vh' },

  text: {
    textAlign: 'left',
    [theme.breakpoints.down('600')]: { width: '50vh' },
    [theme.breakpoints.down('500')]: { width: '40vh' },
  },
}));

const Description = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <p className={classes.text}>
        <FormattedMessage {...messages.title} />
      </p>
      <p className={classes.text}>
        <FormattedMessage {...messages.main} />
      </p>
      <p className={classes.text}>
        <FormattedMessage {...messages.firstPartner} />
      </p>
      <p className={classes.text}>
        <FormattedMessage {...messages.secondPartner} />
      </p>
      <p className={classes.text}>
        <FormattedMessage {...messages.thirdPartner} />
      </p>
    </Grid>
  );
};

export default Description;
