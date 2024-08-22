import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
// import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import GridBackground from './components/ui/GridBackground.tsx';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <GridBackground>
          <App />
        </GridBackground>
      </BrowserRouter>
    </React.StrictMode>
  );
}
