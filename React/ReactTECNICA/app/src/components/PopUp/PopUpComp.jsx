import "./Popup.css";

import { Popup } from "reactjs-popup";
import FigureCard from "../Figures/FigureCard";

import React from "react";

const PopUpComp = ({ title, description, image, releaseYear }) => {
  return (
    <Popup trigger={<button className="button"> {title} </button>} modal nested>
      {(close) => (
        <div className="PopUp">
          <FigureCard
            className="figureCardPopUp"
            title={title}
            description={description}
            image={image}
            releaseYear={releaseYear}
          />
          <button onClick={(e) => close()}>Close</button>
        </div>
      )}
    </Popup>
  );
};

export default PopUpComp;
