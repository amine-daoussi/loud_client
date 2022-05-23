import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useSelector } from 'react-redux';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CustomizedSnackbars = ({ openToast, setOpenToast }) => {
  const isOpenToast = useSelector(state => state.openToast);
  console.log('ccc', isOpenToast);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenToast({ open: false });
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar
        open={openToast?.open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <Alert onClose={handleClose} severity={openToast?.severity} sx={{ width: '100%' }}>
          {openToast?.message}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default CustomizedSnackbars;
