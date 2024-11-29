import "./App.scss";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/indexPage/index.jsx";
import SearchSite from "./pages/searchSitePage/searchSitePage.jsx";
import SiteInfo from "./pages/siteInfoPage/SiteInfoPage.jsx";

function App() {
  return (
    // {<>
    //   <div>我是首頁</div>
    //   <button type="button" className="btn btn-primary">
    //     Primary
    //   </button>
    //   <i className="bi bi-6-circle-fill"></i>
    // </>}
    <Router>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/searchSite" element={<SearchSite />} />
      <Route path="/siteInfo/:id" element={<SiteInfo />} />
      <Route path="*" element={<h1>找不到頁面</h1>} />
    </Routes>
  </Router>
  );
}

export default App;
