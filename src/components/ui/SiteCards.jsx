import React, { useEffect, useState } from "react";
import axios from "axios";
import AddSiteModal from "./AddSiteModal";

const SiteCards = ({ emailId, token }) => {
  const [sites, setSites] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedSite, setSelectedSite] = useState(null);

  useEffect(() => {
    fetchSites();
  }, []);

  const fetchSites = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/schInfo/siteinfo"
      );
      setSites(data);
    } catch (error) {
      console.error("無法取得卡片的資料:", error);
    }
  };

  // const handleAddToSchedule = (site) => {
  //   if (!token) {
  //     alert('請先登入');
  //     window.location.href = 'index.html';
  //     return;
  //   }
  //   setSelectedSite(site);
  //   setShowModal(true);
  // };
  const handleClick = (site_id) => {
    window.location.href = `/siteInfo/${site_id}`;
  };

  const handleAddToSchedule = (e, site) => {
    e.stopPropagation(); // 阻止事件冒泡
    setSelectedSite(site);
    setShowModal(true);
    console.log('selectedSite:', site); // 檢查選中的景點
    console.log('showModal:', showModal); // 檢查showModal狀態
  };

  return (
    <>
      {sites.slice(0, 4).map((site) => (
        <div className="col-md-3 p-0 m-0" key={site.site_id}>
          <div
            className="SiteCard card bg-primary"
            onClick={() => handleClick(site.site_id)}
          >
            <div className="SchcardImage">
              <img
                src={`./public/images/searchSite/${site.photo_one}`}
                alt=""
              />
            </div>
            <div className="cardOverlay">
              <h5 className="card-title">{site.site_name}</h5>
              <p className="card-subtitle">{site.short_site_add}</p>
            </div>
            <div className="btnOverlay">
              <button
                type="button"
                className="btn btn-primary"
                onClick={(e) => handleAddToSchedule(e, site)}
              >
                加入行程
              </button>
              <AddSiteModal
                show={showModal}
                onClose={() => setShowModal(false)}
                // emailId={emailId}
                // token={token}
                siteData={selectedSite}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SiteCards;
