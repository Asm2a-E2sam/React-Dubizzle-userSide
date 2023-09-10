import "./Navbar.css";
// import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FiMapPin } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import { MdArrowForwardIos } from "react-icons/md";
import { LuShapes } from "react-icons/lu";
import Login from "../Login/Login"
import { Navbar, Nav, Form, Button, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="container-fluid fixed-top navbarStyle ">
        {/* first header */}
        <div className="row  px-5 py-3 firstHeader ">
          <Navbar.Brand className="col-1 me-1">
            <NavLink to="/">
            <img
              src="https://www.dubizzle.com.eg/assets/logo_noinline.feed3f3b6aa25ca2e3207a2fcdcc0b69.svg"
              height={"35vw"}
            />
            </NavLink>
          </Navbar.Brand>
          <div className="my-auto mb-0 me-3 topHeader ">
            <span className="properitySpan rounded-circle topHeaderImg mx-3">
              <img
                src="https://www.dubizzle.com.eg/assets/property-for-rent_noinline.afd1b8bf81720cc538aba324a684f145.svg"
                height={"20rem"}
                className=" "
              />
            </span>
            <span className="fw-bold  topHeaderText">Properties</span>
          </div>
        </div>
        {/* second header */}
        <div className="row px-5  secondHeader ">
          <Navbar expand="lg">
            <Navbar.Toggle aria-controls="navbarSupportedContent" />
            <Navbar.Collapse id="navbarSupportedContent">
              {/* <Nav className=" container row justify-content-center align-items-center"> */}
              {/* Location */}
              <Col lg={3}>
                <div className="searchable-dropdown me-4">
                  <div className="search-container ">
                    {/* Location Search Icon */}

                    <FiMapPin className="fa-solid fa-location-dot search-icon fs-4" />
                    <input
                      type="text"
                      className="search-input  fs-5 ps-5 rounded py-2"
                      placeholder="Search location..."
                      id="location-search"
                      value={"Egypt"}
                    />
                  </div>
                  <span className="fw-bolder fs-2 arrow text-end pe-3 ">
                    <IoIosArrowDown />
                  </span>

                  <ul className="options">
                    {/* Location Options */}
                    <li
                      data-value="London"
                      className="d-flex justify-content-between"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                      >
                        {/* SVG Path for Location Icon */}
                        <path
                          className="px-5"
                          d="M12 2c3.196 0 6 2.618 6 5.602 0 3.093-2.493 7.132-6 12.661-3.507-5.529-6-9.568-6-12.661 0-2.984 2.804-5.602 6-5.602m0-2c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"
                          style={{ fill: "red" }}
                        />
                      </svg>
                      London
                    </li>
                    <li
                      data-value="Boston"
                      className="d-flex justify-content-between"
                    >
                      {/* Repeat the pattern for other location options */}
                    </li>
                  </ul>
                </div>
              </Col>
              {/* Search */}
              <Col lg={6}>
                <Form className="input-group">
                  <input
                    type="text"
                    className="search-input fs-5 ps-4 rounded py-2 col"
                    placeholder="Find Cars, Mobile Phones and more..."
                    name="search"
                  />
                  <Button
                    variant="danger"
                    className="cllbtn text-light fs-4"
                    type="submit"
                  >
                    <BsSearch
                      className="fa-solid fa-magnifying-glass"
                      style={{ color: "#f6f6f6" }}
                    />
                  </Button>
                </Form>
              </Col>
              {/* Language */}
              <Nav.Item className="col-lg-1">
                <Nav.Link
                  className="nav-link active fw-bold fs-5 text-center"
                  aria-current="page"
                  href="#"
                >
                  العربية
                </Nav.Link>
              </Nav.Item>
              {/* Login */}
              <Nav.Item className=" col-lg-1 login">
                <Login/>
              </Nav.Item>
              {/* Sell */}
              <Nav.Item className=" col-lg-1">
              <NavLink className="text-decoration-none text-light fs-6" to="/attributes">
                <button className="btn cllbtn text-light fw-bold fs-5 px-5" href="#">
                 Sell
                </button>
                </NavLink> 
              </Nav.Item>
              {/* </Nav> */}
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
      {/* Categories */}
      <div className="row px-5 py-2 thirdHeader fw-bold text-end d-none d-lg-block">
        <div className="row d-flex justify-content-between">
          {/* {"1 Cat"} */}
          <div className="col-1 text-start">
            <div className="fw-bold">
              <div className="dropdown">
                <a
                  className="dropdown-toggle-no-caret text-dark text-decoration-none"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Vehicles
                </a>
                <ul className="dropdown-menu subermenu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Cars for Sale
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Cars for Rent
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Tyres, Batteries, Oils, & Accessories
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Car Spare Parts
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Motorcycles & Accessories
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Boats - Watercraft
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Heavy Trucks, Buses & Other Vehicles
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>{" "}
          {/* {"2 Cat"} */}
          <div className="col-1">
            <div className="fw-bold">
              <div className="dropdown">
                <a
                  className="dropdown-toggle-no-caret text-dark text-decoration-none"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Properties
                </a>
                <ul className="dropdown-menu subermenu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Apartments & Duplex for Sale
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Apartments & Duplex for Rent
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Villas For Sale
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Villas For Rent
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Vacation Homes for Sale
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Vacation Homes for Rent
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Commercial for Sale
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Commercial for Rent
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Buildings & Lands
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* {"3 Cat"} */}
          <div className="col-2">
            {" "}
            <div className="fw-bold">
              <div className="dropdown">
                <a
                  className="dropdown-toggle-no-caret text-dark text-decoration-none"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Mobiles & Tablets
                </a>
                <ul className="dropdown-menu subermenu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Mobile Phones
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Tablets
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Mobile & Tablet Accessories
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Mobile Numbers
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* {"Split Cat"} */}
          <div className="col-1">
            {" "}
            <div className="fw-bold">
              <div className="dropdown">
                <a
                  className="dropdown-toggle-no-caret text-dark text-decoration-none"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Jobs
                </a>
                <ul className="dropdown-menu subermenu px-3">
                  <div className="d-flex">
                    <div>
                      <li>
                        <a className="dropdown-item" href="#">
                          Accounting, Finance & Banking
                        </a>
                        <a className="dropdown-item" href="#">
                          Engineering{" "}
                        </a>
                        <a className="dropdown-item" href="#">
                          Designers{" "}
                        </a>
                        <a className="dropdown-item" href="#">
                          Customer Service & Call Center
                        </a>
                        <a className="dropdown-item" href="#">
                          Workers and Technicians
                        </a>
                        <a className="dropdown-item" href="#">
                          Management & Consulting
                        </a>
                        <a className="dropdown-item" href="#">
                          Drivers & Delivery{" "}
                        </a>
                        <a className="dropdown-item" href="#">
                          HR{" "}
                        </a>
                      </li>
                    </div>
                    <div>
                      <li>
                        <a className="dropdown-item" href="#">
                          Tourism, Travel & Hospitality
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          IT - Telecom{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Marketing and Public Relations
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Medical, Healthcare, & Nursing
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Sales{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Secretarial{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Guards and Security{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Legal - Lawyers{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Other Job{" "}
                        </a>
                      </li>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          {/* {"Nested Cat"} */}
          <div className="col-2">
            {" "}
            <div className="fw-bold">
              <div className="dropdown nav-item">
                <a
                  className="dropdown-toggle-no-caret text-dark text-decoration-none"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Electronics & Appliances
                </a>
                <ul className="dropdown-menu subermenu">
                  <li>
                    {/* Parent menu */}
                    <a
                      className="dropdown-item d-flex justify-content-between"
                      href="#"
                    >
                      TV - Audio - Video
                      <span className="fw-bolder fs-5">
                        <i className="fa-solid fa-angle-right"></i>
                      </span>
                    </a>
                    {/* Child menu */}
                    <ul className="submenu dropdown-menu">
                      <li>
                        <a className="dropdown-item fw-bold ps-1" href="#">
                          All TV - Audio - Video 1
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Televisions
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          DVD - Home Theater{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Home Audio{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Mp3 Players - Portable audio
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Satellite TV receivers
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    {/* Parent menu */}
                    <a
                      className="dropdown-item d-flex justify-content-between"
                      href="#"
                    >
                      Computers - Accessories
                      <span className="fw-bolder fs-5">
                        <i className="fa-solid fa-angle-right"></i>
                      </span>
                    </a>
                    {/* Child menu */}
                    <ul className="submenu dropdown-menu">
                      <li>
                        <a className="dropdown-item fw-bold ps-1" href="#">
                          All Computers - Accessories
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Desktop computers{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Laptop computers{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Computer Accessories & Spare Parts
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    {/* Parent menu */}
                    <a
                      className="dropdown-item d-flex justify-content-between"
                      href="#"
                    >
                      Video games - Consoles
                      <span className="fw-bolder fs-5">
                        <i className="fa-solid fa-angle-right"></i>
                      </span>
                    </a>
                    {/* Child menu */}
                    <ul className="submenu dropdown-menu">
                      <li>
                        <a className="dropdown-item fw-bold ps-1" href="#">
                          All Video games - Consoles
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Video Game Consoles{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Video Games & Accessories
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    {/* Parent menu */}
                    <a
                      className="dropdown-item d-flex justify-content-between"
                      href="#"
                    >
                      Cameras - Imaging
                      <span className="fw-bolder fs-5">
                        <i className="fa-solid fa-angle-right"></i>
                      </span>
                    </a>
                    {/* Child menu */}
                    <ul className="submenu dropdown-menu">
                      <li>
                        <a className="dropdown-item fw-bold ps-1" href="#">
                          All Cameras - Imaging
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Cameras
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Security Cameras{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Camera Accessories{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Binoculars - Telescopes
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    {/* Parent menu */}
                    <a
                      className="dropdown-item d-flex justify-content-between"
                      href="#"
                    >
                      Home Appliances
                      <span className="fw-bolder fs-5">
                        <i className="fa-solid fa-angle-right"></i>
                      </span>
                    </a>
                    {/* Child menu */}
                    <ul className="submenu dropdown-menu">
                      <li>
                        <a className="dropdown-item fw-bold ps-1" href="#">
                          All Home Appliances
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Refrigerators - Freezers
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Ovens - Microwaves{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Dishwashers
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Cooking Tools{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Washers - Dryers{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Water Coolers & Kettles
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Air conditioners & Fans
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Cleaning Appliances{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Other Home Appliances{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Heaters
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* {"Split Cat"} */}
          <div className="col-2">
            {" "}
            <div className="fw-bold">
              <div className="dropdown">
                <a
                  className="dropdown-toggle-no-caret text-dark text-decoration-none"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  Furniture & Decor
                </a>
                <ul
                  style={{ marginLeft: "-200px" }}
                  className="dropdown-menu dropdown-menu-end subermenu"
                >
                  <div className="d-flex">
                    <div>
                      <li>
                        <a className="dropdown-item" href="#">
                          Accounting, Finance & Banking
                        </a>
                        <a className="dropdown-item" href="#">
                          Engineering{" "}
                        </a>
                        <a className="dropdown-item" href="#">
                          Designers{" "}
                        </a>
                        <a className="dropdown-item" href="#">
                          Customer Service & Call Center
                        </a>
                        <a className="dropdown-item" href="#">
                          Workers and Technicians
                        </a>
                        <a className="dropdown-item" href="#">
                          Management & Consulting
                        </a>
                        <a className="dropdown-item" href="#">
                          Drivers & Delivery{" "}
                        </a>
                        <a className="dropdown-item" href="#">
                          HR{" "}
                        </a>
                      </li>
                    </div>
                    <div>
                      <li>
                        <a className="dropdown-item" href="#">
                          Tourism, Travel & Hospitality
                        </a>
                      </li>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          {/* {"Split & Nested Cat"} */}
          <div className="col-2">
            <div className="fw-bold">
              <div className="dropdown">
                <a
                  className="dropdown-toggle-no-caret text-dark text-decoration-none"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  <LuShapes />
                  <span className="ps-2">More Categories</span>
                </a>
                <ul
                  style={{
                    position: "fixed",
                    left: "10%",
                    width: "80%",
                    margin: "auto",
                  }}
                  className="dropdown-menu subermenu px-3"
                >
                  <div className="d-flex" style={{ width: "100%" }}>
                    <div>
                      <li>
                        <a
                          className="dropdown-item d-flex justify-content-between"
                          href="#"
                        >
                          <div className="d-flex flex-column pb-3">
                            <div className="fw-bold">Fashion & Beauty</div>
                            <div
                              style={{ fontSize: "small" }}
                              className="fw-light"
                            >
                              Women’s Clothing, Men’s Clothing, Women’s
                              Accessories
                            </div>
                          </div>
                          <span className="fw-bolder fs-5 arrowMoreCat">
                            <MdArrowForwardIos />
                          </span>
                        </a>
                        <ul
                          className="submenu dropdown-menu border-0 my-2"
                          style={{
                            left: "30%",
                            width: "fit-content",
                            height: "fit-content",
                            borderLeft: "1px solid #e8e5e5 !important",
                            borderRadius: "0",
                            marginLeft: "-50px",
                          }}
                        >
                          <li>
                            <a className="dropdown-item fw-bold ps-1" href="#">
                              All in Fashion & Beauty
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Women’s Clothing
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Men’s Clothing
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Women’s Accessories - Cosmetics - Personal Care
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Men’s Accessories - Personal Care
                            </a>
                          </li>
                        </ul>
                      </li>
                    </div>
                    {/* Repeat similar code blocks for other categories */}
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="zzzz"></div>
   
    </>
  );
}

export default NavBar;
