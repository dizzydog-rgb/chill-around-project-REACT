import React from "react";
// import "../../styles/page/";  // 引入CSS檔案
// import $ from "jquery";  // 如果需要用到jQuery，這樣引入

function BudgetPage() {
    return (
        <div className="container-fluid">
            <div className="row d-flex">
                <div className="col-md-1 col-2 p-0 allcolume">
                    <div className="leftbarDiv">
                        {/* 假設這是布局的 sidebar 會用到外部組件 */}
                        {/* <Aside /> */}
                    </div>
                </div>
                <div className="col-md-8 col-6 p-0 allcolume">
                    <div className="text-white mtopDiv">
                        <div className="circle-background"></div>
                        <span id="budgetTitle">預算清單</span>
                        <a href="./editPlan.html">返回編輯計畫<br /></a>
                        <button className="increaseBtn">增加+</button>
                    </div>
                    <div className="historyDiv">
                        <div className="dayHistory">
                            <span className="historyDate">2024/12/13</span>
                            <div className="historyContent">
                                <img src="../assets/images/Budget_Item/Items/clothes.png" alt="clothes" />
                                <span className="leftCategory">住宿 飯店</span>
                                <span className="unpaid">未付 </span>
                                <span className="rightMoney">$5000</span>
                            </div>
                            <div className="historyContent">
                                <img src="../assets/images/Budget_Item/Items/clothes.png" alt="clothes" />
                                <span className="leftCategory">交通 高鐵</span>
                                <span className="unpaid">未付 </span>
                                <span className="rightMoney">$5000</span>
                            </div>
                        </div>
                        <div className="dayHistory">
                            <span className="historyDate">2024/12/12</span>
                            <div className="historyContent">
                                <img src="../assets/images/Budget_Item/Items/clothes.png" alt="clothes" />
                                <span className="leftCategory">住宿 飯店</span>
                                <span className="unpaid">未付 </span>
                                <span className="rightMoney">$5000</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-4 p-0 allcolume">
                    <div className="text-white rightbarDiv">
                        <div className="ringProtect">
                            <div className="circle-ring">
                                <span>NT $1500</span>
                                <span>Total cost</span>
                            </div>
                            <div className="paid">
                                <div>
                                    <span>未付金額</span>
                                    <br />
                                    <span>NT$1500</span>
                                </div>
                                <div>
                                    <span>已付金額</span>
                                    <br />
                                    <span>NT$1500</span>
                                </div>
                            </div>
                        </div>
                        <div className="categoryDiv">
                            <div className="categoryHistory">
                                <img src="../assets/images/Budget_Item/Items/clothes.png" alt="clothes" />
                                <span>住宿</span>
                                <span className="Money">NT$ 5000</span>
                            </div>
                            <div className="categoryHistory">
                                <img src="../assets/images/Budget_Item/Items/clothes.png" alt="clothes" />
                                <span>食物</span>
                                <span className="Money">NT$ 5000</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BudgetPage;