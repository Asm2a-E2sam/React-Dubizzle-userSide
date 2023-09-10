import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HelmetProvider, Helmet } from "react-helmet-async";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppLayout from './AppLayout';
import HomePage from './Pages/HomePage/HomePage';
import SearchPage from './Pages/SearchPage/SearchPage';
import SingleProductPage from './Pages/SingleProductPage/SingleProductPage';
import Attributes from './Pages/Attributes/Attributes';
import Post from './Pages/Post/Post';
import SellLayout from './SellLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {path:"/search", element: <SearchPage/>},
      { path: "/singlePage", element: <SingleProductPage /> },
    ]
  },
  {
    // path: "/",
    element: <SellLayout />,
    children: [
      {path:"/attributes",element: <Attributes/>},
      {path:"/post",element: <Post/>},
    ]
  }
])
function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
      <Helmet>
        <title>Dubizzle</title>
      </Helmet>
    </HelmetProvider>
  )

}

export default App;
