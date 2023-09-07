import React from 'react';
import './PopularCategories.css'
import { FaAngleRight } from 'react-icons/fa';
const PopularCategories = () => {
  return (
    <div>
      <section>
        <div className="row">
          <div className="col-12 fs-4 fw-bold my-3">Popular Categories</div>
          <div className="col-6 col-md-6 col-lg-3 d-flex flex-column">
            <div className="fw-bold fs-6 mb-2">
              <img src="../../../../public/images/vehicles.svg" alt="" className='me-1' width={16} /> Vehicles
            </div>
            <a href className="mb-2 text-decoration-none text-black ancor">Cars for
              Sale</a>
            <a href className="mb-2 text-decoration-none text-black ancor">Cars for
              Rent</a>
            <a
              href
              className="d-flex fw-bold fs-6 olx-color mb-3 angle_a text-decoration-none"><div>All in Vehicles</div>
              <div className="angle_div ms-1"><FaAngleRight /></div></a>
          </div>
          <div className="col-6 col-md-6 col-lg-3 d-flex flex-column">
            <div className="fw-bold fs-6 mb-2">
              <img src="../../../../public/images/property.svg" alt="" className='me-1' width={16} /> Properties
            </div>
            <a
              href
              className="mb-2 text-decoration-none text-black ancor">Apartments & Duplex for Sale</a>
            <a
              href
              className="mb-2 text-decoration-none text-black ancor">Apartments & Duplex for Rent</a>
            <a
              href
              className="d-flex fw-bold fs-6 olx-color mb-3 angle_a text-decoration-none">
              <div>All in Properties</div>
              <div className="angle_div ms-1"><FaAngleRight /></div>
            </a>
          </div>
          <div className="col-6 col-md-6 col-lg-3 d-flex flex-column">
            <div className="fw-bold fs-6 mb-2">
              <img src="../../../../public/images/mobiles.svg" alt="" className='me-1' width={16} /> Mobiles &
              Tablets
            </div>
            <a
              href
              className="mb-2 text-decoration-none text-black ancor">Mobile Phones</a>
            <a
              href
              className="mb-2 text-decoration-none text-black ancor">Tablets</a>
            <a
              href
              className="d-flex fw-bold fs-6 olx-color mb-3 angle_a text-decoration-none">
              <div>All in Mobiles & Tablets</div>
              <div className="angle_div ms-1"><FaAngleRight /></div>
            </a>
          </div>
          <div className="col-6 col-md-6 col-lg-3 d-flex flex-column">
            <div className="fw-bold fs-6 mb-2">
              <img src="../../../../public/images/jobs.svg" alt="" className='me-1' width={16} /> Jobs
            </div>
            <a
              href
              className="mb-2 text-decoration-none text-black ancor">Accounting, Finance & Banking</a>
            <a
              href
              className="mb-2 text-decoration-none text-black ancor">Engineering</a>
            <a
              href
              className="d-flex fw-bold fs-6 olx-color mb-3 angle_a text-decoration-none">
              <div>All in Jobs</div>
              <div className="angle_div ms-1"><FaAngleRight /></div>
            </a>
          </div>
          <div className="col-6 col-md-6 col-lg-3 d-flex flex-column">
            <div className="fw-bold fs-6 mb-2">
              <img src="../../../../public/images/electronics.svg" alt="" className='me-1' width={16} /> Electronics &
              Appliances
            </div>
            <a
              href
              className="mb-2 text-decoration-none text-black ancor">TV - Audio - Video</a>
            <a
              href
              className="mb-2 text-decoration-none text-black ancor">Computers - Accessories</a>
            <a
              href
              className="d-flex fw-bold fs-6 olx-color mb-3 angle_a text-decoration-none">
              <div>All in Electronics & Appliances</div>
              <div className="angle_div ms-1"><FaAngleRight /></div>
            </a>
          </div>
          <div className="col-6 col-md-6 col-lg-3 d-flex flex-column">
            <div className="fw-bold fs-6 mb-2">
              <img src="../../../../public/images/furniture.svg" alt="" className='me-1' width={16} /> Furniture & Decor
            </div>
            <a
              href
              className="mb-2 text-decoration-none text-black ancor">Bathroom</a>
            <a
              href
              className="mb-2 text-decoration-none text-black ancor">Bedroom</a>
            <a
              href
              className="d-flex fw-bold fs-6 olx-color mb-3 angle_a text-decoration-none">
              <div>All in Furniture & Decor</div>
              <div className="angle_div ms-1"><FaAngleRight /></div>
            </a>
          </div>
          <div className="col-6 col-md-6 col-lg-3 d-flex flex-column">
            <div className="fw-bold fs-6 mb-2">
              <img src="../../../../public/images/fashion.svg" alt="" className='me-1' width={16} /> Fashion & Beauty
            </div>
            <a
              href
              className="mb-2 text-decoration-none text-black ancor">Women’s Clothing</a>
            <a
              href
              className="mb-2 text-decoration-none text-black ancor">Men’s Clothing</a>
            <a
              href
              className="d-flex fw-bold fs-6 olx-color mb-3 angle_a text-decoration-none">
              <div>All in Fashion & Beauty</div>
              <div className="angle_div ms-1"><FaAngleRight /></div>
            </a>
          </div>
          <div className="col-6 col-md-6 col-lg-3 d-flex flex-column">
            <div className="fw-bold fs-6 mb-2">
              <img src="../../../../public/images/animals.svg" alt="" className='me-1' width={16} /> Pets
            </div>
            <a
              href
              className="mb-2 text-decoration-none text-black ancor">Birds - Pigeons</a>
            <a
              href
              className="mb-2 text-decoration-none text-black ancor">Cats</a>
            <a
              href
              className="d-flex fw-bold fs-6 olx-color mb-3 angle_a text-decoration-none">
              <div>All in Pets</div>
              <div className="angle_div ms-1"><FaAngleRight /></div>
            </a>
          </div>
          <div className="col-6 col-md-6 col-lg-3 d-flex flex-column">
            <div className="fw-bold fs-6 mb-2">
              <img src="../../../../public/images/kids.svg" alt="" className='me-1' width={16} /> Kids &
              Babies
            </div>
            <a
              href
              className="mb-2 text-decoration-none text-black ancor">Baby & Mom Healthcare</a>
            <a
              href
              className="mb-2 text-decoration-none text-black ancor">Baby Clothing</a>
            <a
              href
              className="d-flex fw-bold fs-6 olx-color mb-3 angle_a text-decoration-none">
              <div>All in Kids & Babies</div>
              <div className="angle_div ms-1"><FaAngleRight /></div>
            </a>
          </div>
          <div className="col-6 col-md-6 col-lg-3 d-flex flex-column">
            <div className="fw-bold fs-6 mb-2">
              <img src="../../../../public/images/bikes.svg" alt="" className='me-1' width={16} /> Hobbies
            </div>
            <a
              href
              className="mb-2 text-decoration-none text-black ancor">Antiques - Collectibles</a>
            <a
              href
              className="mb-2 text-decoration-none text-black ancor">Bicycles</a>
            <a
              href
              className="d-flex fw-bold fs-6 olx-color mb-3 angle_a text-decoration-none">
              <div>All in Hobbies</div>
              <div className="angle_div ms-1"><FaAngleRight /></div>
            </a>
          </div>
          <div className="col-6 col-md-6 col-lg-3 d-flex flex-column">
            <div className="fw-bold fs-6 mb-2">
              <img src="../../../../public/images/business.svg" alt="" className='me-1' width={16} /> Businesses &
              Industrial
            </div>
            <a
              href
              className="mb-2 text-decoration-none text-black ancor">Agriculture</a>
            <a
              href
              className="mb-2 text-decoration-none text-black ancor">Construction</a>
            <a
              href
              className="d-flex fw-bold fs-6 olx-color mb-3 angle_a text-decoration-none">
              <div>All in Businesses & Industrial</div>
              <div className="angle_div ms-1"><FaAngleRight /></div>
            </a>
          </div>
          <div className="col-6 col-md-6 col-lg-3 d-flex flex-column">
            <div className="fw-bold fs-6 mb-2">
              <img src="../../../../public/images/services.svg" alt="" className='me-1' width={16} /> Services
            </div>
            <a
              href
              className="mb-2 text-decoration-none text-black ancor">Business</a>
            <a
              href
              className="mb-2 text-decoration-none text-black ancor">Car</a>
            <a
              href
              className="d-flex fw-bold fs-6 olx-color mb-3 angle_a text-decoration-none">
              <div>All in Services</div>
              <div className="angle_div ms-1"><FaAngleRight /></div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PopularCategories;
