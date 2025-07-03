import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'
import Home from './pages/Home'
import About from './pages/About'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: 'about',
          element: <About/>
        },
        {
          path: 'sign-up',
          element: <SignUp/>
        },
        {
          path: 'sign-in',
          element: <SignIn/>
        },
        {
          path: 'Dashboard',
          element: <Dashboard/>
        },
        {
          path: 'projects',
          element: <Projects/>
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App

// this is app
//finally lqst paper
//wapis se code shueeu krengy yeahhhh
//kkmcxkma
//natal
//patal
//eedee
//aaaaaaaaaaaaaaaaaaaa
//asp.net seekkhrha ab ma
// oh yeah