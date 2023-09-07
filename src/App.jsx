import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppLayout from './AppLayout';
import HomePage from './Pages/HomePage/HomePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
    ]
  }
])
function App() {
  return (
    <div className='container'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
