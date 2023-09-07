import React from 'react';
import HomeSlider from './HomeSliderC/HomeSlider';
import PopularCategories from './PopularCategoriesC/PopularCategories';

const HomePage = () => {
    return (
        <div className='container'>
            <HomeSlider />
            <PopularCategories />
        </div>
    );
}

export default HomePage;
