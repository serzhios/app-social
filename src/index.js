import React from 'react';
import ReactDOM from 'react-dom/client';
import state from "./components/Data/state"
import './index.css';
import App from './App';
let postsData =[
  {text:'Hi,world', id:1, likes:0},
  {text:'I`m Elon Mask, really',id:2,likes:3},
  {text: 'Give me some bitcoin', id:3,likes:10},
  ]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App
    postsData= {postsData}
    // state={state}
    />
    {/* <App */}
  </React.StrictMode>
);
