import React from 'react';
import { Link } from 'react-router-dom';
import { FiMapPin } from 'react-icons/fi';

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

      <div className="d-flex flex-column mt-4 me-3">
        <div href="#" className="fw-bold mb-4">LOCATIONS</div>
        <div className="mb-3">
          <div className="searchable-dropdown2">
            <div className="search-container2">
              <FiMapPin className="fa-solid fa-location-dot search-icon fs-4" />
              <input type="text" className="search-input2 form-control fs-4 ps-5" placeholder="Search location..."
                id="location-search2" />
              <span className="fw-bolder fs-5 arrow"><i className="fa-solid fa-angle-up"></i></span>
            </div>
            <ul className="options2">
              <li data-value="London" className="d-flex justify-content-between">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path className="px-5"
                    d="M12 2c3.196 0 6 2.618 6 5.602 0 3.093-2.493 7.132-6 12.661-3.507-5.529-6-9.568-6-12.661 0-2.984 2.804-5.602 6-5.602m0-2c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"
                    style={{fill: "red"}} />
                </svg>
                London
              </li>
              <li data-value="Boston" className="d-flex justify-content-between">
              <FiMapPin className="fa-solid fa-location-dot search-icon fs-4" />
                Boston
              </li>
              <li data-value="Mumbai" className="d-flex justify-content-between">
              <FiMapPin className="fa-solid fa-location-dot search-icon fs-4" />
                Mumbai
              </li>
              <li data-value="New York" className="d-flex justify-content-between">
              <FiMapPin className="fa-solid fa-location-dot search-icon fs-4" />
                New York
              </li>
              <li data-value="Toronto" className="d-flex justify-content-between">
              <FiMapPin className="fa-solid fa-location-dot search-icon fs-4" />
                Toronto
              </li>
              <li data-value="Paris" className="d-flex justify-content-between">
              <FiMapPin className="fa-solid fa-location-dot search-icon fs-4" />
                Paris
              </li>
            </ul>
          </div>
        </div>
        <a href="#" className="text-decoration-none text-dark fw-bold font_size2 ms-4 mb-3">Egypt</a>
        <a href="#" className="text-decoration-none font_size2 mb-3 ms-5">Cairo</a>
        <a href="#" className="text-decoration-none font_size2 mb-3 ms-5">Giza</a>
        <a href="#" className="text-decoration-none font_size2 mb-3 ms-5">Alexandria</a>
        <a href="#" className="text-decoration-none font_size2 mb-3 ms-5">Damietta</a>
        <a href="#" className="text-decoration-none font_size2 mb-3 ms-5">Dakahlia</a>
        <a href="#" className="text-decoration-none mb-3 ms-5">View more</a>
      </div>

      <div className="d-flex flex-column border-bottom">
    <div href="#" className="fw-bold">BRAND</div>
    <Link className="text-decoration-none font_size2 mb-3 ms-5"><img src="../../../../../public/images/SearchImg/chery.png" className="col-1 me-1" alt=""/>Chery</Link>
    <Link className="text-decoration-none font_size2 mb-3 ms-5"><img src="../../../../../public/images/SearchImg/chevrolet.png" className="col-1 me-1" alt=""/>Chevrolet</Link>
    <Link className="text-decoration-none font_size2 mb-3 ms-5"><img src="../../../../../public/images/SearchImg/hyundai.png" className="col-1 me-1" alt=""/>Hyundai</Link>
    <Link className="text-decoration-none font_size2 mb-3 ms-5"><img src="../../../../../public/images/SearchImg/kia.png" className="col-1 me-1" alt=""/>Kia</Link>
    <Link className="text-decoration-none font_size2 mb-3 ms-5"><img src="../../../../../public/images/SearchImg/mg.png" className="col-1 me-1" alt=""/>MG</Link>
<Link className="text-decoration-none ms-5 mb-3">View more</Link>
</div>

      <div className="d-flex flex-column border-bottom mt-3">
        <div href="#" className="fw-bold ms-4 mb-3">AD TYPE</div>
        <div className="mb-3 ms-5">
          <input type="checkbox" className="checkboxMargin form-check-input"/>
          <label htmlFor="">For Sale</label>
        </div>
        <div className="mb-3 ms-5">
          <input type="checkbox" className="checkboxMargin form-check-input"/>
          <label htmlFor="">Wanted Item</label>
        </div>
      </div>
      <div className="d-flex flex-column border-bottom my-3">
        <div href="#" className="fw-bold ms-4 mb-3">FUEL TYPE</div>
        <div className="mb-3 ms-5">
          <input type="checkbox" className="checkboxMargin form-check-input"/>
          <label htmlFor="">Benzine</label>
        </div>
        <div className="mb-3 ms-5">
          <input type="checkbox" className="checkboxMargin form-check-input"/>
          <label htmlFor="">Diesel</label>
        </div>
        <div className="mb-3 ms-5">
          <input type="checkbox" className="checkboxMargin form-check-input"/>
          <label htmlFor="">Electric</label>
        </div>
        <div className="mb-3 ms-5">
          <input type="checkbox" className="checkboxMargin form-check-input"/>
          <label htmlFor="">Hybrid</label>
        </div>
        <div className="mb-3 ms-5">
          <input type="checkbox" className="checkboxMargin form-check-input"/>
          <label htmlFor="">Natural Gas</label>
        </div>
      </div>
      <div className="d-flex flex-column border-bottom">
        <div href="#" className="fw-bold ms-4 mb-3">PRICE</div>
        <div className="row mb-3 ms-5">
          <input type="text" value="6,000" className="col-5 bg-secondary bg-opacity-25 fs-5 border-bottom my-2 border-0"/>
          <div className="col-1"></div>
          <input type="text" value="8,000" className="col-5 bg-secondary bg-opacity-25 fs-5 border-bottom my-2 border-0"/>
        </div>
      </div>
      <div className="d-flex flex-column border-bottom">
        <div href="#" className="fw-bold ms-4 mb-3 mt-3">PAYMENT OPTIONS</div>
        <div className="mb-3 ms-5">
          <input type="checkbox" className="checkboxMargin form-check-input"/>
          <label htmlFor="">Cash</label>
        </div>
        <div className="mb-3 ms-5">
          <input type="checkbox" className="checkboxMargin form-check-input"/>
          <label htmlFor="">Installments</label>
        </div>
        <div className="mb-3 ms-5">
          <input type="checkbox" className="checkboxMargin form-check-input"/>
          <label htmlFor="">Exchange</label>
        </div>
      </div>
      <div className="d-flex flex-column border-bottom">
        <div href="#" className="fw-bold ms-4 mb-3 mt-3">YEAR</div>
        <div className="row mb-3 ms-5">
          <input type="text" value="1900" className="col-3 bg-secondary bg-opacity-25 fs-5 border-bottom my-2 border-0"/>
          <div className="col-1"></div>
          <input type="text" value="2023" className="col-3 bg-secondary bg-opacity-25 fs-5 border-bottom my-2 border-0"/>
        </div>
      </div>
      <div className="d-flex flex-column border-bottom">
        <div href="#" className="fw-bold ms-4 mb-3 mt-3">KILOMETERS</div>

        <div className="mb-3 ms-5">
          <input type="checkbox" className="checkboxMargin form-check-input"/>
          <label htmlFor="">0 to 9999</label>
        </div>

        {/* <div class="mb-3 ms-5">
          <input type="checkbox" class="form-check-input"/>
          <label for="">0 to 9999</label>
        </div> */}

        <div className="mb-3 ms-5">
          <input type="checkbox" className="checkboxMargin form-check-input"/>
          <label htmlFor=""> 100000 to 119999</label>
        </div>
        <div className="mb-3 ms-5">
          <input type="checkbox" className="checkboxMargin form-check-input"/>
          <label htmlFor="">10000 to 19999</label>
        </div>
        <div className="mb-3 ms-5">
          <input type="checkbox" className="checkboxMargin form-check-input"/>
          <label htmlFor="">More than 200000</label>
        </div>
        <div className="mb-3 ms-5">
          <input type="checkbox" className="checkboxMargin form-check-input"/>
          <label htmlFor="">120000 to 139999</label>
        </div>
        <a href="#" className="text-decoration-none mb-3 ms-5">View more</a>
      </div>
      <div className="d-flex flex-column border-bottom mt-3">
        <div href="#" className="fw-bold ms-4 mb-3">TRANSMISSION TYPE</div>
        <div className="ms-4 mb-3">
          <input type="checkbox" className="checkboxMargin form-check-input"/>
          <label htmlFor="">Automatic</label>
        </div>
        <div className="ms-4 mb-3">
          <input type="checkbox" className="checkboxMargin form-check-input"/>
          <label htmlFor="">Manual</label>
        </div>
      </div>
      <div className="d-flex flex-column border-bottom my-3">
        <div href="#" className="fw-bold ms-4 mb-3">CONDITION</div>
        <div>
          <input type="checkbox" className="checkboxMargin form-check-input ms-4 mb-3"/>
          <label htmlFor="">Used</label>
        </div>
        <div>
          <input type="checkbox" className="checkboxMargin form-check-input ms-4 mb-3"/>
          <label htmlFor="">New</label>
        </div>
      </div>
      <div className="d-flex flex-column border-bottom">
        <div href="#" className="fw-bold ms-4 mb-3">COLOR</div>
        <div className="ms-4 mb-3">
          <input type="checkbox" className="checkboxMargin form-check-input"/>
          <label htmlFor="">Black</label>
        </div>
        <div className="ms-4 mb-3">
          <input type="checkbox" className="checkboxMargin form-check-input"/>
          <label htmlFor="">White</label>
        </div>
        <div className="ms-4 mb-3">
          <input type="checkbox" className="checkboxMargin form-check-input"/>
          <label htmlFor="">Gray</label>
        </div>
        <div className="ms-4 mb-3">
          <input type="checkbox" className="checkboxMargin form-check-input"/>
          <label htmlFor="">Blue- Navy Blue</label>
        </div>
        <div className="ms-4 mb-3">
          <input type="checkbox" className="checkboxMargin form-check-input"/>
          <label htmlFor="">Silver</label>
        </div>

        <a href="#" className="text-decoration-none ms-4 mb-3">View more</a>
      </div>
      <div className="d-flex flex-column border-bottom mt-3">
        <div href="#" className="fw-bold ms-4 mb-3">BODY TYPE</div>
        <div className="ms-4 mb-3">
          <input type="checkbox" className="checkboxMargin form-check-input"/>
          <label htmlFor="">Sedan</label>
        </div>
        <div className="ms-4 mb-3">
          <input type="checkbox" className="checkboxMargin form-check-input"/>
          <label htmlFor="">SUV</label>
        </div>
        <div className="ms-4 mb-3">
          <input type="checkbox" className="checkboxMargin form-check-input"/>
          <label htmlFor="">Hatchback</label>
        </div>
        <div className="ms-4 mb-3">
          <input type="checkbox" className="checkboxMargin form-check-input"/>
          <label htmlFor="">4X4</label>
        </div>
        <div className="ms-4 mb-3">
          <input type="checkbox" className="checkboxMargin form-check-input"/>
          <label htmlFor="">Coupe</label>
        </div>
        <a href="#" className="text-decoration-none ms-4 mb-3">View more</a>
      </div>
      <div className="d-flex flex-column border-bottom mt-3">
        <div href="#" className="fw-bold ms-4 mb-3">ENGINE CAPACITY (CC)</div>
        <div className="ms-4 mb-3">
          <input type="checkbox" className="checkboxMargin form-check-input"/>
          <label htmlFor="">1600</label>
        </div>
        <div className="ms-4 mb-3">
          <input type="checkbox" className="checkboxMargin form-check-input"/>
          <label htmlFor="">1400 - 1500</label>
        </div>
        <div className="ms-4 mb-3">
          <input type="checkbox" className="checkboxMargin form-check-input"/>
          <label htmlFor="">1800 - 2000</label>
        </div>
        <div className="ms-4 mb-3">
          <input type="checkbox" className="checkboxMargin form-check-input"/>
          <label htmlFor="">1000 - 1300</label>
          <div className="mt-3">
            <input type="checkbox" className="checkboxMargin form-check-input"/>
            <label htmlFor="">More than 3000</label>
          </div>
        </div>
        <a href="#" className="text-decoration-none ms-4 mb-3">View more</a>
      </div>
      <div className="d-flex flex-column border-bottom mt-3">
        <div href="#" className="fw-bold ms-4 mb-3">EXTRA FEATURES</div>
        <div className="ms-4 mb-3">
          <input type="checkbox" className="checkboxMargin form-check-input"/>
          <label htmlFor="">Air Conditioning</label>
        </div>
        <div className="ms-4 mb-3">
          <input type="checkbox" className="checkboxMargin form-check-input"/>
          <label htmlFor="">AM/FM Radio</label>
        </div>
        <div className="ms-4 mb-3">
          <input type="checkbox" className="checkboxMargin form-check-input"/>
          <label htmlFor="">Power Windows</label>
        </div>
        <div className="ms-4 mb-3">
          <input type="checkbox" className="checkboxMargin form-check-input"/>
          <label htmlFor="">Power Locks</label>
        </div>
        <div className="ms-4 mb-3">
          <input type="checkbox" className="checkboxMargin form-check-input"/>
          <label htmlFor="">Bluetooth System</label>
        </div>
        <a href="#" className="text-decoration-none ms-4 mb-3">View more</a>
      </div>
      <div className="border-bottom mt-3">
        <div href="#" className="fw-bold ms-4 mb-3">VIDEO</div>
        <div className="ms-4 mb-3">
          <input type="checkbox" className="checkboxMargin form-check-input"/>
          <label htmlFor="">Not Available</label>
        </div>
      </div>
      <div className="border-bottom mt-3">
        <div href="#" className="fw-bold ms-4 mb-3">VIRTUAL TOUR</div>
        <div className="ms-4 mb-3">
          <input type="checkbox" className="checkboxMargin form-check-input"/>
          <label htmlFor="">Not Available</label>
        </div>
      </div>
    </div>
        </>

    );
}

export default SearchSideBar;
