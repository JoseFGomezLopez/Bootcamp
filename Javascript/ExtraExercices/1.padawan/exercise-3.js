
const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
  ];

  const smallDurationMovies = movies.filter((movie) => movie.durationInMinutes < 100)
  const mediumDurationMovies = movies.filter((movie) => movie.durationInMinutes > 100 && movie.durationInMinutes <= 200);
  const largeDurationMovies = movies.filter((movie) => movie.durationInMinutes > 200);

  console.log(smallDurationMovies);
  console.log(mediumDurationMovies);
  console.log(largeDurationMovies);