let user = true;
if(user){
    console.log("Bienvenido");
} else{
    console.log("Debes iniciar sesión")
}
function isLogged(user){
    if(user){
        console.log("Bienvenido");
    }else if(typeof user !== "string"){
        console.log("Debes tener un nombre")  
    }else{
        console.log("Debes iniciar sesión");
    }
}
isLogged("Pepe");
isLogged();
isLogged(true);
isLogged(false);
