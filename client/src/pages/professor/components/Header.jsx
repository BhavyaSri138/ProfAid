const Header = ({ professorEmail, logoutHandler }) => (
  <div className="d-flex justify-content-between align-items-center mb-4 p-3 rounded shadow-sm bg-white">
    <h3 style={{ color: "#4B3869", fontWeight: "600", margin: 0 }}>
      ProfAid – Professor Dashboard
    </h3>
    <div>
      <span style={{ color: "#4B3869", marginRight: "15px", fontWeight: "500" }}>
        {professorEmail}
      </span>
      <button onClick={logoutHandler} className="btn btn-outline-secondary btn-sm">
        Logout
      </button>
    </div>
  </div>
);

export default Header;
