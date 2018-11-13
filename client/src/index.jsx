import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
//import redux store
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {rootReducer} from './reducers/rootReducer'

//Creating store and passing ruducer function
const store = createStore(rootReducer)

//Wrapping react application with react-redux provider
//This allows react to access the store
ReactDOM.render(<Provider store= {store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
