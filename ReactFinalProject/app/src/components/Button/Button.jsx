const ButtonNav = ({ className, text, src, onClick }) => {
  return (
    <button type="button" className={className} onClick={onClick}>
      <img src={src} alt={text} />
      {text}
    </button>
  );
};

export default ButtonNav;
