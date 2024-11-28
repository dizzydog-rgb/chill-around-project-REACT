function Aside() {
  return (
    <aside className="planAside">
      <a href="index.html" className="logo">
        <img
          className="p-2"
          src="images/logo/chillAround_logo_01.png"
          alt="logo"
        />
      </a>

      <ul className="navbar">
        <a href="planList.html">
          <li>
            <i className="bi bi-journal-bookmark"></i>
            <h4>我的計畫</h4>
          </li>
        </a>
        <a href="Budget.html">
          <li>
            <i className="bi bi-coin"></i>
            <h4>預算清單</h4>
          </li>
        </a>
        <a href="itemList.html">
          <li>
            <i className="bi bi-backpack2"></i>
            <h4>物品清單</h4>
          </li>
        </a>
        <a href="member_personaldata.html">
          <li>
            <i className="bi bi-person-circle"></i>
            <h4>會員中心</h4>
          </li>
        </a>
      </ul>
    </aside>
  );
}

export default Aside;
