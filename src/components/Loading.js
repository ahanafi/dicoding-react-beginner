import React from 'react'
import './../styles/loader.css';

const Loading = ({ isOpen }) => {
  return (
    <div
      id='loader'
      style={{ 
        display: isOpen ? 'flex' : 'none',
        width: '100%'
       }}
      >
      <div className='lds-spinner'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loading;