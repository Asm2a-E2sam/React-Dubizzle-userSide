import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppLayout from './AppLayout';
import SingleProductPage from './Components/SingleProductPage/SingleProductPage';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/singlePage', element: <SingleProductPage /> },
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
