import React from 'react';
import HomeSlider from './HomeSliderC/HomeSlider';
import PopularCategories from './PopularCategoriesC/PopularCategories';
import HomeAds from './HomeAdsC/HomeAds';
import AppD from '../../Components/Application/AppD';

const HomePage = () => {
    return (
        <>
        <div className='container'>
            <HomeSlider />
            <PopularCategories />
            <HomeAds/>
        </div>
            <AppD/>
        </>
    );
}

export default HomePage;
