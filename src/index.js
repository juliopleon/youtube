import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { MovieContextProvider } from './context/MovieContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <MovieContextProvider>
        <App />
      </MovieContextProvider>
    </AuthContextProvider>

  </React.StrictMode>,
  document.getElementById('root')
);
