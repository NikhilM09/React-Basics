import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Errorelement from './components/Errorelement';
import Menu from './components/Menu';
import Profile from './components/Profile';
import Shimmer from './components/Shimmer';
// import Instamart from './components/Instamart';


const Instamart = lazy(()=> import ('./components/Instamart'))

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <Errorelement />,
      children: [
        {
          path: "",
          element: <Body />,
        },
        {
          path: "about",
          element: <About />,
          children: [
            {
              path: "profile",
              element: <Profile />,
            }
          ]
        },
        {
          path: "/contact us",
          element: <Contact />,
        },
        {
          path: "/instamart",
          element: <Suspense fallback={<Shimmer/>}><Instamart /></Suspense>,
        },
        {
          path: "/menu/:id",
          element: <Menu />,
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
