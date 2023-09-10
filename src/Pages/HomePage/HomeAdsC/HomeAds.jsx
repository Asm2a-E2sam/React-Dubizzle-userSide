import React from 'react';
import VillaForS from './VillaForS/VillaForS';
import VillaForR from './VillaForR/VillaForR';
import Vacation from './Vacation/Vacation';
import Cars from './Cars/Cars';
import Mobile from './Mobile/Mobile';
import Jobs from './Jobs/Jobs';
import Laptop from './Laptop/Laptop';
import Decoration from './Decoration/Decoration';

const HomeAds = () => {
    return (
        <div className='my-5'>
<VillaForS/>
<VillaForR/>
<Vacation/>
<Cars/>
<Mobile/>
<Jobs/>
<Laptop/>
<Decoration/>
        </div>
    );
}

export default HomeAds;
