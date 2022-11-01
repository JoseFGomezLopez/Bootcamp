import axios from "axios";

export const PostContact = async (contact) => {
  axios({
    method: "post",
    url: "http://localhost:3000/contacts",
    data: contact,
  });
};
