import Sidebar from "@/common/sidebar";
import useSticky from "hooks/use-sticky";
import Link from "next/link";
import React, { useState , useEffect} from "react";
import NavMenu from "./nav-menu";
import Router from "next/router";

const HeaderThree = () => {
    const { sticky } = useSticky();
    const [isActive, setIsActive] = useState(false);

    const [ isLoggedIn, setIsLoggedIn ] = useState();

    useEffect(() => {
        setIsLoggedIn(localStorage.getItem("userLoggedIn"));
    }, [isLoggedIn, []]);

    return (
        <>
            {/* <!-- tp-mobile-header-area start --> */}
            <div
                id="header-mob-sticky"
                className={`tp-mobile-header-area pt-15 pb-15 d-xl-none ${
                    sticky ? "header-sticky" : ""
                } `}
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4 col-10">
                            <div className="tp-mob-logo">
                                <Link href="/">
                                    <img src="/assets/img/logo/logo.png" alt="logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-8 col-2">
                            <div className="tp-mobile-bar d-flex align-items-center justify-content-end">
                                <div className="tp-bt-btn-banner d-none d-md-block d-xl-none mr-30">
                                    <a className="tp-bt-btn" href="tel:123456">
                                        <svg
                                            width="14"
                                            height="19"
                                            viewBox="0 0 14 19"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx="2" cy="2" r="2" fill="#0E63FF" />
                                            <circle cx="7" cy="2" r="2" fill="#0E63FF" />
                                            <circle cx="12" cy="2" r="2" fill="#0E63FF" />
                                            <circle cx="12" cy="7" r="2" fill="#0E63FF" />
                                            <circle cx="12" cy="12" r="2" fill="#0E63FF" />
                                            <circle cx="7" cy="7" r="2" fill="#0E63FF" />
                                            <circle cx="7" cy="12" r="2" fill="#0E63FF" />
                                            <circle cx="7" cy="17" r="2" fill="#0E63FF" />
                                            <circle cx="2" cy="7" r="2" fill="#0E63FF" />
                                            <circle cx="2" cy="12" r="2" fill="#0E63FF" />
                                        </svg>
                                        {isLoggedIn ? (
                                            <div style={{ marginTop: "17px", marginRight: "40px" }}>
                                                <div class="dropdown text-end">
                                                    <a
                                                        href="#"
                                                        class="d-block link-dark text-decoration-none
                        dropdown-toggle"
                                                        id="dropdownUser1"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        <img
                                                            src="https://github.com/mdo.png"
                                                            alt="mdo"
                                                            width="32"
                                                            height="32"
                                                            class="rounded-circle"
                                                        />
                                                    </a>
                                                    <ul
                                                        class="dropdown-menu text-small"
                                                        aria-labelledby="dropdownUser1"
                                                    >
                                                        <li>
                                                            <a class="dropdown-item" href="profile">
                                                                Profile
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#">
                                                                My Orders
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#">
                                                                Raise a ticket
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <hr class="dropdown-divider" />
                                                        </li>
                                                        <li>
                                                            <a
                                                                class="dropdown-item"
                                                                href="#"
                                                                onClick={() => {
                                                                    localStorage.clear(),
                                                                        setIsLoggedIn(false);
                                                                        Router.push("/")
                                                                }}
                                                            >
                                                                Sign out
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        ) : (
                                            <button
                                                className="header-bottom-btn"
                                                onClick={() => setIsActive(true)}
                                            >
                                                LOGIN / REGSITER
                                            </button>
                                        )}
                                    </a>
                                </div>
                                <button
                                    onClick={() => setIsActive(true)}
                                    className="tp-menu-toggle"
                                >
                                    <i className="far fa-bars"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- tp-mobile-header-area end --> */}
            <div className="layout-left-right">
                <div className="header-layout-left theme-bg d-none d-xl-block">
                    <header>
                        <div className="header-customss">
                            <div className="header-left-logo pb-80">
                                <Link href="/">
                                    <img src="/assets/img/logo/sidebar-logo.png" alt="logo" />
                                </Link>
                            </div>
                            <div className="header-left-menu">
                                <nav id="mobile-menu">
                                    <NavMenu num={true} />
                                </nav>
                            </div>
                            <div className="header-left-contact">
                                <span>Make a Call</span>
                                <a href="tel:+9159008855">+9159008855</a>
                            </div>
                        </div>
                    </header>
                </div>
            </div>
            {/* side bar start */}
            <Sidebar isActive={isActive} setIsActive={setIsActive} />
            {/* side bar end */}
        </>
    );
};

export default HeaderThree;
