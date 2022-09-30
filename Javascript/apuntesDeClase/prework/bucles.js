let elements = ["a","b","c","d"];
let elementsList = ["a","b","z","d","c"];


function recover(list) {
    for (let index = 0; index < elements.length; index++) {
        if(list[index] == "c"){
            console.log("Contiene una C");
        }
        
    }
}
recover(elements);
recover(elementsList);