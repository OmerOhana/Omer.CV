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
            FullStack lead developer at "Just You" Startup company. Looking for a new challenge where I can show my skills and acquire new tools every day in work and by self-learning.
            In my studies I specialized in: 
            <br/>
            1) Web development with React
            <br/>
            2) Mobile development with React native
            <br/>
            3) Server with Node.js & Express
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
            href='https://drive.google.com/file/d/1j9p9UfYxnzLtkalVLX-n_T1bI-45cagx/view?usp=sharing'
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
