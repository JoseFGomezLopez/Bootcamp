import { quizApi } from "../../services/quizService";
import { parragraphC } from "../../components/Parragraph/parragraphComponent";
import { parragraphComponentId } from "../../components/Parragraph/parragraphComponentId";

const quizData = await quizApi();

export const quizInit = async (counter = 0) => {
  const divQuestions = document.querySelector(".questionQuiz");
   parragraphC(divQuestions,"parragraphQuestion",`${quizData[counter].pregunta}`);
 const divAnswers = document.querySelector(".answerQuiz");
  for (const respuesta of quizData[counter].respuestas) {
    parragraphComponentId(divAnswers,`${respuesta}`,`parragraphAnswer`,`${respuesta}`);
    const p = document.getElementById(`${respuesta}`);
    p.addEventListener("click", (ev) => {
      if (
        `${respuesta}` === `${quizData[counter].correcta}` &&
        counter < `${quizData[counter].respuestas.length}`
      ) {
        counter++;
        alert("Enhorabuena! Vamos con la siguiente pregunta");
        divQuestions.innerHTML = "";
        divAnswers.innerHTML = "";
        quizInit(counter);
      } else if (
        `${respuesta}` !== `${quizData[counter].correcta}` &&
        counter < `${quizData[counter].respuestas.length}`
      ) {
        alert("Vuelve a intentarlo de nuevo!");
      } else {
        divQuestions.innerHTML = "";
        divAnswers.innerHTML = "";
        quizInit(0);
      }
    });
  }
};
