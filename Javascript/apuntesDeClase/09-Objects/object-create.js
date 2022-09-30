const person = {
    isHuman : true,
    name : "Jose",
    printIntroduction : function(){
        console.log(`Hola soy ${this.name} y ${
            this.isHuman ? 'soy humano' : 'no soy humano'
               }`)
    }
}

const javi = Object.create(person);
javi.name = "Javier";
javi.isHuman = false;
javi.printIntroduction();