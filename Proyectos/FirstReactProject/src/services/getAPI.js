import axios from 'axios'

export const getAnimal = async (id) => {
    const res = await axios.get(`http://localhost:3000/dogs${id}`);
    return res.data;
}
