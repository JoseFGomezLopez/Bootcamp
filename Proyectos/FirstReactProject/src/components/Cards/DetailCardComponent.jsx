import React from "react";

const DetailCardComponent = ({animal}) => {
  return (
    <figure>
      <h2>{animal.name}</h2>
     {/* <h2>{animal.contactTelephone}</h2> */}
      <img src={animal.image} alt={animal.name} />
      <h3>{animal.description}</h3>
    </figure>
  );
};

export default DetailCardComponent;
