const Figure = ({ figureClass, src, alt, imageClass }) => {
  return (
    <figure className={figureClass}>
      <img src={src} alt={alt} className={imageClass} />
    </figure>
  );
};

export default Figure;
