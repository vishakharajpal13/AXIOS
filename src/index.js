import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL="https://jsonplaceholder.cypress.io";
axios.defaults.headers.common['Authorization']="AUTH TOKEN";
axios.defaults.headers.post['Content-Type']='application/json';

ReactDOM.render( <App />, document.getElementById( 'root' ));
registerServiceWorker();



//Index.js is the most global js page where we can set interceptors and default global configuration for Axios .
//In whole app we have used same http url and so we can set it default in index.js
//This is not limited to just baseURL, we can set default headers, common header are the genral headers set for all
//types of requests. 

//next part is creating and using instances