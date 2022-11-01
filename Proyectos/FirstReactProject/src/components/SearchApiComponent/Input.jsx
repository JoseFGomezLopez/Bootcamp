import './input.css'
import { useEffect, useState } from "react";
import { getApis } from "../../services/getServices";
import FirstCard from '../Cards/FirstCard'

const Input = () => {
  const [contactName, setContactName] = useState('');
  const [contactPhone,setContactPhone] = useState(0)

  return (
    <div className="searcherContainer">
      <input
        className="inputSearchComp"
        type="text"
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className="buttonSearchComp"
        type="button"
        >
        
      </button>
    </div>
  );
};

export default Input;
