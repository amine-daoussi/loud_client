import React, { useState } from 'react';
import { makeStyles, DialogContent, Box, Grid, Button } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import { Form, Field } from 'react-final-form';
import TextField from '../TextField';
import { capitalize, testEmail, validMessage, validUser, validPhone, validEmail } from './utils';
import messages from './messages';

const useStyles = makeStyles(theme => ({
  container: {
    [theme.breakpoints.down('1300')]: { width: '40vh', height: '80vh', border: '1px solid red' },
    marginTop: '10vh',
    height: '80vh',
    width: '50vh',
    backgroundColor: 'white',
    color: 'white',
    border: '1px solid green',
    opacity: 0.9,
  },
  paper: {},
  dialogContent: { height: '100%' },
  fields: {},
  fieldContainer: { width: '100%', marginBottom: '3vh' },
  field: { color: 'white' },
  buttonsContainer: { marginTop: '8vh' },
}));

const MailForm = ({ handleClose, setOpenToast, product }) => {
  const classes = useStyles();
  //eslint-disable-next-line
  const [mailResponse, setMailResponse] = useState();
  console.log('mailResponse', mailResponse);

  const sendMail = data => {
    return fetch('/mail/forma', {
      // return fetch('/api/forma', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        setMailResponse(response.status);
      })
      .catch(err => console.log(err));
  };

  const onSubmit = values => {
    sendMail({
      firstname: values.firstName,
      lastname: values?.lastName,
      email: values?.email,
      phoneNumber: values?.phoneNumber || '',
      message: values?.message,
      product,
    })
      .then(handleClose)
      .then(
        setOpenToast({
          open: true,
          severity: 'success',
          message: <FormattedMessage {...messages.messageSent} />,
        }),
      );
  };

  return (
    <Grid container alignItems="center" justify="center">
      <Box boxShadow={2} className={classes.container}>
        <Form
          fullWidth
          onSubmit={onSubmit}
          className={classes.paper}
          render={({ handleSubmit, values, valid }) => (
            <form spacing={0} onSubmit={handleSubmit}>
              <DialogContent>
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  justify="center"
                  className={classes.dialogContent}
                >
                  <Grid className={classes.fields} container>
                    <Grid className={classes.fieldContainer}>
                      <FormattedMessage {...messages.firstName}>
                        {placeholder => (
                          <Field
                            type="text"
                            validate={validUser}
                            component={TextField}
                            className={classes.field}
                            name="firstName"
                            parse={capitalize}
                            placeholder={placeholder}
                            required={testEmail(values.firstName)}
                          />
                        )}
                      </FormattedMessage>
                    </Grid>
                    <Grid className={classes.fieldContainer}>
                      <FormattedMessage {...messages.lastName}>
                        {placeholder => (
                          <Field
                            type="text"
                            validate={validUser}
                            component={TextField}
                            className={classes.field}
                            name="lastName"
                            parse={capitalize}
                            placeholder={placeholder}
                            required={testEmail(values.lastName)}
                          />
                        )}
                      </FormattedMessage>
                    </Grid>
                    <Grid className={classes.fieldContainer}>
                      <FormattedMessage {...messages.email}>
                        {placeholder => (
                          <Field
                            validate={validEmail}
                            type="email"
                            name="email"
                            className={classes.field}
                            component={TextField}
                            placeholder={placeholder}
                            required={testEmail(values.password)}
                          />
                        )}
                      </FormattedMessage>
                    </Grid>
                    <Grid className={classes.fieldContainer}>
                      <FormattedMessage {...messages.phone}>
                        {placeholder => (
                          <Field
                            validate={validPhone}
                            type="text"
                            name="phoneNumber"
                            className={classes.field}
                            component={TextField}
                            placeholder={placeholder}
                          />
                        )}
                      </FormattedMessage>
                    </Grid>
                    <Grid className={classes.fieldContainer}>
                      <FormattedMessage {...messages.message}>
                        {placeholder => (
                          <Field
                            validate={validMessage}
                            type="text"
                            name="message"
                            className={classes.field}
                            component={TextField}
                            rows={5}
                            placeholder={placeholder}
                            required={validMessage(values.message)}
                          />
                        )}
                      </FormattedMessage>
                    </Grid>
                  </Grid>
                  <Grid container justify="space-around" className={classes.buttonsContainer}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                      disabled={!valid}
                    >
                      <FormattedMessage {...messages.submit} />
                    </Button>
                    <Button onClick={handleClose} variant="contained" color="primary" className={classes.submit}>
                      <FormattedMessage {...messages.cancel} />
                    </Button>
                  </Grid>
                </Grid>
              </DialogContent>
            </form>
          )}
        />
      </Box>
    </Grid>
  );
};

export default MailForm;
