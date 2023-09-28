import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './app/store'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserView from './features/user/UserView'
import UserDetails from './features/user/UserDetails'
const router = createBrowserRouter([
  {
    path: "/",
    element:<UserView/> ,
  },
  {
    path: "/user/:id",
    element:<UserDetails/> ,
    loader:({params})=>fetch(`/user.json/${params.id}`)
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
    </Provider>
  </React.StrictMode>,
  
)
