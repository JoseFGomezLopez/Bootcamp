import axios from "axios";

export const PostContact = async (contact) => {
  axios({
    method: "post",
    url: "http://localhost:8080/contacts",
    data: contact,
  });
};
