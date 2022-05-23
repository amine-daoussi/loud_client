import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { xsData, sData, mData, lData, xlData, xxlData } from './data';
import Tabs from '../../dumb/Tabs';

const useStyles = makeStyles({
  root: { fontFamily: 'HelveticaNeueBold' },
});

const PaBundles = ({ setOpenToast, lang }) => {
  const classes = useStyles();
  return (
    <Grid container alignItems="center" justify="center" className={classes.root}>
      <Tabs
        xsData={xsData}
        sData={sData}
        mData={mData}
        lData={lData}
        xlData={xlData}
        xxlData={xxlData}
        imageStyle={{ width: '55vh', height: '27vh' }}
        setOpenToast={setOpenToast}
        lang={lang}
      />
    </Grid>
  );
};

export default PaBundles;
