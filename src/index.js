// eslint-disable-next-line
import React from 'react';
import ReactDOM from 'react-dom';
// import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

// createRoot(document.getElementById('root')).render(<App />);
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
