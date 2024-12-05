import "./App.scss";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/indexPage/index.jsx";
import BudgetPage from "./pages/BudgetPage/BudgetPage.jsx";
import PopupBudgetPage from "./pages/PopupBudgetPage/PopupBudgetPage.jsx";
import ItemListPage from "./pages/ItemListPage/ItemListPage.jsx";
import PopupItemListPage from "./pages/PopupItemListPage/PopupItemListPage.jsx";
import SchInfo from "./pages/schInfoPage/SchInfo.jsx";
import BuildPlan from "./pages/BuildPlanPage/BuildPlanPage.jsx";
import EditPlan from "./pages/EditPlanPage/EditPlanPage.jsx";
import PlanList from "./pages/PlanListPage/PlanListPage.jsx";
import SearchSite from "./pages/SearchSitePage/searchSitePage.jsx";
import SiteInfo from "./pages/SiteInfoPage/SiteInfoPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<h1>找不到頁面</h1>} />
        <Route path="/schInfo" element={<SchInfo />} />
        <Route path="/bulidPlan" element={<BuildPlan />} />
        <Route path="/editPlan" element={<EditPlan />} />
        <Route path="/planList" element={<PlanList />} />
        <Route path="/searchSite" element={<SearchSite />} />
        <Route path="/siteInfo/:id" element={<SiteInfo />} />
        <Route path="/budget" element={<BudgetPage />} />
        <Route path="/popupbudget" element={<PopupBudgetPage />} />
        <Route path="/itemlist" element={<ItemListPage />} />
        <Route path="/popupitemlist" element={<PopupItemListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
