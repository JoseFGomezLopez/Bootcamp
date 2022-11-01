import axios from "axios";

export const PostContact = async (contact) => {
  axios({
    method: "post",
    url: "https://proyectos-firstreactproject-server.onrender.com/contacts",
    data: contact,
  });
};
