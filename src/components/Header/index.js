import React from 'react';
import './index.css';

const Header = () => {
  return (
    <div id='header' className='header-section'>
      <div className='stars'></div>
      <div className='stars2'></div>
      <div className='stars3'></div>
      <div className='header-title'>
        <div className='header-text'>
          <h1 className='opening-text'>
            <span className='name-text-color'> Omer Ohana</span>
            <br />
            FullStack engineer whos looking for his next challenge
          </h1>
          <a className='headerBtn' href='#about'>
            See More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
