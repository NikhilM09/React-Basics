import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Body from './Body';
import About from './About';
import Contact from './Contact';
import Header from './Header';
import Errorelement from './Errorelement';


const appRouter = createBrowserRouter(
    [
      {
        path: "/",
        element: <App />,
        errorElement: <Errorelement />,
        children: [
          {
            path: "/",
            element: <Body />
          },
          {
            path: "/about",
            element: <About />
          },
          {
            path: "/about",
            element: <About />
          },
          {
            path: "/contact",
            element: <Contact />
          }
        ]
      },
    ])

export default appRouter;
