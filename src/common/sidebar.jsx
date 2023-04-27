import MobileMenus from "@/layout/header/mobile-menus";
import ImagePopup from "@/modals/ImagePopup";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import fetch from "node-fetch";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useGlobalContext } from "@/components/contexts/GlobalContext";

const images = [
    {
        img: "/assets/img/blog/blog-in-01.jpg",
    },
    {
        img: "/assets/img/blog/blog-in-02.jpg",
    },
    {
        img: "/assets/img/blog/blog-in-03.jpg",
    },
];

const Sidebar = ({ isActive, setIsActive }) => {
    //   constructor(props){
    //     super(props)
    //     this.state = {
    //                 mobileNumber: '',
    //             }
    //      this.changeMobileNumberHandler = this.changeMobileNumberHandler.bind(this);
    // }
    // changeMobileNumberHandler(event){
    //         this.setState({instituteName: event.target.value});
    // }
    const [sendOTPClicked, setSendOTPClicked] = useState(false);
    // const [mobileNumber, setMobileNumber] = useState();
    const [otpLogin, setOTPLogin] = useState(false);

    // photoIndex
    const [photoIndex, setPhotoIndex] = useState(null);
    // image open state
    const [isOpen, setIsOpen] = useState(false);

    const { mobileNumber, setMobileNumber, customerID, setCustomerID, custName, setCustName } =
        useGlobalContext();

    // handleImagePopup
    const handleImagePopup = (i) => {
        setPhotoIndex(i);
        setIsOpen(true);
    };
    //  images
    const img = images.map((item) => item.img);

    const sendOTP = async (mobileNo) => {
        // document.getElementById("OTPForm").style = "visibility: visible";
        // const mobileNo = document.getElementById("mobileNumber");
        // const mobileNumber = mobileNo.value;
        const mobileNumber = mobileNo;
        // var elt = document.getElementById("mobileNumber");
        // elt.parentNode.removeChild(elt);
        const url = "/api/handleSendOTP";
        const options = {
            method: "GET",
            mode: "cors",
            headers: {
                companyid: "917d8aa2-7c4e-4282-b27f-0beb0228ac7b",
                "content-type": "application/json",
                "Access-Control-Allow-Origin": "*",
                info: String(mobileNumber),
            },
        };
        const response = await fetch(url, options);

        const res = await response.json(); //extract JSON from the http response
    };

    const verifyOTP = async (e, mobileNo) => {
        // document.getElementById("OTPForm").style = "visibility: visible";
        // const mobileNo = document.getElementById("mobileNumber");
        e.preventDefault();
        const mobileNumber = mobileNo;
        const otp = document.getElementById("mobileNumberOTP");
        const otpValue = otp.value;

        // var elt = document.getElementById("mobileNumberOTP");
        // elt.parentNode.removeChild(elt);

        const url = "/api/handleSubmitButton";
        const options = {
            method: "GET",
            headers: {
                "content-type": "application/json",
                customer: JSON.stringify({
                    MobileNo: String(mobileNumber),
                    otp: String(otpValue),
                }),
            },
        };

        const response = await fetch(url, options);
        const res = await response.json(); //extract JSON from the http response
        if (res && res.success && res.success.output) {
            var userId = JSON.parse(res.success.output).Id;
            localStorage.setItem("userLoggedIn", !res.success.isError);
            localStorage.setItem("customerId", userId);
            localStorage.setItem("customerDetails", res.success.output);
        }
        setOTPLogin(res.success.isError);
        setIsActive(res.success.isError);
    };

    const getUserDetails = async (userId) => {
        const url = "/api/handleCustomerDetails";
        const options = {
            method: "GET",
            headers: {
                // "content-type": "application/json",
                cusrefid: String(userId),
            },
        };

        const response = await fetch(url, options);
        const res = await response.json();
        if (res && res.success && res.success.output) {
            const userDetails = JSON.parse(res.success.output)[0];
            await setCustName(userDetails.PrintName);
        }
        console.log("User details is ", JSON.parse(res.success.output)[0].PrintName);
    };
    const displayOTPForm = (e) => {
        e.preventDefault();
        sendOTP(mobileNumber);
        setSendOTPClicked(true);
    };


    return (
        <>
            <div className={`tpsideinfo tp-side-info-area ${isActive ? "tp-sidebar-opened" : ""}`}>
                <button onClick={() => setIsActive(false)} className="tpsideinfo__close">
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
                    {!sendOTPClicked && (
                        <div className="tpsideinfo__content-inputarea-input">
                            <form action="#" onSubmit={displayOTPForm}>
                                <input
                                    required
                                    type="tel"
                                    pattern="[0-9]{10}"
                                    placeholder="Enter Mobile Number"
                                    id="mobileNumber"
                                    onChange={(e) => setMobileNumber(e.target.value)}
                                />
                                <button
                                    className="tpsideinfo__content-inputarea-input-btn"
                                    id="OTPSubmit"
                                >
                                    <i className="fa-solid fa-paper-plane"></i>
                                    Send OTP
                                </button>
                            </form>
                        </div>
                    )}
                    {sendOTPClicked && (
                        <div className="tpsideinfo__content-inputarea-input">
                            <form action="#" onSubmit={(e) => verifyOTP(e, mobileNumber)}>
                                <input type="number" placeholder="Enter OTP" id="mobileNumberOTP" />
                                <button
                                    className="tpsideinfo__content-inputarea-input-btn"
                                    // onClick={() => verifyOTP(mobileNumber)}
                                >
                                    <i className="fa-solid fa-paper-plane"></i>
                                    Submit
                                </button>
                                {otpLogin && (
                                    <div>
                                        <Stack sx={{ width: "100%" }} spacing={2}>
                                            <Alert severity="error">
                                                Invalid OTP — check it out!
                                            </Alert>
                                        </Stack>
                                    </div>
                                )}
                            </form>
                            <div style={{display:"flex", paddingTop:"3px"}}>
                                    <div style={{ color: "white" , marginRight:"27px"}}>
                                        Enter OTP sent to : {mobileNumber}
                                    </div>
                                    <button
                                        style={{
                                            color: "white",
                                            background: "green",
                                            borderRadius: "5px",
                                            padding: "3px"
                                        }}
                                        onClick={()=>{setSendOTPClicked(false)}}
                                    >
                                        Change Number
                                    </button>
                                </div>
                        </div>
                    )}
                </div>
                {/* statement and contact */}
                <div className="tpsideinfo__content mb-60">
                    <p className=" d-none d-xl-block">
                        Our goal is to offer affordable, high-quality generic medicines that are
                        guaranteed to meet quality standards for the benefit of the people.
                    </p>
                    <span>Contact Us</span>
                    <a href="#">
                        <i className="fa-solid fa-star"></i>No.51, DR Building
                    </a>
                    <a href="tel:61383766284">
                        <i className="fa-solid fa-star"></i>Opposite to Aavin Factory, <br />{" "}
                        Villupuram-605602
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
