import { getData } from "../services/services";



const pointer = "ancientGreece";

export const setUpCardAncientAge = async() => {
    return await getData(pointer);
    }






