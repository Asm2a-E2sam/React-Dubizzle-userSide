import "./Post.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from 'react-bootstrap/Form';
import Card from "react-bootstrap/Card";
import Navbar from "react-bootstrap/Navbar";
import { AiOutlineArrowLeft } from "react-icons/ai";

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
        <Card>
          <Row className="p-2 ">
            <h6 className="fw-bold fs-5 mb-3 mt-2">SELECT CATEGORY</h6>
            <span className="fs-sm">
              <span id="path">{path}</span>
              <a href="#" className="text-black fw-bold ps-3">
                Change
              </a>
            </span>
          </Row>
          <Row>
            <hr className="p-0 m-0" />
            <div className="p-4">
              <h5 className="fw-bold ">INCLUDE SOME DETAILS</h5>
              <Form.Group>
                <Form.Label>Ad title</Form.Label>
                <Form.Control type="text" />
                <p className="fs-l">
                    Mention the key features of your item (e.g. brand, model, age,
                    type)
                </p>
              </Form.Group>
              <Form.Group>
                <Form.Label>Brand</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3}/>
                <p className="fs-l">
                    Include condition, features and reson htmlFor selling
                </p>
              </Form.Group>
            </div>
            <hr className="p-0 m-0" />
            <div className="p-4">
              <h5 className="fw-bold">SET A PRICE</h5>
              <label htmlFor="price" className="Form-label fs-5">
                Price
              </label>
              <div
                className="Form-control d-flex align-items-center py-0 px-2"
              >
                <span className="p-1 border-end">EGP</span>
                <input
                  type="text"
                  className="Form-control border-0"
                  id="price"
                />
              </div>
            </div>
            <hr className="p-0 m-0" />
            <div className="p-4">
              <h5 className="fs-bold">UPLOAD UP TO 20 PHOTOS</h5>
              <div className="row p-3 gap-3">
                <div className="border border-2 border-light-subtle d-flex justify-content-center imgs">
                  <img
                    src="./assets/iconAddPhoto.svg"
                    className="align-middle"
                    width="35px"
                  />
                </div>
                <div className="border border-2 border-light-subtle d-flex justify-content-center imgs">
                  <img
                    src="./assets/iconAddPhoto.svg"
                    className="align-middle"
                    width="35px"
                  />
                </div>
                <div className="border border-2 border-light-subtle d-flex justify-content-center imgs">
                  <img
                    src="./assets/iconAddPhoto.svg"
                    className="align-middle"
                    width="35px"
                  />
                </div>
                <div className="border border-2 border-light-subtle d-flex justify-content-center imgs">
                  <img
                    src="./assets/iconAddPhoto.svg"
                    className="align-middle"
                    width="35px"
                  />
                </div>
                <div className="border border-2 border-light-subtle d-flex justify-content-center imgs">
                  <img
                    src="./assets/iconAddPhoto.svg"
                    className="align-middle"
                    width="35px"
                  />
                </div>
                <div className="border border-2 border-light-subtle d-flex justify-content-center imgs">
                  <img
                    src="./assets/iconAddPhoto.svg"
                    className="align-middle"
                    width="35px"
                  />
                </div>
                <div className="border border-2 border-light-subtle d-flex justify-content-center imgs">
                  <img
                    src="./assets/iconAddPhoto.svg"
                    className="align-middle"
                    width="35px"
                  />
                </div>
                <div className="border border-2 border-light-subtle d-flex justify-content-center imgs">
                  <img
                    src="./assets/iconAddPhoto.svg"
                    className="align-middle"
                    width="35px"
                  />
                </div>
                <div className="border border-2 border-light-subtle d-flex justify-content-center imgs">
                  <img
                    src="./assets/iconAddPhoto.svg"
                    className="align-middle"
                    width="35px"
                  />
                </div>
                <div className="border border-2 border-light-subtle d-flex justify-content-center imgs">
                  <img
                    src="./assets/iconAddPhoto.svg"
                    className="align-middle"
                    width="35px"
                  />
                </div>
                <div className="border border-2 border-light-subtle d-flex justify-content-center imgs">
                  <img
                    src="./assets/iconAddPhoto.svg"
                    className="align-middle"
                    width="35px"
                  />
                </div>
                <div className="border border-2 border-light-subtle d-flex justify-content-center imgs">
                  <img
                    src="./assets/iconAddPhoto.svg"
                    className="align-middle"
                    width="35px"
                  />
                </div>
                <div className="border border-2 border-light-subtle d-flex justify-content-center imgs">
                  <img
                    src="./assets/iconAddPhoto.svg"
                    className="align-middle"
                    width="35px"
                  />
                </div>
                <div className="border border-2 border-light-subtle d-flex justify-content-center imgs">
                  <img
                    src="./assets/iconAddPhoto.svg"
                    className="align-middle"
                    width="35px"
                  />
                </div>
                <div className="border border-2 border-light-subtle d-flex justify-content-center imgs">
                  <img
                    src="./assets/iconAddPhoto.svg"
                    className="align-middle"
                    width="35px"
                  />
                </div>
                <div className="border border-2 border-light-subtle d-flex justify-content-center imgs">
                  <img
                    src="./assets/iconAddPhoto.svg"
                    className="align-middle"
                    width="35px"
                  />
                </div>
                <div className="border border-2 border-light-subtle d-flex justify-content-center imgs">
                  <img
                    src="./assets/iconAddPhoto.svg"
                    className="align-middle"
                    width="35px"
                  />
                </div>
                <div className="border border-2 border-light-subtle d-flex justify-content-center imgs">
                  <img
                    src="./assets/iconAddPhoto.svg"
                    className="align-middle"
                    width="35px"
                  />
                </div>
                <div className="border border-2 border-light-subtle d-flex justify-content-center imgs">
                  <img
                    src="./assets/iconAddPhoto.svg"
                    className="align-middle"
                    width="35px"
                  />
                </div>
                <div className="border border-2 border-light-subtle d-flex justify-content-center imgs">
                  <img
                    src="./assets/iconAddPhoto.svg"
                    className="align-middle"
                    width="35px"
                  />
                </div>
              </div>
              <p className="fs-l">
                htmlFor ther cover picture we recommend using the landscape
                mode.
              </p>
            </div>
            <hr className="p-0 m-0" />
            <div className="p-4">
              <h5 className="fs-bold">{"YOUR AD'S LOCATION"}</h5>
              <label htmlFor="location" className="Form-label fs-5">
                Location
              </label>
              <input type="text" className="Form-control" id="location" />
            </div>
            <hr className="p-0 m-0" />
            <div className="p-4">
              <h5 className="fs-bold">REVIEW YOUR DETAILS</h5>
              <div className="d-flex">
                <img
                  src="./assets/logo2.png"
                  className="rounded-circle m-2"
                  width="94px"
                />
                <div className="Form-control border-0 pe-0">
                  <label htmlFor="name" className="Form-label fs-5">
                    Name
                  </label>
                  <input type="text" className="Form-control" id="name" />
                </div>
              </div>

              <label htmlFor="mobile" className="Form-label fs-5">
                Mobile Phone Number
              </label>
              <div className="Form-control d-flex align-items-center py-0 px-2">
                <span className="p-1 border-end">+20</span>
                <input
                  type="text"
                  className="Form-control border-0"
                  id="mobile"
                  placeholder="Phone number: 1XXXXXXXXX"
                />
              </div>
              <p className="fs-4">Contact Method</p>

              <div className="Form-check-inline checker">
                <input
                  type="radio"
                  name="inlineRadioOptions"
                  value="PhoneNumber"
                />
                <label className="Form-check-label" htmlFor="inlineRadio1">
                  Phone Number
                </label>
              </div>
              <div className=" Form-check-inline checker">
                <input
                  type="radio"
                  name="inlineRadioOptions"
                  value="DubizzleChat"
                />
                <label className="Form-check-label" htmlFor="inlineRadio1">
                  Dubizzle Chat
                </label>
              </div>
              <div className=" Form-check-inline checker">
                <input
                  type="radio"
                  name="inlineRadioOptions"
                  value="Both"
                />
                <label className="Form-check-label" htmlFor="inlineRadio1">
                  Both
                </label>
              </div>
            </div>
            <hr className="p-0 m-0" />
            <div className="p-4">
              <button className="post">Post now</button>
            </div>
          </Row>
        </Card>
      </Container>
    </Container>
  );
}
