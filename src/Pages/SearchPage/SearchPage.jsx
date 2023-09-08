import React from 'react';
import SearchSlider from './SearchSlider/SearchSlider';
import SearchCards from './SearchCards/SearchCards';
import SearchSideBar from './SearchSideBar/SearchSideBar';
import './SearchPage.css'
const SearchPage = () => {
    return (
        <div className='row container'>
            <div className='col-3'>
                <SearchSideBar />
            </div>
            <div className='col-7'>
                <SearchSlider />
                <SearchCards />
            </div>
        </div>
    );
}

export default SearchPage;
