import "./Post.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Form from 'react-bootstrap/Form';
import Card from "react-bootstrap/Card";
import Navbar from "react-bootstrap/Navbar";
import { AiOutlineArrowLeft } from "react-icons/ai";

import FormInputText from "./FormInputText";
import FormTextArea from "./FormTextArea";
import FormInputPrice from "./FormInputPrice";
import FormRadioBtn from "./FormRadioBtn";
import FormImgGroup from "./FormImgGroup";

export default function Post() {
  const path = "vehicles / Cars htmlFor Sale";
  return (
    <Container fluid className="p-0">
      <Navbar expand="lg" className="bg-body-tertiary pt-0">
        <Container fluid>
          <Navbar.Brand href="#home">
            <AiOutlineArrowLeft className="fs-4 mt-3 me-2" />
            <img
              src="https://www.dubizzle.com.eg/assets/logo_noinline.feed3f3b6aa25ca2e3207a2fcdcc0b69.svg"
              className="dubizzle"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <h5 className="text-center my-3 fw-bold">POST YOUR AD</h5>
        <Card className="pb-4">
          <Row className="p-2 ">
            <h6 className="fw-bold fs-5 mb-3 mt-2">SELECT CATEGORY</h6>
            <span className="fs-sm">
              <span id="path">{path}</span>
              <a href="#" className="text-black fw-bold ps-3">
                Change
              </a>
            </span>
          </Row>
          <hr className="p-0 m-0" />
          <Row className="p-4">
              <h5 className="fw-bold ">INCLUDE SOME DETAILS</h5>
              <FormInputText 
                label="Ad title" 
                msg="Mention the key features of your item (e.g. brand, model, age,type)"
                />
              <FormInputText 
                label="Brand" 
                />
              <FormTextArea 
                label="Description"
                msg="Include condition, features and reason for selling"
              />
          </Row>
          <hr className="p-0 m-0" />
          <Row className="p-4">
              <h5 className="fw-bold">SET A PRICE</h5>
              <FormInputPrice label="Price" currency="EGP"/> 
          </Row>
          <hr className="p-0 m-0" />
          <Row className="px-4">
            <FormImgGroup/>
          </Row>
          <hr className="p-0 m-0" />
          <Row className="p-4">
            <h5 className="fs-bold">{"YOUR AD'S LOCATION"}</h5>
            <FormInputText label="Location"/> 
          </Row>  
          <hr className="p-0 m-0" />
          <Row className="p-4">
            <h5 className="fs-bold">REVIEW YOUR DETAILS</h5>
            <div className="d-flex">
                <img
                  src="./assets/logo2.png"
                  className="rounded-circle m-2"
                  width="94px"
                />
                <div className="form-control border-0 pe-0 pt-3">
                  <FormInputText label="Name"/>
                </div>
              </div>
          </Row>
          <Row className="px-4">
            <FormInputPrice label="Mobile Phone Number" currency="+20"/>
          </Row>
          <Row className="px-4">
            <p className="fs-4">Contact Method</p> 
            <FormRadioBtn label="Phone Number"/> 
            <FormRadioBtn label="Dubizzle Chat"/> 
            <FormRadioBtn label="Both"/> 
          </Row>
          <hr className="mt-4"/>
          <Row className="px-4 ms-1">
            <button className="post">Post now</button>
          </Row>
        </Card>
      </Container>
    </Container>
  );
}
