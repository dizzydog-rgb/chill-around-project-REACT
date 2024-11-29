// src/pages/siteInfoPage/siteInfo.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from "../../components/layout/searchHeader_trans";


const SiteInfo = () => {
    const { id } = useParams();
    const [siteDetails, setSiteDetails] = useState(null); // 保存景點詳細訊息
    // const params = new URLSearchParams(window.location.search); // 獲取ＵＲＬ參數
    // const siteId = params.get('id'); // 假設URL包含id=1

    useEffect(() => {
        const fetchSiteInfo = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/site/siteinfo/${id}`);
                console.log('景點資料:', response.data);
                setSiteDetails(response.data); // 更新狀態獲取
            } catch (error) {
                console.error('無法獲取景點資料:', error);
            }
        };

        fetchSiteInfo(); //調用函數獲取數據
    }, [id]); // 包含 siteId

    const changeImage = (image) => {
        document.getElementById("mainImage").src = image; // 切換圖片
    };

    if (!siteDetails) {
        return <p>未找到相關景點資訊</p>; // 沒讀到資料時的提示
    }

    const { site_id, site_name, site_phone, site_add, site_opentime, site_web, site_info, photo_one, photo_two, photo_three, photo_four } = siteDetails;

    return (
        
        <div className="siteInfoPage container-fluid p-0" id="siteInfoPage">
            <Header/>
            {/* 上方大圖 */}
            <div className="topImage container-fluid p-0 bg-primary" id="topImage">
                <img
                    src={`/images/searchSite/${photo_one}`}
                    className="img-fluid"
                    alt="大圖"
                />
            </div>

            {/* 地點訊息 */}
            <section className="siteInfo container row" id="siteInfo">
                {/* 景點標題 */}
                <div className="m-3 container d-flex justify-content-between">
                    <h1 className="text-nowrap fs-2">{site_name}</h1>
                    <div className="divider1"></div>
                </div>

                {/* 手機版輪播圖 */}
                <div id="carouselExample" className="carousel slide d-md-none col-md-6 order-md-1" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="siteCarouselItem carousel-item active">
                            <img src={`/images/searchSite/${photo_one}`} className="d-block w-100" alt="圖片 1" />
                        </div>
                        <div className="siteCarouselItem carousel-item">
                            <img src={`/images/searchSite/${photo_two}`} className="d-block w-100" alt="圖片 2" />
                        </div>
                        <div className="siteCarouselItem carousel-item">
                            <img src={`/images/searchSite/${photo_three}`} className="d-block w-100" alt="圖片 3" />
                        </div>
                        <div className="siteCarouselItem carousel-item">
                            <img src={`/images/searchSite/${photo_four}`} className="d-block w-100" alt="圖片 4" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                {/* 電腦版圖片 */}
                <div className="leftImage col-md-6 order-md-1 d-none d-md-block">
                    <div className="container p-0">
                        <div className="row">
                            <div className="mainImage col-md-12 text-center">
                                <img
                                    id="mainImage"
                                    src={`/images/searchSite/${photo_one}`}
                                    className="img-fluid"
                                    alt="主圖"
                                />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="smallImage col-md-3 text-center">
                                <img
                                    src={`/images/searchSite/${photo_one}`}
                                    className="p-0 thumbnail img-thumbnail"
                                    alt="縮圖1"
                                    onClick={() => changeImage(`/images/searchSite/${photo_one}`)}
                                />
                            </div>
                            <div className="smallImage col-md-3 text-center">
                                <img
                                    src={`/images/searchSite/${photo_two}`}
                                    className="p-0 thumbnail img-thumbnail"
                                    alt="縮圖2"
                                    onClick={() => changeImage(`/images/searchSite/${photo_two}`)}
                                />
                            </div>
                            <div className="smallImage col-md-3 text-center">
                                <img
                                    src={`/images/searchSite/${photo_three}`}
                                    className="p-0 thumbnail img-thumbnail"
                                    alt="縮圖3"
                                    onClick={() => changeImage(`/images/searchSite/${photo_three}`)}
                                />
                            </div>
                            <div className="smallImage col-md-3 text-center">
                                <img
                                    src={`/images/searchSite/${photo_four}`}
                                    className="p-0 thumbnail img-thumbnail"
                                    alt="縮圖4"
                                    onClick={() => changeImage(`/images/searchSite/${photo_four}`)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* 右側資訊 */}
                <div className="rightInfo container col-md-6 order-md-2 p-0">
                    <div className="info-text">
                        <p>電話：{site_phone}</p>
                        <p>地址：{site_add}</p>
                        <div className="d-flex">
                            <div>
                                <p>開放時間：</p>
                            </div>
                            <div className="opentime">
                                <p>{
                                    site_opentime.split('\n').map((line, index) => (
                                        <React.Fragment key={index}>
                                            {line}
                                            <br />
                                        </React.Fragment>
                                    ))
                                }</p>
                            </div>
                        </div>
                        <div className="infoWeb">
                            <p>官方網站：</p>
                            <a href={site_web} target="_blank" rel="noopener noreferrer">{site_web}</a>
                        </div>
                    </div>
                    <div className="addBtn text-end">
                        <button
                            type="button"
                            className="addBtn btn btn-primary loadSchedule"
                            data-site-id={site_id}
                            data-site-name={site_name}
                            data-site-add={site_add}
                            data-site-info={site_info}
                            data-site-img={photo_one}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                        >
                            加入行程
                        </button>
                    </div>
                </div>

                {/* 下方介绍 */}
                <div className="container col-md-12 order-md-3">
                    <h2 className="detailsTitle">景點介紹</h2>
                    <p className="detailsInfo">{site_info}</p>
                </div>
            </section>
        </div>
    );
};

export default SiteInfo;

