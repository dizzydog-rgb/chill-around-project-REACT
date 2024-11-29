import "./App.scss";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/indexPage/index.jsx";
import SchInfo from "./pages/schInfoPage/schInfo.jsx";
import BuildPlan from "./pages/BuildPlanPage/BuildPlanPage.jsx";
import EditPlan from "./pages/EditPlanPage/EditPlanPage.jsx";
import PlanList from "./pages/PlanListPage/PlanListPage.jsx";

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
      </Routes>
    </Router>
  );
}

export default App;