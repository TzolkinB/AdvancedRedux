import React from 'react';
import Alert from 'react-s-alert';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

const Growl = () => {
  return (
    <Alert
      stack
      offset={10}
      position="top-right"
      effect="slide"
      timeout={3000}
    />
  );
};

export default Growl;
