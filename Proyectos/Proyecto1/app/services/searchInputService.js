import { getData } from "./services";

export const searchFilter = (id, enpoint) => {
  const input = document.querySelector("${id}");
  getData(enpoint);
  const filtering = (item) => {
    const { name, image } = item;
    const searched = name.toLowerCase().includes(id.value.toLowerCase());
    if (name == searched) {
      return {
        name,
        image,
      };
    }
  };
};
