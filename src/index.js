import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';

import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import AppRouter from './Rutas';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const initialOptions = {
//   clientId: "test",
//   currency: "USD",
//   intent: "capture",
// };

root.render(
  <React.StrictMode>
    <PayPalScriptProvider 
      options={{ clientId: "ATRxZrGKZBwamBoWUE6XhfOLcoOUgzZzNpWLe7qNpdUV1pKfG_X-5qwrXibwfx2kTNoBBOpy5yEV5LTq" }}
    >
      <AppRouter />
    </PayPalScriptProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
