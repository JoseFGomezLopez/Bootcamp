export const Abstractfilter = (array,property,containerSelector,cardComponent,elementReferenceValue) => {

  const filteredArray = array.filter((element)=>element.property == elementReferenceValue);
  const container = document.querySelector(containerSelector);
  container.innerHTML = '';
  filteredArray.forEach(element => {
      container.innerHTML += cardComponent(filteredArray);
  });

}