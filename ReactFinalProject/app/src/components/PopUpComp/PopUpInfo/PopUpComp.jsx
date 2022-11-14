import './popUpInfo.css';

import React from 'react';
import { Popup } from 'reactjs-popup';

import FigurePopup from '../FigurePopup/FigurePopup';

const PopUpComp = ({ name, userName, email, movil, src }) => {
  return (
    <Popup
      trigger={<img src="./public/vectoresPages/Vector (7).png" alt="info" />}
      modal
      nested
    >
      {(close) => (
        <FigurePopup
          name={name}
          userName={userName}
          email={email}
          movil={movil}
          src={src}
          callBack={close}
        />
      )}
    </Popup>
  );
};

export default PopUpComp;
