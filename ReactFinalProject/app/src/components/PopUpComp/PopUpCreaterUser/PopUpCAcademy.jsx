import { Popup } from 'reactjs-popup';

import CreateForm from '../../CreateForm/CreateForm';

const PopUpCreaterAcademy = ({ inputClassName, className, text }) => {
  return (
    <Popup trigger={<button className={className}>{text}</button>} modal nested>
      {(close) => <CreateForm className={inputClassName} callback={close} />}
    </Popup>
  );
};

export default PopUpCreaterAcademy;
