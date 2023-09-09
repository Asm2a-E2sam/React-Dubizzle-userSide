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
                    <div className="col-2 btn border-danger w-auto mb-2" id="Save_search ">
                        <BsSuitHeart className=" text-danger" /> Save search</div>
                </Link>
            </div>
            <div className="row bg-secondary bg-opacity-10 pb-3 ps-5">
                <div className="fs-5 fw-bold my-3">Featured Businesses</div>
                    <div className="row">
                        <div id="carouselExample" className="carousel slide">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row d-flex">
                                        <div className="col-2">
                                            <img src="../../../../../public/images/SearchImg/slider1.jpeg" className="d-block w-75" alt="" />
                                            <div className="text-decoration-underline">Car Accident</div>
                                        </div>
                                        <div className="col-2">
                                            <img src="../../../../../public/images/SearchImg/slider1.jpeg" className="d-block w-75" alt="" />
                                            <div className="text-decoration-underline">Car Accident</div>
                                        </div>
                                        <div className="col-2">
                                            <img src="../../../../../public/images/SearchImg/slider1.jpeg" className="d-block w-75" alt="" />
                                            <div className="text-decoration-underline">Car Accident</div>
                                        </div>
                                        <div className="col-2">
                                            <img src="../../../../../public/images/SearchImg/slider1.jpeg" className="d-block w-75" alt="" />
                                            <div className="text-decoration-underline">Car Accident</div>
                                        </div>
                                        <div className="col-2">
                                            <img src="../../../../../public/images/SearchImg/slider1.jpeg" className="d-block w-75" alt="" />
                                            <div className="text-decoration-underline">Car Accident</div>
                                        </div>
                                        <div className="col-2">
                                            <img src="../../../../../public/images/SearchImg/slider1.jpeg" className="d-block w-75" alt="" />
                                            <div className="text-decoration-underline">Car Accident</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className="row d-flex">
                                        <div className="col-2">
                                            <img src="../../../../../public/images/SearchImg/slider2.jpeg" className="d-block w-75" alt="" />
                                            <div className="text-decoration-underline">El Rawas Motors</div>
                                        </div>
                                        <div className="col-2">
                                            <img src="../../../../../public/images/SearchImg/slider2.jpeg" className="d-block w-75" alt="" />
                                            <div className="text-decoration-underline">El Rawas Motors</div>
                                        </div>
                                        <div className="col-2">
                                            <img src="../../../../../public/images/SearchImg/slider2.jpeg" className="d-block w-75" alt="" />
                                            <div className="text-decoration-underline">El Rawas Motors</div>
                                        </div>
                                        <div className="col-2">
                                            <img src="../../../../../public/images/SearchImg/slider2.jpeg" className="d-block w-75" alt="" />
                                            <div className="text-decoration-underline">El Rawas Motors</div>
                                        </div>
                                        <div className="col-2">
                                            <img src="../../../../../public/images/SearchImg/slider2.jpeg" className="d-block w-75" alt="" />
                                            <div className="text-decoration-underline">El Rawas Motors</div>
                                        </div>
                                        <div className="col-2">
                                            <img src="../../../../../public/images/SearchImg/slider2.jpeg" className="d-block w-75" alt="" />
                                            <div className="text-decoration-underline">El Rawas Motors</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row d-flex">
                                        <div className="col-2">
                                            <img src="../../../../../public/images/SearchImg/slider3.jpeg" className="d-block w-75" alt="" />
                                            <div className="text-decoration-underline">El-Eman Electric</div>
                                        </div>
                                        <div className="col-2">
                                            <img src="../../../../../public/images/SearchImg/slider3.jpeg" className="d-block w-75" alt="" />
                                            <div className="text-decoration-underline">El-Eman Electric</div>
                                        </div>
                                        <div className="col-2">
                                            <img src="../../../../../public/images/SearchImg/slider3.jpeg" className="d-block w-75" alt="" />
                                            <div className="text-decoration-underline">El-Eman Electric</div>
                                        </div>
                                        <div className="col-2">
                                            <img src="../../../../../public/images/SearchImg/slider3.jpeg" className="d-block w-75" alt="" />
                                            <div className="text-decoration-underline">El-Eman Electric</div>
                                        </div>
                                        <div className="col-2">
                                            <img src="../../../../../public/images/SearchImg/slider3.jpeg" className="d-block w-75" alt="" />
                                            <div className="text-decoration-underline">El-Eman Electric</div>
                                        </div>
                                        <div className="col-2">
                                            <img src="../../../../../public/images/SearchImg/slider3.jpeg" className="d-block w-75" alt="" />
                                            <div className="text-decoration-underline">El-Eman Electric</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                <span className=" me-5" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#000" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                                    <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                                </svg></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                <span className=" ms-5" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#000" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                </svg></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default SearchSlider;
