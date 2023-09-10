import { Outlet } from 'react-router-dom';
import NavBar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

const AppLayout = () => {
    return (
        <div>
            <NavBar/>
            <Outlet />
            <Footer/>
        </div>
    );
}

export default AppLayout;
