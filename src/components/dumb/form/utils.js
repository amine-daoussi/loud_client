/* eslint-disable */
import { FormattedMessage } from 'react-intl';
import React from 'react';
import messages from './messages';

const regexEmail = /^[a-z0-9]+(?:[ _.-][a-z0-9]+)*$/;
const regEmailVal = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regexPsw = /^[+]?\d+([.]\d+)?$/;

const testValidationEmail = email => regEmailVal.test(email);

export const testEmail = email => regexEmail.test(email);
export const testPhone = psw => regexPsw.test(psw);
export const capitalize = user => (user[0] ? user[0].toUpperCase() + user.slice(1) : null);
export const validate = (user, password) => {
  return testEmail(user) && testPhone(password);
};
export const validUser = user => {
  const errorUser = {};
  if (!user) return (errorUser.username = <FormattedMessage {...messages.nameErrorRequired} />);
};

export const validPhone = psw => {
  const errorPsw = {};
  if (psw && !testPhone(psw)) return (errorPsw.Psw = <FormattedMessage {...messages.phoneErrorNumber} />);
  if (psw && !testEmail(psw)) return (errorPsw.psw = <FormattedMessage {...messages.phoneErrorInvalid} />);
};

export const validEmail = email => {
  const errorEmail = {};
  if (!email) return (errorEmail.email = <FormattedMessage {...messages.emailErrorRequired} />);
  if (!testValidationEmail(email)) return (errorEmail.email = <FormattedMessage {...messages.emailErrorInvalid} />);
};

export const disabled = {};

export const validMessage = message => {
  const errorMessage = {};
  if (!message) return (errorMessage.message = <FormattedMessage {...messages.messageErrorRequired} />);
};
