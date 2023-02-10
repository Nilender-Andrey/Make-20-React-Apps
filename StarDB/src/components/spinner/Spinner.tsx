import React from 'react';
import spinner from '../../assets/spinner.svg';

function Spinner() {
  return (
    <div className='spinner h-100 text-center'>
      <img className='h-100' src={spinner} alt='' />
    </div>
  );
}

export default Spinner;
