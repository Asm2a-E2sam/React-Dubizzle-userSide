import { FaAngleRight } from 'react-icons/fa';
import { BsSuitHeart } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const Laptop = () => {
    return (
        <div>
             {/* Laptop Computers */}
        <div className="col-12 row my-3">
          <div className="col-6 col-md-8 col-lg-10 fs-5 fw-bold">Laptop computers</div>
          <Link className="col-6 col-md-4 col-lg-2 olx-color fw-bold text-decoration-none ps-5">view
            more <FaAngleRight /></Link>
        </div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{height: '10rem'}} src=".././images/imgCardHome/labtop1.jpeg" />
      <Card.Body>
        <div className='d-flex  justify-content-between'>
        <Card.Title className='olx-color'>EGP</Card.Title>
        <BsSuitHeart/>
        </div>
        <Card.Text>
          Some quick example text to build on the card title 
        </Card.Text>
        <div className='opacity-75'>address</div>
        <div className='opacity-75'>time</div>
      </Card.Body>
    </Card>
        </div>
    );
}

export default Laptop;
