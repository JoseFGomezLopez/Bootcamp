import React from 'react';
import { Popup } from 'reactjs-popup';

import CursosProgress from './CursosProgress';

const PopupCursos = ({ text, className }) => {
  return (
    <Popup trigger={<span className={className}>{text}</span>} modal nested>
      {(close) => <CursosProgress callback={close} />}
    </Popup>
  );
};

export default PopupCursos;
