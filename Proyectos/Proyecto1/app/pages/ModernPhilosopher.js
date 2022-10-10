import { getData } from "../services/services";

const pointer = "ModerAge";

export const setUpCardModernAge = async() => {
    return await getData(pointer);
    }