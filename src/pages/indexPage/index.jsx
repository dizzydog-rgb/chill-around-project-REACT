import React from "react";
import Header from "../../components/layout/SearchHeader_trans";
import SwiperCarousel from "./components/SwiperCarousel";
import TagButtons from "./components/TagButtons";

function Index() {
    return (
        <div className="Index container-fluid p-0">
         <Header/>

          <nav className="tag text-center m-0" id="tag-container">
          <TagButtons/>
          </nav>
    
          {/* <!-- Swiper --> */}
          <div className="swiper mySwiperIndex swiper-h">
            <div className="swiper-wrapper" id="hero-container">
            <SwiperCarousel/>
            </div>
            <div className="swiper-pagination"></div>
          </div>
      </div>
        
    );
  }

export default Index;