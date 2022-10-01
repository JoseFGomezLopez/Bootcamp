
//Iteracion #1 : 
//Crea una arrow function que tenga dos parametros a y b y 
//que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
//por consola la suma de los dos parametros.
//1.1 : 1.1 Ejecuta esta función sin pasar ningún parametro
//1.2 Ejecuta esta función pasando un solo parametro
//1.3 Ejecuta esta función pasando dos parametros

var sum = (a = 10,b = 5) =>  a + b;
  
console.log(sum());
console.log(sum(12));
console.log(sum(23,32));

