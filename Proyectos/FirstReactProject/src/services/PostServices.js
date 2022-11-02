import axios from "axios";

export const postDifusion = async (endPoint, object) => {
  axios({
    method: "post",
    url: `http://localhost:3000/${endPoint}`,
    data: object,
  });
};