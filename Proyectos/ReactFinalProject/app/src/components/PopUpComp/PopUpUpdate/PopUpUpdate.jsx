import { Popup } from 'reactjs-popup';

import UpdateForm from '../UpDateForm/UpdateForm';

const PopUpUpdate = ({ className, text, name, userName, email, movil }) => {
  return (
    <Popup trigger={<button className={className}>{text}</button>} modal nested>
      {(close) => (
        <UpdateForm
          name={name}
          userName={userName}
          email={email}
          movil={movil}
          callback={close}
        />
      )}
    </Popup>
  );
};

export default PopUpUpdate;
