import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import Magic from '../pages/magic'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/item/:id',
    element: <Magic />,
  }
])