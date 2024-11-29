import "./App.scss";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/indexPage/Index.jsx";
import SchInfo from "./pages/schInfoPage/SchInfo.jsx";
import BuildPlan from "./pages/BuildPlanPage/BuildPlanPage.jsx";
import EditPlan from "./pages/EditPlanPage/EditPlanPage.jsx";
import PlanList from "./pages/PlanListPage/PlanListPage.jsx";
import SearchSite from "./pages/SearchSitePage/index.js";
import SiteInfo from "./pages/SiteInfoPage/SiteInfoPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/schInfo" element={<SchInfo/>} />
        <Route path="*" element={<h1>找不到頁面</h1>} />
        <Route path="/bulidPlan" element={<BuildPlan />} />
        <Route path="/editPlan" element={<EditPlan />} />
        <Route path="/planList" element={<PlanList />} />
        <Route path="/searchSite" element={<SearchSite />} />
        <Route path="/siteInfo/:id" element={<SiteInfo />} />
      </Routes>
    </Router>
  );
}

export default App;