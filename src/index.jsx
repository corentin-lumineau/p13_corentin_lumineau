import React from 'react';
import ReactDOM from 'react-dom/client';
import './utils/style/index.css';
import Homepage from './pages/homepage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignIn from './pages/signIn';
import { Provider } from 'react-redux'
import store from './utils/store'


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  }, 
  {
    path: "/signin",
    element: <SignIn />
  }
])

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);


