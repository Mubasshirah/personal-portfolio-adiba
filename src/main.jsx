import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-gradient-to-r from-purple-900 via-purple-600 to-purple-400'>
       <RouterProvider router={router} />
    </div>
 
</React.StrictMode>,
 
)
