
import Carousel from 'react-bootstrap/Carousel';

const HomeSlider = () => {
  return (
    <div className='my-5'>
      <Carousel>
      <Carousel.Item interval={1000}>
      <img src="./images/slider1.jpeg" className="d-block w-100 rounded-2" />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img src="./images/slider2.jpeg" className="d-block w-100 rounded-3" />
      </Carousel.Item>
      <Carousel.Item>
      <img src="./images/slider3.jpeg" className="d-block w-100 rounded-3" />
      </Carousel.Item>
      <Carousel.Item>
      <img src="./images/slider4.jpeg" className="d-block w-100 rounded-3" />
      </Carousel.Item>
      <Carousel.Item>
      <img src="./images/slider5.jpeg" className="d-block w-100 rounded-3" />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default HomeSlider;
