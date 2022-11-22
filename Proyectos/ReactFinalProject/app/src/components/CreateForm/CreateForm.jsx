import './createForm.css';

import { useContext } from 'react';
import { useForm } from 'react-hook-form';

import TableContext from '../../context/TableContext';
import { postData } from '../../services/postData.js';
import Button from '../Button/AgnosticButton';

const CreateForm = ({ callback }) => {
  const { handleSubmit, register } = useForm();
  const { lista, triggerBoolean, setTriggerBoolean } = useContext(TableContext);

  const post = (values) => {
    postData(lista, values);
    setTriggerBoolean(!triggerBoolean);
  };
  return (
    <form className="createrForm" onSubmit={handleSubmit(post)}>
      <input type="submit" value="Crear" />
      <label htmlFor="name">Nombre y Apellidos</label>
      <input
        type="text"
        id="name"
        name="name"
        className="inputNameCreateForm"
        {...register('name', {
          required: true,
          minLength: 3,
          pattern: /[A-Za-z]/,
          validate: () => true,
        })}
      />

      <label htmlFor="userName">Nombre de usuario</label>
      <input
        type="text"
        id="userName"
        name="userName"
        className="inputNameCreateForm"
        {...register('userName', {
          required: true,
          minLength: 3,
          pattern: /[A-Za-z]/,
          validate: () => true,
        })}
      />
      <label htmlFor="email">E-mail</label>
      <input
        type="email"
        id="email"
        name="email"
        className="inputNameCreateForm"
        {...register('email', {
          required: true,
          minLength: 3,
          pattern: /[A-Za-z]/,
          validate: () => true,
        })}
      />
      <label htmlFor="movil">Movil</label>
      <input
        type="number"
        id="movil"
        name="movil"
        className="inputNameCreateForm"
        {...register('movil', {
          required: true,
          minLength: 3,
          pattern: /[0-9]{9,9}/,
          validate: () => true,
        })}
      />
      <label htmlFor="image">Foto</label>
      <input
        type="url"
        id="image"
        name="image"
        className="inputNameCreateForm"
        {...register('image', {
          required: false,
          minLength: 3,
          pattern: /[A-Za-z]/,
        })}
      />
      <Button text="Cerrar" onClick={callback} />
    </form>
  );
};

export default CreateForm;
