import React from 'react';
import ReactDOM from 'react-dom';

import Routers from '../src/router'

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Fontawesome
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Routers />
  </React.StrictMode>,
  document.getElementById('root')
);
