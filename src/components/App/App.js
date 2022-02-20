import logo from '../../images/logo.svg';
import facebook from '../../images/facebook.svg';
import inst from '../../images/inst.svg';
import telegram from '../../images/telegram.svg';
import '../../App.css';
import Page from "../Page/Page";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import NavMenu from "../NavMenu/NavMenu";
import StartInfo from "../StartInfo/StartInfo";

function App() {
  const [isOpenedMenu, setIsOpenedMenu] = useState();

  useEffect(() => {
    const handleCloseMenu = (event) => {
      if (event.key === 'Escape') {
        handleMenuClose();
      }
    }

    if (isOpenedMenu) {
      document.addEventListener('click', handleMenuCloseByOverlay);
      document.addEventListener('keydown', handleMenuClose);
    }

    return () => {
      document.removeEventListener('keydown', handleMenuClose);
      document.removeEventListener('click', handleMenuCloseByOverlay);
    }

  }, [isOpenedMenu]);

  const handleMenuCloseByOverlay = (e) => {
    if (!Array.from(e.target.classList).some((el) => el.startsWith('nav-menu'))) {
      handleMenuClose();
    }
  }

  const handleMenuClose = (e) => {
    setIsOpenedMenu(false);
  }

  const handleMenuClick = (value) => {
    setIsOpenedMenu(value);
  }

  return (
    <Page>
      <Header
        logo={logo}
        faceBook={facebook}
        inst={inst}
        telegram={telegram}
        menuIsActive={isOpenedMenu}
        onClickMenu={handleMenuClick}
      />
      <main>
      <StartInfo/>
      </main>
      <NavMenu isOpened={isOpenedMenu} onClickByLink={handleMenuClick}/>
    </Page>
  );
}

export default App;
