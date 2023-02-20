import React from 'react';
import ReactDOM from 'react-dom/client';
import './utils/style/index.css';
import Homepage from './pages/homepage';
import User from './pages/user';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignIn from './pages/signIn';
import { Provider } from 'react-redux'
import store from './utils/store'
import ProtectedRoute from './components/ProtectedRoute';


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  }, 
  {
    path: "/signin",
    element: <SignIn />
  },
  {
    path: "/profile",
    element: (
    <ProtectedRoute>
       <User />
    </ProtectedRoute>
    )
  }
])

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

