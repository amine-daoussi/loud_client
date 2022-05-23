import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

const TextFieldForm = ({ input, placeholder, meta, className, required, rows = 1 }) => {
  const [blur, setBlur] = useState(false);
  const { value, onChange, type } = input;
  const { error, dirty, submitError } = meta;
  const showError = error && dirty && blur;

  return (
    <TextField
      onBlur={() => {
        setBlur(true);
      }}
      required={required}
      multiline
      rows={rows}
      className={className}
      variant="outlined"
      fullWidth
      value={value}
      onChange={onChange}
      type={type}
      error={showError}
      placeholder={placeholder}
      label={placeholder}
      helperText={showError ? error || submitError : undefined}
    />
  );
};
TextFieldForm.propTypes = {
  input: PropTypes.object,
  placeholder: PropTypes.string,
  meta: PropTypes.object,
  className: PropTypes.string,
};

export default TextFieldForm;
