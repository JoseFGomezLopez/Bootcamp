
import { errorComponent } from '../../app/components/Error/error'

export const quizApi = async() => {
    try{
    const res = await fetch('http://localhost:3000/quiz');
    const data = await res.json();
    return data
}catch(error){
    errorComponent();
}
}