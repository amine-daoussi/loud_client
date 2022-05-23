import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import '../../../fonts.css';
import React, { useState } from 'react';

const Image = ({ alt, src, style, className, setLoaded }) => {
  const [loading, setLoading] = useState(true);
  return (
    <Grid>
      <img
        className={className}
        alt={alt}
        src={src}
        style={{ ...style, display: loading ? 'none' : 'flex' }}
        onLoad={() => {
          setLoading(false);
          setLoaded && setLoaded(true);
        }}
      />
      {loading && (
        <Grid style={style} container alignItems="center" justify="center">
          <CircularProgress />
        </Grid>
      )}
    </Grid>
  );
};
Image.propTypes = {
  pictures: PropTypes.string,
  src: PropTypes.string,
  style: PropTypes.object,
};
export default Image;
