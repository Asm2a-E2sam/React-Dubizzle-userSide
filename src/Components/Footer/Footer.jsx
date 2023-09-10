import React from 'react';
import { BsInstagram } from "react-icons/bs";
import { BiLogoFacebookCircle } from "react-icons/Bi";
import { FaTwitter } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <>
              {/* Footer */}
      <div className="bg-light">
        <div className="row  px-5 py-3 foorter ">
          {/* Footer 1 */}
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <p className="fs-4 fw-bold pt-4 pe-5">
                Find amazing deals on the go
                <span className="d-block text-danger">
                  Download the app now!
                </span>
              </p>
            </div>
            <div className="col-lg-4 col-md-6 text-end pe-5">
              <img
                className="w-50 px-4"
                src="https://www.dubizzle.com.eg/assets/brandMobileApp.0053aa25c45ccb88f3056b71272aab15.webp"
                alt=""
              />
            </div>
            {/* Social */}
            <div className="col-lg-4 col-md-6 d-flex align-items-center">
              <div className="d-flex flex-row">
                <a href="">
                  <img
                    className="w-100 pe-2"
                    src="https://www.dubizzle.com.eg/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg"
                    alt=""
                  />
                </a>
                <a href="">
                  <img
                    className="w-100 pe-2"
                    src="https://www.dubizzle.com.eg/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg"
                    alt=""
                  />
                </a>
                <a href="">
                  <img
                    className="w-100 pe-2"
                    src="https://www.dubizzle.com.eg/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          {/* Footer 2 */}
          <hr />
          <div style={{ fontSize: "small" }} className="row">
            {/* 1st */}
            <div className="col-6 col-md-2 mb-3">
              <h6 className="pb-3">ABOUT US</h6>
              <ul className="nav flex-column ">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-dark">
                    About Dubizzle Group
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-dark">
                    Careers
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-dark">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-dark">
                    Dubizzle for Businesses
                  </a>
                </li>
              </ul>
            </div>
            <div className="d-none d-md-block col-md-1"></div>
            {/* 2nd */}
            <div className="col-6 col-md-2 mb-3">
              <h6 className="pb-3">DUBIZZLE</h6>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-dark">
                    Blog
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-dark">
                    Help
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-dark">
                    Sitemap
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-dark">
                    Terms of use
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-dark">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="d-none d-md-block col-md-1"></div>
            {/* 3rd */}
            <div className="col-6 col-sm-6 col-md-2 mb-3">
              <h6 className="pb-3">COUNTRIES</h6>
              <div className="nav">
                <div className="d-flex flex-column pe-5">
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-dark">
                      Bahrain
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-dark">
                      Jordan
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-dark">
                      Kuwait
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-dark">
                      Lebanon
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-dark">
                      Oman
                    </a>
                  </li>
                </div>
                <div className="d-flex flex-column">
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-dark">
                      UAE
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-dark">
                      Egypt
                    </a>
                  </li>
                </div>
              </div>
            </div>
            <div className="d-none d-md-block col-md-1"></div>
            {/* Social */}
            <div className="col-12 col-md-3 col-sm-6 text-center text-dark">
              <div className="fs-6 fw-bold mb-2 text-start">FOLLOW US</div>
              <div className="d-flex flex-row">
                {/* Facebook */}
                <a href="">
                  <div className="rounded-circle border border-danger socialCont me-2">
                    <BiLogoFacebookCircle className="socialIcon" />
                  </div>
                </a>
                {/* Twitter */}
                <a href="">
                  <div className="rounded-circle border border-danger socialCont me-2">
                    <FaTwitter className="socialIcon" />
                  </div>
                </a>
                {/* Youtube */}
                <a href="">
                  <div className="rounded-circle border border-danger socialCont me-2">
                    <BsYoutube className="socialIcon" />
                  </div>
                </a>
                {/* Instagram */}
                <a href="">
                  <div className="rounded-circle border border-danger socialCont me-2">
                    <BsInstagram className="socialIcon" />
                  </div>
                </a>
                {/* Linked In */}
                <a href="">
                  <div className="rounded-circle border border-danger socialCont me-2">
                    <FaLinkedin className="socialIcon" />
                  </div>
                </a>
              </div>
              <div className="d-flex flex-row mt-5">
                <a href="">
                  <img
                    className="w-100 pe-2"
                    src="https://www.dubizzle.com.eg/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg"
                    alt=""
                  />
                </a>
                <a href="">
                  <img
                    className="w-100 pe-2"
                    src="https://www.dubizzle.com.eg/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg"
                    alt=""
                  />
                </a>
                <a href="">
                  <img
                    className="w-100 pe-2"
                    src="https://www.dubizzle.com.eg/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> 
        </>
    );
}

export default Footer;
