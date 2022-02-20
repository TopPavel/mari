import { NavLink } from "react-router-dom";

const NavMenuInline = ({ menuIsActive, handleMenuClick }) => {

  const handleLinkClick = (e) => {
    return handleMenuClick(!menuIsActive);
  }

  return (
    <nav className="nav-menu__inline-block">
      <button className={`nav-menu-btn ${menuIsActive && 'nav-menu-btn_active'}`} onClick={handleMenuClick}>
        <span className="nav-icon"/>
      </button>
    </nav>
  );
}

export default NavMenuInline
