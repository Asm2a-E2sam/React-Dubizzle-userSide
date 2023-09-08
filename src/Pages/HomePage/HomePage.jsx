import React from 'react';
import HomeSlider from './HomeSliderC/HomeSlider';
import PopularCategories from './PopularCategoriesC/PopularCategories';
import HomeAds from './HomeAdsC/HomeAds';

const HomePage = () => {
    return (
        <div className='container'>
            <HomeSlider />
            <PopularCategories />
            <HomeAds/>
        </div>
    );
}

export default HomePage;
