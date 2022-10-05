const getDatiApi = () => {
   const response = fetch('http://rickandmortyapi.com/ap/character').then((response)=>{
    return response;  
   }).then((response) => {return response.json()});
   return response;
};

getDatiApi().then((res)=>{
    console.log(res)
   });

 const getCharaceter = async() => {
    const response = await fetch('http://rickandmortyapi.com/ap/character');
    const data = await response.json();
    return data;
    
 }  
getCharaceter.then((res) => console.log(res));