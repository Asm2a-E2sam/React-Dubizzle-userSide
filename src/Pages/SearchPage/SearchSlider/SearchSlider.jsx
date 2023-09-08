import React from 'react';
import { BsSuitHeart } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

const SearchSlider = () => {
    return (
        <div>

           <div className="row py-2">
    <Link className="row text-decoration-none text-black">
        <div className="col-9 me-5"></div>
          <div className="col-2 btn border-danger w-auto mb-2"  id="Save_search ">
          <BsSuitHeart className=" text-danger"/> Save search</div>
    </Link>
</div>

<div className="row bg-secondary bg-opacity-10 pb-3">
    <div className="fs-5 fw-bold my-3">Featured Businesses</div>

<Carousel>
      <Carousel.Item interval={1000}>
      <div className="row d-flex">
                    <div className="col-2">
                        <img src="img2/slidicon5.jpeg" className="d-block w-75" alt="" />
                        <div className="text-decoration-underline">El-Eman Electric</div>
                    </div>
                    <div className="col-2">
                        <img src="img2/slidicon6.jpeg" className="d-block w-75" alt="" />
                        <div className="text-decoration-underline">El-Eman Electric</div>
                    </div>
                    <div className="col-2">
                        <img src="img2/slidicon5.jpeg" className="d-block w-75" alt="" />
                        <div className="text-decoration-underline">El-Eman Electric</div>
                    </div>
                    <div className="col-2">
                        <img src="img2/slidicon6.jpeg" className="d-block w-75" alt="" />
                        <div className="text-decoration-underline">El-Eman Electric</div>
                    </div>
                    <div className="col-2">
                        <img src="img2/slidicon5.jpeg" className="d-block w-75" alt="" />
                        <div className="text-decoration-underline">El-Eman Electric</div>
                    </div>
                    <div className="col-2">
                        <img src="img2/slidicon6.jpeg" className="d-block w-75" alt="" />
                        <div className="text-decoration-underline">El-Eman Electric</div>
                    </div>
                </div>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <div className="row d-flex">
                    <div className="col-2">
                        <img src="img2/slidicon5.jpeg" className="d-block w-75" alt="" />
                        <div className="text-decoration-underline">El-Eman Electric</div>
                    </div>
                    <div className="col-2">
                        <img src="img2/slidicon6.jpeg" className="d-block w-75" alt="" />
                        <div className="text-decoration-underline">El-Eman Electric</div>
                    </div>
                    <div className="col-2">
                        <img src="img2/slidicon5.jpeg" className="d-block w-75" alt="" />
                        <div className="text-decoration-underline">El-Eman Electric</div>
                    </div>
                    <div className="col-2">
                        <img src="img2/slidicon6.jpeg" className="d-block w-75" alt="" />
                        <div className="text-decoration-underline">El-Eman Electric</div>
                    </div>
                    <div className="col-2">
                        <img src="img2/slidicon5.jpeg" className="d-block w-75" alt="" />
                        <div className="text-decoration-underline">El-Eman Electric</div>
                    </div>
                    <div className="col-2">
                        <img src="img2/slidicon6.jpeg" className="d-block w-75" alt="" />
                        <div className="text-decoration-underline">El-Eman Electric</div>
                    </div>
                </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="row d-flex">
                    <div className="col-2">
                        <img src="img2/slidicon5.jpeg" className="d-block w-75" alt="" />
                        <div className="text-decoration-underline">El-Eman Electric</div>
                    </div>
                    <div className="col-2">
                        <img src="img2/slidicon6.jpeg" className="d-block w-75" alt="" />
                        <div className="text-decoration-underline">El-Eman Electric</div>
                    </div>
                    <div className="col-2">
                        <img src="img2/slidicon5.jpeg" className="d-block w-75" alt="" />
                        <div className="text-decoration-underline">El-Eman Electric</div>
                    </div>
                    <div className="col-2">
                        <img src="img2/slidicon6.jpeg" className="d-block w-75" alt="" />
                        <div className="text-decoration-underline">El-Eman Electric</div>
                    </div>
                    <div className="col-2">
                        <img src="img2/slidicon5.jpeg" className="d-block w-75" alt="" />
                        <div className="text-decoration-underline">El-Eman Electric</div>
                    </div>
                    <div className="col-2">
                        <img src="img2/slidicon6.jpeg" className="d-block w-75" alt="" />
                        <div className="text-decoration-underline">El-Eman Electric</div>
                    </div>
                </div>
      </Carousel.Item>
      {/* <img src="../../../../public/images/slider4.jpeg" className="d-block w-100 rounded-3" /> */}
    
    </Carousel>
        </div>
        </div>
    );
}

export default SearchSlider;
