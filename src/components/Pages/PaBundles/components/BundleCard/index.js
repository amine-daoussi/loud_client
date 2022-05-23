import { Grid, makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import Image from '../../../../dumb/Image';
import Button, { buttonType } from '../../../../dumb/Button';

const useStyles = makeStyles(theme => ({
  root: {
    fontFamily: 'HelveticaNeueBold',
    [theme.breakpoints.down('500')]: {
      width: '70%',
    },
  },
  card: { margin: '2vh 0' },
  image: { width: '30vh', height: '20vh' },
  name: { fontWeight: 'bold', fontSize: '2.3vh' },
  subName: { fontWeight: 'bold', fontSize: '2vh' },
  description: { maxWidth: '60vh', fontSize: '1.5vh', marginBottom: '1vh' },
}));
const imageStyle = { width: '30vh', height: '20vh' };
const BundleCard = ({ dataBundle, setOpenToast, lang }) => {
  const dataBundleTop = dataBundle.bundles[0];
  const dataBundleBottom = dataBundle.bundles[1];
  const classes = useStyles();
  return (
    <Grid container className={classes.root} direction="column">
      <Grid container item className={classes.card} alignItems="center">
        <Grid item>
          <Image style={imageStyle} src={dataBundleTop.image} alt="loud and clear products" />
        </Grid>
        <Grid item>
          <Typography className={classes.name}>{dataBundleTop.name}</Typography>
          <Typography className={classes.subName}>{dataBundleTop.subName}</Typography>
          <Typography className={classes.description}>{dataBundleTop.description}</Typography>
        </Grid>
      </Grid>
      <Grid container item className={classes.card} alignItems="center">
        <Grid item>
          <Image style={imageStyle} src={dataBundleBottom.image} alt="loud and clear products" />
        </Grid>
        <Grid item>
          <Typography className={classes.name}>{dataBundleBottom.name}</Typography>
          <Typography className={classes.subName}>{dataBundleBottom.subName}</Typography>
          <Typography className={classes.description}>{dataBundleBottom.description}</Typography>
        </Grid>
        <Grid container justify="center">
          <Button
            type={buttonType.BUTTON_REQUEST}
            setOpenToast={setOpenToast}
            lang={lang}
            product={`PA Bundles ${dataBundle.title}`}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

BundleCard.propTypes = {
  dataBundle: PropTypes.object,
};

export default BundleCard;
