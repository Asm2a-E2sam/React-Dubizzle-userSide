// import React from 'react';
import HomeSlider from './HomeSliderC/HomeSlider';
import PopularCategories from './PopularCategoriesC/PopularCategories';
import HomeAds from './HomeAdsC/HomeAds';
import AppD from '../../Components/Application/AppD';
import { Helmet } from 'react-helmet-async';

const HomePage = () => {
    return (
        <>
         <Helmet>
        <title>Dubizzle</title>
      </Helmet>
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
