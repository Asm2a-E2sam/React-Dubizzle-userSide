import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppLayout from './AppLayout';
import HomePage from './Pages/HomePage/HomePage';
import SearchPage from './Pages/SearchPage/SearchPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {path:"/search", element: <SearchPage/>}
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
