import React from 'react';
import MyImg from '../../assets/omer.jpg';
import './index.css';

const About = () => {
  return (
    <div id='about' className='about-wrapper'>
      <div className='container'>
        <h2 className='about-title'>About Me</h2>
        <div className='row'>
          <div className='col-12 col-lg-7 about-text'>
            <p>
            Hi my name is Omar Ohana - now completing BSc in Software Engineering studies and looking
            for a new challenge where I can show my skills and acquire new tools every day in work and self-learning.
            In my studies I specialized in Web development, Java, React, and Blockchain programming.
            </p>
          </div>
          <div className='col-12 col-lg-4'>
            <img
              className='my-img '
              src={MyImg}
              alt='My profile img'
              width='300'
            />
          </div>
          <a
            target='_blang'
            className='resumeBtn'
            href='https://drive.google.com/file/d/1sTGIZgrc_jqDxzrcyVs5sRGw0kVu-nFt/view?usp=sharing'
          >
            View Resume
          </a>
        </div>
      </div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 100 100'
        preserveAspectRatio='none'
      >
        <polygon fill='#E0F6FD' points='100 ,100 0,100 0,0' />
      </svg>
    </div>
  );
};

export default About;
