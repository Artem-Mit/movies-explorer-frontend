import React from 'react';
import './Burger.css';

export default function Burger({toggleNav}) {
  return (
    <div className='burger' onClick={toggleNav}>
      <span className="burger__element" />
      <span className="burger__element" />
      <span className="burger__element" />
    </div>
  )
}
