import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SwiperCarousel = () => {
  const [heroData, setHeroData] = useState([]);

  useEffect(() => {
    // 載入輪播圖資料
    axios.get('http://localhost:8080/heroCarousel')
      .then(response => {
        setHeroData(response.data);
      })
      .catch(error => {
        console.error('無法獲取輪播圖資料:', error);
      });
  }, []);

  useEffect(() => {
    // 在資料加載後初始化 Swiper
    if (heroData.length > 0) {
      new Swiper(".mySwiperIndex", {
        spaceBetween: 0,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
          delay: 6000,
          disableOnInteraction: false,
        },
      });
    }
  }, [heroData]);

  return (
    <>
      {/* Swiper 容器 */}
          {heroData.map((hero) => (
            <div className="swiper-slide" key={hero.carousel_id}>
              <div
                className="hero-image"
                style={{
                  backgroundImage: `linear-gradient(
                    rgba(0, 0, 0, 0.5),
                    rgba(0, 0, 0, 0.5)
                  ), url('./public/images/index/${hero.carousel_Img}')`,
                }}
              >
                <div className="container-fluid p-0">
                  <div className="row">
                    <div className="col-md-6 hero-text">
                      <h1>{hero.carousel_tw}</h1>
                      <p>{hero.carousel_en}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
    </>
  );
};

export default SwiperCarousel;
