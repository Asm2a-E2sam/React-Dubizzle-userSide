
import SearchSlider from './SearchSlider/SearchSlider';
import SearchCards from './SearchCards/SearchCards';
import SearchSideBar from './SearchSideBar/SearchSideBar';
import './SearchPage.css'
import { Helmet } from 'react-helmet';
const SearchPage = () => {
    return (
        <>
             <Helmet>
        <title>search</title>
      </Helmet>
        <div className='container my-5'>
            <div className='row d-flex'>
            <div className='col-3'>
                <SearchSideBar />
            </div>
            <div className='col-9'>
                <SearchSlider />
                <SearchCards />
            </div>
            </div>
        </div>
        </>
    );
}

export default SearchPage;
