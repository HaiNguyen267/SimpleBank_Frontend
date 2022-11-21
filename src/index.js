import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
const CLIENT_ID = '1041545973974-6fhlfpt6pv44fukk40s34qh86j5pj6uk.apps.googleusercontent.com'

root.render(
  <React.StrictMode>
    <BrowserRouter>

      <GoogleOAuthProvider clientId={CLIENT_ID}
      >
        <App />
      </GoogleOAuthProvider>

    </BrowserRouter>
  </React.StrictMode>
);


