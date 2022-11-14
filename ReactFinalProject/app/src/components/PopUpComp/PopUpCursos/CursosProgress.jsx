import React from 'react';

import Button from '../../Button/AgnosticButton';

const CursosProgress = ({ callback, fechaInscripcion }) => {
  return (
    <div className="PopupInfo">
      <label htmlFor="curso1">Curso 01</label>
      <progress id="curso1" min="0" max="100" value="90" />
      <span className="spanFigureLink">{fechaInscripcion}</span>
      <label htmlFor="curso2">Curso 02</label>
      <progress id="curso2" min="0" max="100" value="10" />
      <span className="spanFigureLink">{fechaInscripcion}</span>
      <label htmlFor="curso3">Curso 03</label>
      <progress id="curso3" min="0" max="100" value="80" />
      <span className="spanFigureLink">{fechaInscripcion}</span>
      <label htmlFor="curso4">Curso 04</label>
      <progress id="curso4" min="0" max="100" value="30" />
      <span className="spanFigureLink">{fechaInscripcion}</span>
      <label htmlFor="curso5">Curso 04</label>
      <progress id="curso5" min="0" max="100" value="50" />
      <span className="spanFigureLink">{fechaInscripcion}</span>
      <Button onClick={callback} text="Cerrar" />
    </div>
  );
};

export default CursosProgress;
