
const app = document.querySelector('#app');

export const initHero = () => {
    getData();
}

const getData = async() => {

try {
    
  const responsePromiseData = await fetch('https://ghibliapi.herokuapp.com/films');
  const responseDataToJson = await responsePromiseData.json();
  transformData(responseDataToJson);

} catch (error) {
    console.log(error);
}

}

const transformData = (data) => {
    let elementsTransformed = data.map((item) => {
        return {
           japaneseTitle : item.original_title,
           englishTitle : item.title,
           description : item.description,
           poster:item.image 
        }
    })
 fillData(elementsTransformed);
}
const fillData = (data) => {
    data.forEach((item)=> {
        
      const listData = `
      <div>
       <ul>
        <li>${item.japaneseTitle}</li>
        <li>${item.englishTitle}</li>
        <li>${item.description}</li>
        <li><img src = "${item.poster}"></li>
       </ul>
      </div>
      `
      app.innerHTML += listData;
    })
}