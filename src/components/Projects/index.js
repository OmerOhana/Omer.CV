import React from 'react';
import Project from '../Project';
import BlockChain from '../../assets/blockchainpic.jpg';
import Watcher from '../../assets/‏‏EarthQuakeWatcher.PNG';

import './index.css';

const Projects = () => {
  const CryptoContracts =
    'A platform for transferring smart real estate contracts in a blockchain environment, with the main goal being to sign and transfer the contracts without the intervention of third parties such as realtors. The client is built in the react language and the server in node.js. The project has a major emphasis on information security between users, so that each contract undergoes two-sided approval of users before its encrypted rise to the blockchain network.';
  const EarthQuakeWatcher =
    'A map-based app for earthquake tracking and detection. Any earthquake that occurred is indicated on the map by a marker with every earthquake details. All the coordinates in the map come from https://earthquake.usgs.gov/ real time database.';
  
  return (
    <div className='projects'>
      <div className='container-fluid'>
        <h2 className='projects-title'>Main Projects</h2>
        <Project
          desc={CryptoContracts}
          img={BlockChain}
          website={'https://mizrahiomer.github.io/todolist/'}
          source={'https://github.com/OmerOhana/Crypto-Contracts'}
          title={'Crypto-Contracts'}
        />
        <Project
          desc={EarthQuakeWatcher}
          img={Watcher}
          website={'https://mizrahiomer.github.io/tictactoe/'}
          source={'https://github.com/OmerOhana/EarthQuakeWatcher'}
          title={'EarthQuake Watcher'}
        />
      </div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 100 100'
        preserveAspectRatio='none'
      >
        <polygon fill='#252934' points='100,100 0,100 0,0' />
      </svg>
    </div>
  );
};

export default Projects;
