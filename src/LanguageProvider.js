import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';

const LanguageProvider = ({ children, locale, messages }) => {
  return (
    <IntlProvider locale={locale} messages={messages}>
      {React.Children.only(children)}
    </IntlProvider>
  );
};

LanguageProvider.propTypes = {
  messages: PropTypes.object,
  children: PropTypes.node.isRequired,
};

export default LanguageProvider;
