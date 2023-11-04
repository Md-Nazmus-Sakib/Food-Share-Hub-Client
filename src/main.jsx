import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl mx-auto p-2'>
      <RouterProvider router={router}></RouterProvider>
    </div>

  </React.StrictMode>,
)