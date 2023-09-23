import AuthArea from './AuthArea/AuthArea';
import Navigation from '../Navigation/Navigation';
import LogoIcon from '../../images/Svg/LogoIcon';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import AppContext from '../../contexts/AppContext';

const Header = () => {
  const appCtx = useContext(AppContext);
  const location = useLocation();

  return (
    <header
      className={`header ${
        location.pathname !== '/' ? '' : 'header_color_pink'
      }`}
    >
      <LogoIcon />
      {!appCtx.isLoggedIn && <AuthArea />}
      {appCtx.isLoggedIn && <Navigation />}
    </header>
  );
};

export default Header;
