import './quizNeoStyle.css'
import { buttonComponent } from "../../components/Buttons/buttonComponent";
import { playRoom } from "../playRoom/playRoom";
import { user } from "../../utils/Home/createUser";
import { parragraphC } from "../../components/Parragraph/parragraphComponent";
import { divComp } from "../../components/Div/divComponent";
import { randomColor } from '../../utils/Quiz/colorQuiz';
import { quizInit} from '../../utils/Quiz/quizFunction'
import { quizApi } from '../../services/quizService';
import { parragraphComponentId } from '../../components/Parragraph/parragraphComponentId';

export const getQuiz = async() => {

    const divContainer = document.querySelector('#app');
    divContainer.innerHTML='';
    buttonComponent(divContainer,'reloadButtonQuiz','Home','Play Room','click',(ev)=>playRoom());
    parragraphC(divContainer,'parragraphQuiz',`Hola ${user}. Bienvenidx a QUIZ-NEO!`);
    divComp(divContainer,'questionQuiz','');
    divComp(divContainer,'answerQuiz','');    
    await quizInit();
}
