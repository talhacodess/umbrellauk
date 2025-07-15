import React, { useState } from 'react';
import Button from '../Button';
import PersonalInfo from './PersonalInfo';
import ProductDetail from './ProductDetail';

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    // Personal Information Fields
    fullName: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    // Product Specification
    boxStyle: '',
    lengthBox: '',
    widthBox: '',
    depthBox: '',
    unitBox: '',
    stockBox: '',
    colorBox: '',
    printingBox: '',
    quantityBox: '',
    addonBox: '',
    uploadBox: '',
    descBox: '',
  });

  console.log(page, 'Page');
  console.log(setPage, "setPage function reference");

  const PageTitles = [
    <h3 className='text-[20px] font-semibold'>Product Specification</h3>,
    <h3 className='text-[20px] font-semibold'>Personal Information</h3>
  ];

  const pageDisplay = () => {
    if (page === 0) {
      return <ProductDetail formData={formData} setFormData={setFormData} />;
    } else {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    }
  };

  const handleNext = () => {
    if (page === 1) {
      alert("Your form is submitted");
      // You can also handle actual form submission here
    } else {
      setPage((curPage) => curPage + 1);
    }
  };

  const handlePrev = () => {
    setPage((curPage) => curPage - 1);
  };

  return (
    <div className='form'>
      <div className='form-container'>
        <div className='header'>
          {PageTitles[page]}
        </div>

        <div className='body'>
          {pageDisplay()}
        </div>

        <div className='footer flex justify-between mt-3'>
          <Button
            className='text-white'
            onClick={handlePrev}
            disabled={page === 0}
          >
            Prev
          </Button>

          <Button
            className='text-white'
            onClick={handleNext}
          >
            {page === 1 ? "Submit" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Form;
