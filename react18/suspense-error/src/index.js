import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App1 from './apps/App1';
import App2 from './apps/App2'; // suspense 직접 구현 버전
import App3 from './apps/App3'; // suspense image 구현 버전
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App1 /> */}
    {/* <App2 /> */}
    <App3 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
