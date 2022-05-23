import { Button, Grid, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Modal from '@material-ui/core/Modal';
import PropTypes from 'prop-types';
import messages from './messages';
import Form from '../../dumb/form';

export const buttonType = {
  BUTTON_REQUEST: 'buttonRequest',
  BUTTON_DOWNLOAD: 'buttonDownload',
};

const useStyles = makeStyles(theme => ({
  root: { fontFamily: 'HelveticaNeueBold', width: '20vh', textDecoration: 'none' },
  modal: {},
}));

const GlobalButton = ({ type, setOpenToast, lang, product }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  if (type === buttonType.BUTTON_REQUEST)
    return (
      <Grid>
        <Button variant="contained" onClick={handleOpen} className={classes.root}>
          <FormattedMessage {...messages.buttonRequest} />
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          className={classes.modal}
        >
          <Form handleClose={handleClose} setOpenToast={setOpenToast} lang={lang} product={product} />
        </Modal>
      </Grid>
    );
  if (type === buttonType.BUTTON_DOWNLOAD)
    return (
      <Grid>
        <Button
          variant="contained"
          className={classes.root}
          download
          href={process.env.PUBLIC_URL + '/MonitoringBundleSystem.pdf'}
        >
          <span style={{ fontFamily: 'HelveticaNeueBold', width: '20vh', textDecoration: 'none', textAlign: 'center' }}>
            <FormattedMessage {...messages.buttonDownload} />
          </span>
        </Button>
      </Grid>
    );
};

GlobalButton.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
};

export default GlobalButton;
