import MobileMenus from '@/layout/header/mobile-menus';
import ImagePopup from '@/modals/ImagePopup';
import Link from 'next/link';
import React, { useState } from "react";

const images = [
  {
    img: "/assets/img/blog/blog-in-01.jpg",
  },
  {
    img: "/assets/img/blog/blog-in-02.jpg",
  },
  {
    img: "/assets/img/blog/blog-in-03.jpg",
  }
];



const sendOTP = async () => {
  document.getElementById('OTPForm').style = 'visibility: visible';
  const mobileNo = document.getElementById('mobileNumber');
  const mobileNumber = mobileNo.value;
  const response = await fetch('http://qnqhealthcare.com/qnqerpws/ws/sendotp', {
    method: 'GET',
    // body: '', // string or object
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'companyid': '917d8aa2-7c4e-4282-b27f-0beb0228ac7b',
      'info': String(mobileNumber),
      'mode': 'no-cors'
    }
  });
  const res = await response.json(); //extract JSON from the http response

  
}

const verifyOTP = () => {

}
const displayOTPForm = () => {
  // const mobileNo = document.getElementById('mobileNumber');
  // const mobileNumber = mobileNo.innerText;
  sendOTP();
  
}


const Sidebar = ({ isActive, setIsActive }) => {

 
  // photoIndex
  const [photoIndex, setPhotoIndex] = useState(null);
  // image open state
  const [isOpen, setIsOpen] = useState(false);
  // handleImagePopup
  const handleImagePopup = (i) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };
  //  images
  const img = images.map((item) => item.img);

 
  return (
    <>
      <div
        className={`tpsideinfo tp-side-info-area ${
          isActive ? "tp-sidebar-opened" : ""
        }`}
      >
        <button
          onClick={() => setIsActive(false)}
          className="tpsideinfo__close"
        >
          <i className="fal fa-times"></i>
        </button>
        <div className="tpsideinfo__logo mb-40">
          <Link href="/">
            <img src="/assets/img/logo/logo.png" alt="logo" />
          </Link>
        </div>

        <div className="mobile-menu mean-container d-block d-lg-none">
          <div className="mean-bar">
            <MobileMenus />
          </div>
        </div>

        

        <div className="tpsideinfo__content-inputarea mb-60 d-none d-xl-block">
          <span>Login / Register</span>
          <div className="tpsideinfo__content-inputarea-input">
            <form action="#">
              <input type="text" placeholder="Enter Mobile Number" id='mobileNumber'/>
              <button className="tpsideinfo__content-inputarea-input-btn" id='OTPSubmit' onClick={displayOTPForm}>
                <i className="fa-solid fa-paper-plane"></i>
                Send OTP
              </button>
            </form>
          </div>

          
          <div className="tpsideinfo__content-inputarea-input hidden" id='OTPForm'>
            <form action="#">
              <input type="text" placeholder="Enter OTP" />
              <button className="tpsideinfo__content-inputarea-input-btn" onClick={verifyOTP}>
                <i className="fa-solid fa-paper-plane"></i>
                Submit
              </button>
            </form>
          </div>
        </div>
        {/* statement and contact */}
        <div className="tpsideinfo__content mb-60">
          <p className=" d-none d-xl-block">
          Our goal is to offer affordable, high-quality generic medicines that are guaranteed to meet quality standards for the benefit of the people.
          </p>
          <span>Contact Us</span>
          <a href="#">
            <i className="fa-solid fa-star"></i>No.51, DR Building
          </a>
          <a href="tel:61383766284">
            <i className="fa-solid fa-star"></i>Opposite to Aavin Factory, <br/> Villupuram-605602
          </a>
          <a href="mailto:noreply@envato.com">
            <i className="fa-solid fa-star"></i>care@qnqhealthcare.com
          </a>
        </div>

        
        {/* <div className="tpsideinfo__gallery mb-35 d-none d-xl-block">
          <span>Cheack Instagram Post</span>
          <div className="tpsideinfo__gallery-item">
            {images.map((item, i) => (
              <a
                key={i}
               
                style={{ cursor: "pointer" }}
                onClick={() => handleImagePopup(i)}
                className="popup-image"
              >
                <img src={item.img} alt="" />
              </a>
            ))}
          </div>
        </div> */}
        <div className="tpsideinfo__socialicon">
          <a href="#">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          {/* <a href="#">
            <i className="fa-brands fa-skype"></i>
          </a> */}
        </div>
      </div>

      <div
        onClick={() => setIsActive(false)}
        className={`body-overlay ${isActive ? "opened" : ""}`}
      ></div>

      {/* image light box start */}
      {isOpen && (
        <ImagePopup
          images={img}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}
      {/* image light box end */}
    </>
  );
};

export default Sidebar;