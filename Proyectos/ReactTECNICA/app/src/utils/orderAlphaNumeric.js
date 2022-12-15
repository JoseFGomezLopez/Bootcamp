 

export const Sorter = (arr) => {
  return arr
    .filter((item) => item.releaseYear >= 2010)
    .sort((a, b) => (a.title.toLowerCase() <= b.title.toLowerCase() ? -1 : 1))
    .filter((item, i) => i < 20);
};
