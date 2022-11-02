const ContactCard = ({ name, tel, mail }) => {
  return (
    <figure className="figure">
      <h2>{name}</h2>
      <h2>{tel}</h2>
      <h2>{mail}</h2>
    </figure>
  );
};

export default ContactCard;
