import { BrowserRouter } from 'react-router-dom';
import * as React from 'react';
import { createBrowserHistory } from 'history';
import { hydrate } from 'react-dom';
import App from '../Common/Components/App';
import routes from '../Common/routes';


const history = createBrowserHistory();
const Test = () => <h1>TEst</h1>;

const component = (
  <BrowserRouter>
    <App routes={routes} />
  </BrowserRouter>
);

hydrate(component, document.getElementById('app'));