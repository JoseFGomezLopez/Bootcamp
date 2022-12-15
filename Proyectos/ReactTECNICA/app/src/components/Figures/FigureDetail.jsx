const FigureDetail = ({className,releaseYear,description,title,image}) => {
  return (
    <section className={className}>
      <h1>{title}</h1>
      <h2>Sinopsis</h2>
      <h3>{description}</h3>
      <h3>{releaseYear}</h3>
    </section>
  )
}

export default FigureDetail