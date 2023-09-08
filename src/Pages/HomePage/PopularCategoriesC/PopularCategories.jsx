import React from 'react';
import './PopularCategories.css'
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
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
            <Link className="mb-2 text-decoration-none text-black ancor">Cars for
              Sale</Link>
            <Link className="mb-2 text-decoration-none text-black ancor">Cars for
              Rent</Link>
            <Link
              className="d-flex fw-bold fs-6 olx-color mb-3 angle_a text-decoration-none"><div>All in Vehicles</div>
              <div className="angle_div ms-1"><FaAngleRight /></div></Link>
          </div>
          <div className="col-6 col-md-6 col-lg-3 d-flex flex-column">
            <div className="fw-bold fs-6 mb-2">
              <img src="../../../../public/images/property.svg" alt="" className='me-1' width={16} /> Properties
            </div>
            <Link
              className="mb-2 text-decoration-none text-black ancor">Apartments & Duplex for Sale</Link>
            <Link
              className="mb-2 text-decoration-none text-black ancor">Apartments & Duplex for Rent</Link>
            <Link
              className="d-flex fw-bold fs-6 olx-color mb-3 angle_a text-decoration-none">
              <div>All in Properties</div>
              <div className="angle_div ms-1"><FaAngleRight /></div>
            </Link>
          </div>
          <div className="col-6 col-md-6 col-lg-3 d-flex flex-column">
            <div className="fw-bold fs-6 mb-2">
              <img src="../../../../public/images/mobiles.svg" alt="" className='me-1' width={16} /> Mobiles &
              Tablets
            </div>
            <Link
              className="mb-2 text-decoration-none text-black ancor">Mobile Phones</Link>
            <Link
              className="mb-2 text-decoration-none text-black ancor">Tablets</Link>
            <Link
              className="d-flex fw-bold fs-6 olx-color mb-3 angle_a text-decoration-none">
              <div>All in Mobiles & Tablets</div>
              <div className="angle_div ms-1"><FaAngleRight /></div>
            </Link>
          </div>
          <div className="col-6 col-md-6 col-lg-3 d-flex flex-column">
            <div className="fw-bold fs-6 mb-2">
              <img src="../../../../public/images/jobs.svg" alt="" className='me-1' width={16} /> Jobs
            </div>
            <Link
              className="mb-2 text-decoration-none text-black ancor">Accounting, Finance & Banking</Link>
            <Link
              className="mb-2 text-decoration-none text-black ancor">Engineering</Link>
            <Link
              className="d-flex fw-bold fs-6 olx-color mb-3 angle_a text-decoration-none">
              <div>All in Jobs</div>
              <div className="angle_div ms-1"><FaAngleRight /></div>
            </Link>
          </div>
          <div className="col-6 col-md-6 col-lg-3 d-flex flex-column">
            <div className="fw-bold fs-6 mb-2">
              <img src="../../../../public/images/electronics.svg" alt="" className='me-1' width={16} /> Electronics &
              Appliances
            </div>
            <Link
              className="mb-2 text-decoration-none text-black ancor">TV - Audio - Video</Link>
            <Link
              className="mb-2 text-decoration-none text-black ancor">Computers - Accessories</Link>
            <Link
              className="d-flex fw-bold fs-6 olx-color mb-3 angle_a text-decoration-none">
              <div>All in Electronics & Appliances</div>
              <div className="angle_div ms-1"><FaAngleRight /></div>
            </Link>
          </div>
          <div className="col-6 col-md-6 col-lg-3 d-flex flex-column">
            <div className="fw-bold fs-6 mb-2">
              <img src="../../../../public/images/furniture.svg" alt="" className='me-1' width={16} /> Furniture & Decor
            </div>
            <Link
              className="mb-2 text-decoration-none text-black ancor">Bathroom</Link>
            <Link
              className="mb-2 text-decoration-none text-black ancor">Bedroom</Link>
            <Link
              className="d-flex fw-bold fs-6 olx-color mb-3 angle_a text-decoration-none">
              <div>All in Furniture & Decor</div>
              <div className="angle_div ms-1"><FaAngleRight /></div>
            </Link>
          </div>
          <div className="col-6 col-md-6 col-lg-3 d-flex flex-column">
            <div className="fw-bold fs-6 mb-2">
              <img src="../../../../public/images/fashion.svg" alt="" className='me-1' width={16} /> Fashion & Beauty
            </div>
            <Link
              className="mb-2 text-decoration-none text-black ancor">Women’s Clothing</Link>
            <Link
              className="mb-2 text-decoration-none text-black ancor">Men’s Clothing</Link>
            <Link
              className="d-flex fw-bold fs-6 olx-color mb-3 angle_a text-decoration-none">
              <div>All in Fashion & Beauty</div>
              <div className="angle_div ms-1"><FaAngleRight /></div>
            </Link>
          </div>
          <div className="col-6 col-md-6 col-lg-3 d-flex flex-column">
            <div className="fw-bold fs-6 mb-2">
              <img src="../../../../public/images/Linknimals.svg" alt="" className='me-1' width={16} /> Pets
            </div>
            <Link className="mb-2 text-decoration-none text-black ancor">Birds - Pigeons</Link>
            <Link
              className="mb-2 text-decoration-none text-black ancor">Cats</Link>
            <Link
              className="d-flex fw-bold fs-6 olx-color mb-3 angle_a text-decoration-none">
              <div>All in Pets</div>
              <div className="angle_div ms-1"><FaAngleRight /></div>
            </Link>
          </div>
          <div className="col-6 col-md-6 col-lg-3 d-flex flex-column">
            <div className="fw-bold fs-6 mb-2">
              <img src="../../../../public/images/kids.svg" alt="" className='me-1' width={16} /> Kids &
              Babies
            </div>
            <Link
              className="mb-2 text-decoration-none text-black ancor">Baby & Mom Healthcare</Link>
            <Link
              className="mb-2 text-decoration-none text-black ancor">Baby Clothing</Link>
            <Link
              className="d-flex fw-bold fs-6 olx-color mb-3 angle_a text-decoration-none">
              <div>All in Kids & Babies</div>
              <div className="angle_div ms-1"><FaAngleRight /></div>
            </Link>
          </div>
          <div className="col-6 col-md-6 col-lg-3 d-flex flex-column">
            <div className="fw-bold fs-6 mb-2">
              <img src="../../../../public/images/bikes.svg" alt="" className='me-1' width={16} /> Hobbies
            </div>
            <Link
              className="mb-2 text-decoration-none text-black ancor">Antiques - Collectibles</Link>
            <Link
              className="mb-2 text-decoration-none text-black ancor">Bicycles</Link>
            <Link
              className="d-flex fw-bold fs-6 olx-color mb-3 angle_a text-decoration-none">
              <div>All in Hobbies</div>
              <div className="angle_div ms-1"><FaAngleRight /></div>
            </Link>
          </div>
          <div className="col-6 col-md-6 col-lg-3 d-flex flex-column">
            <div className="fw-bold fs-6 mb-2">
              <img src="../../../../public/images/business.svg" alt="" className='me-1' width={16} /> Businesses &
              Industrial
            </div>
            <Link
              className="mb-2 text-decoration-none text-black ancor">Agriculture</Link>
            <Link
              className="mb-2 text-decoration-none text-black ancor">Construction</Link>
            <Link
              className="d-flex fw-bold fs-6 olx-color mb-3 angle_a text-decoration-none">
              <div>All in Businesses & Industrial</div>
              <div className="angle_div ms-1"><FaAngleRight /></div>
            </Link>
          </div>
          <div className="col-6 col-md-6 col-lg-3 d-flex flex-column">
            <div className="fw-bold fs-6 mb-2">
              <img src="../../../../public/images/services.svg" alt="" className='me-1' width={16} /> Services
            </div>
            <Link
              className="mb-2 text-decoration-none text-black ancor">Business</Link>
            <Link
              className="mb-2 text-decoration-none text-black ancor">Car</Link>
            <Link
              className="d-flex fw-bold fs-6 olx-color mb-3 angle_a text-decoration-none">
              <div>All in Services</div>
              <div className="angle_div ms-1"><FaAngleRight /></div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PopularCategories;
