import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import configureStore from './store/store.js';
import App from './App';
import './index.css';

const store = configureStore();
if (import.meta.env.MODE !== "production") {
  console.log('we are here')
  window.store = store;
} 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)



