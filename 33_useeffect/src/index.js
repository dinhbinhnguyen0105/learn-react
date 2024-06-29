import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Fake comments 

const emitComments = lessionID => {
  setInterval(() => {
    window.dispatchEvent(new CustomEvent(`lession-${lessionID}`, {
      detail: `Comment của bài ${lessionID}`,
    }));
  }, 2000);
}

emitComments(1);
emitComments(2);
emitComments(3);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);
