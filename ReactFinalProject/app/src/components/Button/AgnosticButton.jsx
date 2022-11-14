const Button = ({ className, text, onClick }) => {
  return (
    <button type="button" className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
