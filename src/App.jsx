import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppLayout from './AppLayout';
import HomePage from './Pages/HomePage/HomePage';
import SearchPage from './Pages/SearchPage/SearchPage';
import SingleProductPage from './Components/SingleProductPage/SingleProductPage';
// import NavBar from "./Components/Navbar/Navbar";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
   

      { index: true, element: <HomePage /> },
      {path:"/search", element: <SearchPage/>},
      { path: "/singlePage", element: <SingleProductPage /> },

    ]
  }
])
function App() {
  return (
      <RouterProvider router={router} />
  )

}

export default App;
