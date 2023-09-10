import { useState, useEffect } from 'react';
import './Attributes.css';
import { Container, Navbar } from 'react-bootstrap';
import { AiOutlineArrowLeft } from 'react-icons/ai';

export default function Attributes() {
  const [data, setData] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [subSubCategories, setSubSubCategories] = useState(null);

  useEffect(() => {
    fetch('categories.json')
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        throw new Error('Error fetching data');
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const showSubCategories = (cat) => {
    setSelectedCategory(cat);
    setSubSubCategories(null);
  };

  const showSub2Categories = (subCategory) => {
    if (selectedCategory && data[selectedCategory].subcategories) {
      const subcategories = data[selectedCategory].subcategories[subCategory];
  
      if (subcategories && subcategories.subcategories) {
        setSubSubCategories(subcategories.subcategories);
      }
    }
  };

  const renderCategories = () => {
    return Object.keys(data).map((cat) => (
      <div
        key={cat}
        className={`item d-flex align-items-center border-bottom p-1 ${
          selectedCategory === cat ? 'selected' : ''
        }`}
        style={{ height: '45px' }}
        role='button'
        onClick={() => showSubCategories(cat)}
      >
        <img src={data[cat].icon} height="30px" width="70px" style={{ padding: '0px 20px' }} />
        <p style={{ marginBottom: '0', fontSize: 'small' }} className="me-auto">
          {cat}
        </p>
        <img src="svg/arrow-right.svg" height="14px" className="pe-1" />
      </div>
    ));
  };

  const renderSubCategories = () => {
    if (selectedCategory && data[selectedCategory].subcategories) {
      const items = data[selectedCategory].subcategories;
      return Object.keys(items).map((cat) => (
        <div
          key={cat}
          className="item d-flex justify-content-between align-items-center border-bottom p-1"
          style={{ height: '45px' }}
          role='button'
          onClick={() => showSub2Categories(cat)}
        >
          {typeof items[cat] === 'string' ? (
            <a className="text-decoration-none text-black" style={{ fontSize: 'small', paddingLeft: '20px' }}>
              {items[cat]}
            </a>
          ) : (
            <>
              <div style={{ fontSize: 'small', paddingLeft: '20px' }}>{items[cat].title}</div>
              <img src="./svg/arrow-right.svg" height="14px" className="pe-1" />
            </>
          )}
        </div>
      ));
    }
    return null;
  };
  const renderSubSubCategories = () => {
    if (subSubCategories) {
        console.log(subSubCategories);
      return subSubCategories.map((subSubCategory) => (
        <div
          key={subSubCategory.id} 
          className="item d-flex justify-content-between align-items-center border-bottom p-1"
          style={{ height: '45px' }}
          role='button'
          onClick={() => showSub2Categories(subSubCategory)}
        >
          <a className="text-decoration-none text-black" style={{ fontSize: 'small', paddingLeft: '20px' }}>
            {subSubCategory}
          </a>
        </div>
      ));
    }
    return null;
  };
  
  return (
    <>
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
      </Container>
    <div className="container-fluid">
        <h5 className="text-center m-3 fw-bold">POST YOUR AD</h5>
        <div className="card p-0 container">
          <div className="row">
            <h6 className="p-3 ps-4">CHOOSE A CATEGORY</h6>
          </div>
          <hr className="p-0 m-0" />
          <div className="row">
            <div className="col-4 border-end pe-0" id="main-cat">
              {renderCategories()}
            </div>
            <div className="col-4 border-end p-0" id="sub1-cat">
              {renderSubCategories()}
            </div>
            <div className="col-4 ps-0" id="sub2-cat">
               {renderSubSubCategories()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
