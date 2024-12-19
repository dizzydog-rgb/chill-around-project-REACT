import React, { useState, useEffect} from 'react';
import { Link } from "react-router-dom";
// import LoginModal from './LoginModal';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [showModal, setShowModal] = useState(false);

    const [isDarkText, setIsDarkText] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // 找到 header 下方的元素
            const header = document.querySelector("header");
            const container = document.querySelectorAll('.container'); 
            let currentBgColor = "rgb(255, 255, 255)"; // 預設白色

            container.forEach((container) => {
                const rect = container.getBoundingClientRect();
                if (rect.top <= header.clientHeight && rect.bottom >= 0) {
                    // 取得該 section 的背景色
                    currentBgColor = window.getComputedStyle(container).backgroundColor;
                }
            });

            // 判斷顏色亮度
            setIsDarkText(!isLightColor(currentBgColor)); 
        };

        // 檢測背景顏色是否偏亮
        const isLightColor = (rgbColor) => {
            // 將 RGB 轉為亮度
            const rgb = rgbColor.match(/\d+/g);
            const luminance =
                0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]; // 計算亮度 (YIQ公式)
            return luminance > 128; // 超過 128 算偏亮
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    
    // UseEffect to update login status based on token
    useEffect(() => {
        if (token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [token]);

    // Toggle modal visibility
    const toggleModal = () => {
        setShowModal(!showModal);
    };

    // Handle logout
    // const handleLogout = () => {
    //     if (isLoggedIn && window.confirm('您確定要登出嗎？')) {
    //         localStorage.removeItem('token');
    //         setIsLoggedIn(false);
    //         setToken(null);
    //         alert("登出成功!");
    //         window.location.href = 'index.html';
    //     }
    // };

 
    const renderNavLinks = () => {
        if (isLoggedIn) {
            return (
                <>
                    <li className="nav-item my-2">
                        <a href="member_personaldata.html" className="nav-link">會員中心</a>
                    </li>
                    <li className="nav-item my-2">
                        <a href="planList.html" className="nav-link">我的計畫</a>
                    </li>
                </>
            );
        }
        return null;
    };

    return (
        <header className={`Trans container-fluid p-0 `}>
            <nav className="searchNav navbar navbar-expand-md navbar-light ps-4 pe-4">
                <a className="navbar-brand" href="/">
                    <img src="/public/images/logo/chillAround_logo_01.png" alt="Logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 id="offcanvasNavbarLabel" className="offcanvas-title">選單</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className={`offcanvas-body  ${isDarkText ? "light-theme" : "dark-theme"}`}>
                        <ul className="navbar-nav nav-underline me-auto" style={{ fontSize: '0.8rem' }}>
                            <li className="nav-item my-2">
                                <Link to="/" className="nav-link">首頁</Link>
                            </li>
                            <li className="nav-item my-2">
                                <Link to="/schInfo"  className="nav-link">行程推薦</Link>
                            </li>
                            <li className="nav-item my-2">
                                <Link to="/searchSite" className="nav-link">景點推薦</Link>
                            </li>
                            <li className="nav-item my-2"><a href="test.html" className="nav-link">專屬旅程小測驗</a></li>
                            <li className="nav-item my-2">
                                <Link to="/foodMap" className="nav-link">美食地圖</Link>
                            </li>
                            {renderNavLinks()}
                        </ul>
                        <ul id="searchNavBtn" className="navbar-nav d-flex align-items-center">
                            <li className="nav-item d-flex p-2">
                                {isLoggedIn ? (
                                    <button id="logoutBtn" className="btn text-white" onClick={handleLogout}>會員登出</button>
                                ) : (
                                    <button id="loginBtn" className="btn text-white" onClick={toggleModal}>登入</button>
                                )}
                            </li>
                            <li className="nav-item d-flex p-2">
                                <Link to="/bulidPlan"  ><i className="bi bi-plus-circle"></i></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* {showModal && <LoginModal toggleModal={toggleModal} />} */}
        </header>
    );
};

export default Header;
