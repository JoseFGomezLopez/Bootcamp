
import { errorComponent } from '../../app/components/Error/error'


export const quizApi = async() => {
    try{
                   // en web : https://apphubgames.onrender.com
    const res = await fetch('https://apphubgames.onrender.com/quiz');
    const data = await res.json();
    
    return data
}catch(error){
    errorComponent();
}
}
