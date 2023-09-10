import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {MdEmail} from "react-icons/md";
import {BsFillTelephoneFill} from "react-icons/bs"
import "./Login.css";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="container ">
        <div className="row text-center">
          <Modal.Header closeButton className="border-0 fs-5"></Modal.Header>
          <Modal.Body>
            <img
              src="https://www.dubizzle.com.eg/assets/brandIconLogin_noinline.feed3f3b6aa25ca2e3207a2fcdcc0b69.svg"
              alt=""
            />
            <h4 className="pt-5 fs-5 fw-bold"> Welcome to Dubizzle</h4>
            <p className="pt-5 fw-bold">
              The trusted community of buyers and sellers.
            </p>
            <button className="btn-login">
                <img src="./svg/google.svg" alt="" className="me-2"/>
                 Continue with Google</button>
            <button className="btn-login">
                <img src="./svg/facebook.svg" alt="" className="me-2"/>
                 Continue with Facebook</button>
            <button className="btn-login"><MdEmail className="me-2"/> Continue with Email</button>
            <button className="btn-login"><BsFillTelephoneFill className="me-2"/> Continue with Phone</button>
            <p className="sp1 mt-4 mb-0">
              By continuing, you are accepting
            </p>
            <p className="sp1">
            <span>Dubizzle Terms</span> of use and <span>Privacy Policy</span>
              
            </p>

          </Modal.Body>
        </div>
      </div>
    </Modal>
  );
}

function Login() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="white" onClick={() => setModalShow(true)}>
        Login
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Login;