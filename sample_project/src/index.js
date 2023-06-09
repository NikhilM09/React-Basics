import React, {lazy, Suspense, useState} from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import About from './components/About';
// import Contact from './components/Contact';
import Errorelement from './components/Errorelement';
// import Menu from './components/Menu';
import Profile from './components/Profile';
import Shimmer from './components/Shimmer';
// import Instamart from './components/Instamart';
const Instamart = lazy(()=> import ('./components/Instamart'));
const Contact = lazy(()=> import ('./components/Contact'));
const Menu = lazy(()=>import('./components/Menu'));



const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <Errorelement />,
      children: [
        {
          path: "",
          element: <Body/>,
        },
        {
          path: "/About",
          element: <About />,
          children: [
            {
              path: "profile",
              element: <Profile />
            }
          ]
        },
        {
          path: "/instamart",
          element: <Suspense><Instamart /></Suspense>
        },
        {
          path: "/contact_us",
          element: <Suspense><Contact /></Suspense>
        },
        {
          path: "/menu/:id",
          element: <Suspense><Menu /></Suspense>
        }
      ]
    }
  ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <RouterProvider router={appRouter} />
  /* </React.StrictMode> */
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
