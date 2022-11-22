import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export const postData = async (endpoint, item) => {
  item = { ...item, id: uuidv4() };
  axios({
    method: 'post',
    url: `http://localhost:3000/${endpoint}`,
    data: item,
  });
};

export const updateData = async (endpoint, id, item) => {
  axios({
    method: 'put',
    url: `http://localhost:3000/${endpoint}/${item.id}`,
    data: item,
  });
};
