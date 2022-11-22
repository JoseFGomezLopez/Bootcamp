import React from 'react';

import Button from '../../Button/AgnosticButton';
import PopupCursos from '../PopUpCursos/PopupCursos';
import PopUpUpdate from '../PopUpUpdate/PopUpUpdate';

const FigurePopup = ({ name, userName, movil, email, src, callBack }) => {
  return (
    <figure className="PopupInfo">
      <div className="figurePopUpNav">
        <span className="figureLinks">
          <span className="spanFigureLink">Perfil</span>
          <PopupCursos className="spanFigureLink" text="Cursos" />
        </span>
        <PopUpUpdate
          className="modalTopButton"
          text="Editar"
          name={name}
          userName={userName}
          email={email}
          movil={movil}
        />
      </div>
      <img src={src} alt="foto de perfil" className="imagePopUpInfo" />
      <div>
        <span className="tituloFigurePopUp">
          <img
            src="public/PopupVectors/user.png"
            className="imgPopup firstImagePopup"
            alt="nombre perfil"
          />
          Nombre y Apellidos
          <p className="infoPerfil">{name}</p>
          <span className="tituloFigurePopUp">Nombre de usuario</span>
          <p className="infoPerfil">{userName}</p>
        </span>
      </div>
      <div>
        <img
          src="public/PopupVectors/Vector (8).png"
          className="imgPopup"
          alt="email perfil"
        />
        <span className="tituloFigurePopUp">Email</span>
        <p className="infoPerfil">{email}</p>
      </div>
      <div>
        <img
          src="public/PopupVectors/vector (9).png"
          className="imgPopup"
          alt="telefono perfil"
        />
        <span className="tituloFigurePopUp">Móvil</span>
        <p className="infoPerfil">{movil}</p>
      </div>
      <div>
        <img
          src="public/PopupVectors/vector (10).png"
          className="imgPopup"
          alt="Fecha de inscripción"
        />
        <span className="tituloFigurePopUp">Fecha de inscripción</span>
        <p className="infoPerfil">8/10/1983</p>
      </div>
      <div className="buttonContainer">
        <Button text="Cerrar" className="modalBottomButton" onClick={() => callBack()} />
      </div>
    </figure>
  );
};

export default FigurePopup;
