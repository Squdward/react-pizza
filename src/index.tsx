import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const rootElement = document.getElementById('root');

const root = createRoot(rootElement!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* Обертка для хранения стора внутри localstorage */}
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
