import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Components/Nav/Nav'
import Info from './Components/Info/Info'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <Info />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
