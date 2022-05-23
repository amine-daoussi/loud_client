import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Image from '../Image';
import { Grid } from '@material-ui/core';
import BundleCard from '../../Pages/PaBundles/components/BundleCard';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  swipeableViews: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('500')]: {
      width: '70%',
    },
  },
  titlesContainer: {
    color: 'white',
    [theme.breakpoints.down('500')]: {
      marginLeft: '-100px',
      overFlowX: 'scroll',
    },
  },
}));

export default function FullWidthTabs({
  lang,
  xsData,
  sData,
  mData,
  lData,
  xlData,
  xxlData,
  setOpenToast,
  imageStyle,
}) {
  const dataBundlesList = [xsData, sData, mData, lData, xlData, xxlData];
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <Grid className={classes.root} container alignItems="center" justify="center">
      <Grid item>
        <SwipeableViews
          //  axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
          className={classes.swipeableViews}
        >
          <TabPanel value={value} index={0}>
            <Image src={xsData.image} style={imageStyle} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Image src={sData.image} style={imageStyle} />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <Image src={mData.image} style={imageStyle} />
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            <Image src={lData.image} style={imageStyle} />
          </TabPanel>
          <TabPanel value={value} index={4} dir={theme.direction}>
            <Image src={xlData.image} style={imageStyle} />
          </TabPanel>
          <TabPanel value={value} index={5} dir={theme.direction}>
            <Image src={xxlData.image} style={imageStyle} />
          </TabPanel>
        </SwipeableViews>
      </Grid>
      <Grid className={classes.titlesContainer} item>
        <Tabs
          className={classes.tabs}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          aria-label="full width tabs example"
          visibleScrollbar="true"
        >
          <Tab label="XS" {...a11yProps(0)} />
          <Tab label="S" {...a11yProps(1)} />
          <Tab label="M" {...a11yProps(2)} />
          <Tab label="L" {...a11yProps(3)} />
          <Tab label="XL" {...a11yProps(4)} />
          <Tab label="XXL" {...a11yProps(5)} />
        </Tabs>
      </Grid>
      <Grid item>
        <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
          {dataBundlesList.map(bundle => (
            <TabPanel key={bundle.id} value={value} index={bundle.id}>
              <BundleCard dataBundle={bundle} setOpenToast={setOpenToast} lang={lang} />
            </TabPanel>
          ))}
        </SwipeableViews>
      </Grid>
    </Grid>
  );
}
