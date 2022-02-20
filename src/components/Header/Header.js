import NavMenuInline from "../NavMenu/NavMenuInline";

const Header = ({logo, faceBook, telegram, inst, menuIsActive, onClickMenu}) => {

  const handleMenuClick = (e) => {
    return onClickMenu(!menuIsActive);
  }

  return (
    <header className="header">
      <NavMenuInline menuIsActive={menuIsActive} handleMenuClick={handleMenuClick}/>
      <img src={logo} alt="logo" className="logo"/>
      <nav className="header__nav">
        <ul className="header__nav__social">
          <li className="social__icon">
            <a href="https://www.facebook.com/maria.lukina.58" className="social-link" rel="noopener" target={"_blank"}>
              <img src={faceBook} alt="logo" className="logo"/>
            </a>
          </li>
          <li className="social__icon">
            <a href="https://www.instagram.com/maria.lukina.v" className="social-link" rel="noopener" target={"_blank"}>
              <img src={inst} alt="logo" className="logo"/>
            </a>
          </li>
          <li className="social__icon">
            <a href="https://t.me/lu_mary" className="social-link" rel="noopener" target={"_blank"}>
              <img src={telegram} alt="logo" className="logo"/>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header
