import { NavLink } from "react-router-dom";

const NavMenu = ({ isOpened, onClickByLink }) => {

  const handleLinkClick = (e) => {
    return onClickByLink(!isOpened);
  }

  return (
    <div className={`nav-menu ${isOpened && 'nav-menu_active'}`}>
      <nav className="nav-menu__container-links">
        <div className="nav-menu__container-inner-links">
          <div className="flex-row">
            <NavLink onClick={handleLinkClick} className="nav-menu__link" activeClassName="nav-menu__link_current" exact
                     to="/">ПРОФИЛЬ ЛЕЧЕНИЯ
            </NavLink>
            <span className="project-link__icon"/>
          </div>
          <div className="flex-row">
            <NavLink onClick={handleLinkClick} className="nav-menu__link" activeClassName="nav-menu__link_current" exact
                     to="/">ЧЕМ МОГУ ПОМОЧЬ
            </NavLink>
            <span className="project-link__icon"/>
          </div>
        </div>
        <div className="nav-menu__container-inner-links">
          <div className="flex-row">
            <NavLink onClick={handleLinkClick} className="nav-menu__link" activeClassName="nav-menu__link_current"
                     exact
                     to="/">БЛОГ
            </NavLink>
            <span className="project-link__icon"/>
          </div>
          <div className="flex-row">
            <NavLink onClick={handleLinkClick} className="nav-menu__link" activeClassName="nav-menu__link_current"
                     exact
                     to="/">ГДЕ ПРИНИМАЮ
            </NavLink>
            <span className="project-link__icon"/>
          </div>
        </div>
      </nav>
    </div>
  );
}

// ${isOpened && 'nav-menu_active'}

export default NavMenu
