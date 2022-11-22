import './updateForm.css';

import { useContext } from 'react';
import { useForm } from 'react-hook-form';

import TableContext from '../../../context/TableContext';
import Button from '../../Button/AgnosticButton';

const UpdateForm = ({ callback }) => {
  const { handleSubmit, register } = useForm();
  const { lista } = useContext(TableContext);

  const update = (values) => {
    UpdateForm(lista, values);
  };

  return (
    <form name="updateForm" className="PopupUpdate" onSubmit={handleSubmit(update)}>
      <div className="figurePopUpNav">
        <span className="figureLinks">
          <span className="spanFigureLink">Perfil</span>
          <span className="spanFigureLink">Cursos</span>
        </span>
        <div className="topButtonUpdateForm">
          <Button className="editButton" text="Cancelar edición" onClick={callback} />
          <input className="saveButton" type="submit" value="Guardar" />
        </div>
      </div>
      <div className="nombreApellidosContainer">
        <div className="nombreContainer">
          <label className="tituloFigurePopUp" htmlFor="name">
            Nombre
          </label>
          <input
            className="nameUpdateInput"
            type="text"
            name="name"
            id="name"
            {...register('name', {
              required: true,
            })}
          />
        </div>
        <div className="apellidosContainer">
          <label className="tituloFigurePopUp" htmlFor="apellidos">
            Apellidos
          </label>
          <input
            className="apellidosUpdateInput"
            name="apellidos"
            id="apellidos"
            {...register('apellidos', {
              required: true,
            })}
          />
        </div>
      </div>
      <label className="tituloFigurePopUp" htmlFor="userName">
        Nombre de Usuario
      </label>
      <input
        className=""
        type="text"
        name="userName"
        id="userName"
        {...register('userName', {
          required: true,
        })}
      />
      <label className="tituloFigurePopUp" htmlFor="email">
        Email
      </label>
      <input
        className="infoPerfil"
        type="text"
        name="email"
        id="email"
        {...register('email', {
          required: true,
        })}
      />
      <label className="tituloFigurePopUp" htmlFor="movil">
        Movil
      </label>
      <input
        className="infoPerfil"
        type="number"
        name="movil"
        id="movil"
        {...register('movil', {
          required: true,
        })}
      />
      <label className="tituloFigurePopUp" htmlFor="image">
        Image
      </label>
      <input
        className="modalBottomButton"
        type="file"
        name="image"
        id="image"
        {...register('image', {
          required: true,
        })}
      />
      <Button text="Cerrar" onClick={callback} className="modalBottomButton" />
    </form>
  );
};

export default UpdateForm;
