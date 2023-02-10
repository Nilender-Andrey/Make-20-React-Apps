import React from 'react';
import icon from '../../assets/star.png';

import './Error-indicator.css';

function ErrorIndicator() {
  return (
    <div className='error-indicator'>
      <p>BOOM!</p>
      <img src={icon} alt='error icon' />
      <p>something has gone terribly wrong</p>
      <p>(but we already sent droids to fix it)</p>
    </div>
  );
}

export default ErrorIndicator;
