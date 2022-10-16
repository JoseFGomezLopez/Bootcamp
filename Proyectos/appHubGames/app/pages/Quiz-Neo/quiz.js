import './quizNeoStyle.css'
import { buttonComponent } from "../../components/Buttons/buttonComponent";
import { playRoom } from "../playRoom/playRoom";
import { user } from "../../utils/Home/createUser";
import { parragraphC } from "../../components/Parragraph/parragraphComponent";
import { divComp } from "../../components/Div/divComponent";
import { randomColor } from '../../utils/Quiz/colorQuiz';

export const getQuiz = () => {

    const divContainer = document.querySelector('#app');
    divContainer.innerHTML='';
    
    buttonComponent(divContainer,'reloadButtonQuiz','Home','Play Room','click',(ev)=>playRoom());
    parragraphC(divContainer,'parragraphQuiz',`Hola ${user}. Bienvenidx a QUIZ-NEO!`);
    divComp(divContainer,'questionQuiz','');
    divComp(divContainer,'answerQuiz','');
    const divQuestions = document.querySelector('.questionQuiz');
    parragraphC(divQuestions,'parragraphQuestion',`Hola ${user}. Bienvenidx a QUIZ-NEO!`);       
    const divAnswers = document.querySelector('.answerQuiz');
    parragraphC(divAnswers,'parragraphAnswer',`Hola ${user}. Bienvenidx a QUIZ-NEO!`);
    parragraphC(divAnswers,'parragraphAnswer',`Hola ${user}. Bienvenidx a QUIZ-NEO!`);
    parragraphC(divAnswers,'parragraphAnswer',`Hola ${user}. Bienvenidx a QUIZ-NEO!`);
    divQuestions.addEventListener('mouseover',(ev)=>randomColor('.questionQuiz'));
    divAnswers.addEventListener('mouseover',(ev)=>randomColor('.answerQuiz'));
}