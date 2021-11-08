import React from 'react';
import { render } from 'react-dom';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import './style.css';

import smartHomeData from './smartHomeData';

const App = () => (
  <>
    <div className="container">
      <Header title='Chytrý dům' />
      <Dashboard data={smartHomeData} />
	  </div>
  </>
);

render(<App />, document.querySelector('#app'));
