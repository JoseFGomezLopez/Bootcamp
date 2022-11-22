import './header.css';

import React from 'react';
import { useNavigate } from 'react-router-dom';

import AlarmasHeader from './AlarmsHeader/AlarmasHeader';
import InputHeader from './InputHeader/InputHeader';
import LogoHeader from './LogoHeader/LogoHeader';

// eslint-disable-next-line react/display-name
const Header = React.memo(() => {
  const navigation = useNavigate();
  const logOut = () => {
    navigation('/');
  };

  return (
    <header className="header">
      <div className="logoHeaderInput">
        <LogoHeader />
        <InputHeader />
      </div>
      <AlarmasHeader callback={logOut} />
    </header>
  );
});

export default Header;
