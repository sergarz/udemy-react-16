import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './About';
import { HashRouter, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  // <Router history={hashHistory}>
  //   <Route path="/" component={App} />
  // </Router>,
  <HashRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/about" component={About} />
    </div>
  </HashRouter>,
  document.getElementById('root'),
);
registerServiceWorker();
