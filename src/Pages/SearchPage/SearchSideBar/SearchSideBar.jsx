import React from 'react';
import { Link } from 'react-router-dom';

const SearchSideBar = () => {
    return (
        <>
             <div className="line">
            <div className="col-4 d-flex flex-column border-bottom">
                <Link className="text-decoration-none text-dark fw-bold ">Cars for Sale</Link>
                <Link className="text-decoration-none text-dark fw-bold font_size">Filters</Link>
            </div>
            <div className="d-flex flex-column border-bottom">
                <div href="#" className="fw-bold">CATEGORIES</div>
               <Link className="text-decoration-none text-black fs-6">All categories</Link>
               <Link className="text-decoration-none font_size">Vehicles</Link>
               <Link className="text-decoration-none fw-bold font_size">Cars for Sale</Link>
               <Link className="text-decoration-none font_size">Cars for Rent</Link>
               <Link className="text-decoration-none font_size">Tyres, Batteries, Oils, & Accessories</Link>
               <Link className="text-decoration-none font_size">Car Spare Parts</Link>
               <Link className="text-decoration-none font_size">Motorcycles & Accessories</Link>
               <Link className="text-decoration-none font_size">Boats - Watercraft</Link>
               <Link className="text-decoration-none font_size">Heavy Trucks, Buses & Other Vehicles</Link>
            </div>
<div className="d-flex flex-column">
    <div href="#" className="fw-bold">LOCATIONS</div>
    <Link className="text-decoration-none fw-bold font_size">Egypt</Link>
    <Link className="text-decoration-none font_size">Cairo</Link>
    <Link className="text-decoration-none font_size">Giza</Link>
    <Link className="text-decoration-none font_size">Alexandria</Link>
    <Link className="text-decoration-none font_size">Damietta</Link>
    <Link className="text-decoration-none font_size">Dakahlia</Link>
<Link className="text-decoration-none ms-5">View more</Link>
</div>
<div className="d-flex flex-column border-bottom">
    <div href="#" className="fw-bold">BRAND</div>
    <Link className="text-decoration-none font_size"><img src="../../../../../public/images/SearchImg/chery.png" className="col-1 me-1" alt=""/>Chery</Link>
    <Link className="text-decoration-none font_size"><img src="../../../../../public/images/SearchImg/chevrolet.png" className="col-1 me-1" alt=""/>Chevrolet</Link>
    <Link className="text-decoration-none font_size"><img src="../../../../../public/images/SearchImg/hyundai.png" className="col-1 me-1" alt=""/>Hyundai</Link>
    <Link className="text-decoration-none font_size"><img src="../../../../../public/images/SearchImg/kia.png" className="col-1 me-1" alt=""/>Kia</Link>
    <Link className="text-decoration-none font_size"><img src="../../../../../public/images/SearchImg/mg.png" className="col-1 me-1" alt=""/>MG</Link>
<Link className="text-decoration-none ms-5">View more</Link>
</div>
<div className="d-flex flex-column border-bottom">
    <div href="#" className="fw-bold">AD TYPE</div>
<div>
    <input type="checkbox" className="form-check-input"/>
    <label for="">For Sale</label>
</div>
<div>
    <input type="checkbox" className="form-check-input"/>
    <label for="">Wanted Item</label>
</div>
</div>
<div className="d-flex flex-column border-bottom">
    <div href="#" className="fw-bold">FUEL TYPE</div>
<div>
    <input type="checkbox" className="form-check-input"/>
    <label for="">Benzine</label>
</div>
<div>
    <input type="checkbox" className="form-check-input"/>
    <label for="">Diesel</label>
</div>
<div>
    <input type="checkbox" className="form-check-input"/>
    <label for="">Electric</label>
</div>
<div>
    <input type="checkbox" className="form-check-input"/>
    <label for="">Hybrid</label>
</div>
<div>
    <input type="checkbox" className="form-check-input"/>
    <label for="">Natural Gas</label>
</div>
</div>
<div className="d-flex flex-column border-bottom">
    <div href="#" className="fw-bold">PRICE</div>
    <div className="row">
        <input type="text" value="6,000" className="col-4 bg-secondary bg-opacity-25 fs-5 border-bottom my-2 border-0"/>
        <div className="col-1"></div>
        <input type="text" value="6,000,00" className="col-4 bg-secondary bg-opacity-25 fs-5 border-bottom my-2 border-0"/>
    </div>
</div>
<div className="d-flex flex-column border-bottom">
    <div href="#" className="fw-bold">PAYMENT OPTIONS</div>
<div>
    <input type="checkbox" className="form-check-input"/>
    <label for="">Cash</label>
</div>
<div>
    <input type="checkbox" className="form-check-input"/>
    <label for="">Installments</label>
</div>
<div>
    <input type="checkbox" className="form-check-input"/>
    <label for="">Exchange</label>
</div>
</div>
<div className="d-flex flex-column border-bottom">
    <div href="#" className="fw-bold">YEAR</div>
    <div className="row">
        <input type="text" value="1900" className="col-3 bg-secondary bg-opacity-25 fs-5 border-bottom my-2 border-0"/>
        <div className="col-1"></div>
        <input type="text" value="2023" className="col-3 bg-secondary bg-opacity-25 fs-5 border-bottom my-2 border-0"/>
    </div>
</div>
<div className="d-flex flex-column border-bottom">
    <div href="#" className="fw-bold">KILOMETERS</div>
    <div>
        <input type="checkbox" className="form-check-input"/>
        <label for="">0 to 9999</label>
    </div>
    <div>
        <input type="checkbox" className="form-check-input"/>
        <label for=""> 100000 to 119999</label>
    </div>
    <div>
        <input type="checkbox" className="form-check-input"/>
        <label for="">10000 to 19999</label>
    </div>
    <div>
        <input type="checkbox" className="form-check-input"/>
        <label for="">More than 200000</label>
    </div>
    <div>
        <input type="checkbox" className="form-check-input"/>
        <label for="">120000 to 139999</label>
    </div>
<Link className="text-decoration-none ms-5">View more</Link>
</div>
<div className="d-flex flex-column border-bottom">
    <div href="#" className="fw-bold">TRANSMISSION TYPE</div>
<div>
    <input type="checkbox" className="form-check-input"/>
    <label for="">Automatic</label>
</div>
<div>
    <input type="checkbox" className="form-check-input"/>
    <label for="">Manual</label>
</div>
</div>
<div className="d-flex flex-column border-bottom">
    <div href="#" className="fw-bold">CONDITION</div>
<div>
    <input type="checkbox" className="form-check-input"/>
    <label for="">Used</label>
</div>
<div>
    <input type="checkbox" className="form-check-input"/>
    <label for="">New</label>
</div>
</div>
<div className="d-flex flex-column border-bottom">
    <div href="#" className="fw-bold">COLOR</div>
    <div>
        <input type="checkbox" className="form-check-input"/>
        <label for="">Black</label>
    </div>
    <div>
        <input type="checkbox" className="form-check-input"/>
        <label for="">White</label>
    </div>
    <div>
        <input type="checkbox" className="form-check-input"/>
        <label for="">Gray</label>
    </div>
    <div>
        <input type="checkbox" className="form-check-input"/>
        <label for="">Blue- Navy Blue</label>
    </div>
    <div>
        <input type="checkbox" className="form-check-input"/>
        <label for="">Silver</label>
    </div>
    
<Link className="text-decoration-none ms-5">View more</Link>
</div>
<div className="d-flex flex-column border-bottom">
    <div href="#" className="fw-bold">BODY TYPE</div>
<div>
    <input type="checkbox" className="form-check-input"/>
    <label for="">Sedan</label>
</div>
<div>
    <input type="checkbox" className="form-check-input"/>
    <label for="">SUV</label>
</div>
<div>
    <input type="checkbox" className="form-check-input"/>
    <label for="">Hatchback</label>
</div>
<div>
    <input type="checkbox" className="form-check-input"/>
    <label for="">4X4</label>
</div>
<div>
    <input type="checkbox" className="form-check-input"/>
    <label for="">Coupe</label>
</div>
<Link className="text-decoration-none ms-5">View more</Link>
</div>
<div className="d-flex flex-column border-bottom">
    <div href="#" className="fw-bold">ENGINE CAPACITY (CC)</div>
    <div>
    <input type="checkbox" className="form-check-input"/>
    <label for="">1600</label>
</div>
<div>
    <input type="checkbox" className="form-check-input"/>
    <label for="">1400 - 1500</label>
</div>
<div>
    <input type="checkbox" className="form-check-input"/>
    <label for="">1800 - 2000</label>
</div>
<div>
    <input type="checkbox" className="form-check-input"/>
    <label for="">1000 - 1300</label>
    <div>
        <input type="checkbox" className="form-check-input"/>
        <label for="">More than 3000</label>
    </div>
</div>
<Link className="text-decoration-none ms-5">View more</Link>
</div>
<div className="d-flex flex-column border-bottom">
    <div href="#" className="fw-bold">EXTRA FEATURES</div>
<div>
    <input type="checkbox" className="form-check-input"/>
    <label for="">Air Conditioning</label>
</div>
<div>
    <input type="checkbox" className="form-check-input"/>
    <label for="">AM/FM Radio</label>
</div>
<div>
    <input type="checkbox" className="form-check-input"/>
    <label for="">Power Windows</label>
</div>
<div>
    <input type="checkbox" className="form-check-input"/>
    <label for="">Power Locks</label>
</div>
<div>
    <input type="checkbox" className="form-check-input"/>
    <label for="">Bluetooth System</label>
</div>
<Link className="text-decoration-none ms-5">View more</Link>
</div>
<div className="border-bottom">
    <div href="#" className="fw-bold">VIDEO</div>
    <input type="checkbox" className="form-check-input"/>
    <label for="">Not Available</label>
</div>
<div className="border-bottom">
    <div href="#" className="fw-bold">VIRTUAL TOUR</div>
    <input type="checkbox" className="form-check-input"/>
    <label for="">Not Available</label>
</div>
        </div>
        </>
    );
}

export default SearchSideBar;
