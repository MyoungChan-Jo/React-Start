import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; //App.js가 생략되어 있다.
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// <App /> = App.js가 출력될 위치이다. <App></App> 를 생략한 표현
// xml 에서 문법을 따온거지만 react에서는 component라고 칭한다.
root.render(
  <React.StrictMode>
    {/* <App></App> 컴포넌트이다. App.js결과를 return한다. */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
