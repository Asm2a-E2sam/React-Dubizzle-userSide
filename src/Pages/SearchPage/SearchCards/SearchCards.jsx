
import { BsSuitHeart } from 'react-icons/bs';
// import { LiaAngleRightSolid } from 'react-icons/lia';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const SearchCards = () => {
    return (
        <div>
            <div className='row py-4 border-bottom d-flex' >
                <div className='col-9 d-flex'>
                    <p className='me-2 pt-2'>Condition</p>
                    <ButtonGroup aria-label="Basic example">
                        <Button variant={false} className='bg-secondary bg-opacity-10 text-dark btn_active px-3'>all</Button>
                        <Button variant={false} className='bg-secondary bg-opacity-10 text-dark btn_active px-3'>new</Button>
                        <Button variant={false} className='bg-secondary bg-opacity-10 text-dark btn_active px-3'>used</Button>
                    </ButtonGroup>
                </div>
                <div className='col-3 '>

                    <div className='d-flex'>
                        <div className=" fw-bold">SORT BY:</div>
                        <div className='opacity-75'> Newly listed</div>
                        {/* <LiaAngleRightSolid/> */}
                    </div>

                </div>
            </div>

            <div className='fw-bold fs-5 py-1'>Featured ads</div>
            <div className="card mb-3 col-12">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="../../../../../public/images/imgCardHome/car1.jpeg" className="img-fluid rounded-start w-100 overflow-hidden w-100" style={{ height: '100%' }} alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <div className="d-flex justify-content-between card-title ">
                                <h5 className="fw-bold fs-4 olx-color">EGP 270,000</h5>
                                <BsSuitHeart className='fs-4' style={{cursor:'pointer'}}/>
                            </div>
                            <p className="card-text">تيجو ٧ بيز لاين السيارة الافضل في فئتها قيمة مقابل سعر بمعني الكلمة</p>
                            <p className="card-text"><small className="text-body-secondary"> 90000 to 999999 km. 2019</small></p>
                            <p className="card-text"><small className="text-body-secondary">Nasr City, Cairo . 4 days ago</small></p>
                            <div className="col-2 btn border-danger rounded-2 p-2 me-3 text-white fw-bold cllbtn"> Call</div>
                            <div className="col-2 btn border-danger rounded-2 fw-bold p-2 chatbtn"> Chat</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchCards;
