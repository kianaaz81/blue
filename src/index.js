import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'

const rootElement = document.getElementById('root');  

const root = ReactDOM.createRoot(rootElement);  

if (rootElement) {  
  root.render(<App />);  
} else {  
  console.error("Target container is not a DOM element.");  
} 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

