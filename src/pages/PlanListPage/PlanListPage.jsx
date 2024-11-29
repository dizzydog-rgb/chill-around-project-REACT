import React from "react";
import Aside from "../../components/layout/Aside";

function PlanList() {
  return (
    <React.Fragment>
      <div className="container-fluid planList">
        <div className="row">
          <div className="col-12 col-md-7 d-flex p-0">
            <Aside />
            <div className="planListArea">
              <ul className="cardList p-0"></ul>
              <a
                href="buildPlan.html"
                className="addPlanBtn d-flex justify-content-center"
              >
                <button type="button" className="btn btn-outline-secondary">
                  新增計畫<i className="bi bi-plus"></i>
                </button>
              </a>
            </div>
          </div>

          <div className="d-none d-md-block col-md-5 p-0 mapArea">
            <gmpx-api-loader
              key="AIzaSyCgVtNCe6n8nTdXm-zFidK0uF8kVnzvO2Q"
              solution-channel="GMP_GE_mapsandplacesautocomplete_v1"
            ></gmpx-api-loader>
            <gmp-map
              center="23.75163737835299, 120.95520524708053"
              zoom="8"
              map-id="DEMO_MAP_ID"
            >
              <div
                slot="control-block-start-inline-start"
                className="place-picker-container"
              >
                <gmpx-place-picker placeholder="你想去哪玩?"></gmpx-place-picker>
              </div>
              <gmp-advanced-marker></gmp-advanced-marker>
            </gmp-map>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default PlanList;
