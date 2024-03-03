import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from "react-redux"
import { store } from "./reduxStore.js"
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom"
import { Login } from './auth/Login.jsx'
import { Discover } from './pages/Discover.jsx'
import { AuthLayout } from './auth/AuthLayout.jsx'
import { UserProfile } from './pages/UserProfile.jsx'
import { Register } from './auth/Register.jsx'
import { Home } from './pages/Home.jsx'
import { Subscription } from './pages/Subscription.jsx'
import Payment from './components/Payment.jsx'

const route = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      // {
      //   path: '/',
      //   element: (
      //     <AuthLayout authentication={false}>
      //       <Home />
      //     </AuthLayout>
      //   )
      // },
      {
        path: '/login',
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        )
      },
      {
        path: '/signup',
        element: (
          <AuthLayout authentication={false}>
            <Register />
          </AuthLayout>
        )
      },
      {
        path: '/user-profile',
        element: (
          <AuthLayout authentication>
            <UserProfile />
          </AuthLayout>
        )
      },
      {
        path: '/discover',
        element: (
          <AuthLayout authentication>
            <Discover />
          </AuthLayout>
        )
      }, 
      {
        path: '/favorite',
        element: (
          <AuthLayout authentication>
            <Discover />
          </AuthLayout>
        )
      },
      {
        path: '/chats',
        element: (
          <AuthLayout authentication>
            <Discover />
          </AuthLayout>
        )
      },
      {
        path: '/profile',
        element: (
          <AuthLayout authentication>
            <Discover />
          </AuthLayout>
        )
      },
      {
        path: '/subscription',
        element: (
          <AuthLayout authentication>
            <Subscription />
          </AuthLayout>
        )
      },
      {
        path: '/payments',
        element: (
          <AuthLayout authentication>
            <Payment />
          </AuthLayout>
        )
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={route}/>
    </Provider>
  </React.StrictMode>,
)
