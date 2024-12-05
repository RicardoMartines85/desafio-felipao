class HeroiDaAventura {

        
    constructor(name, age, type){

        this.name = name;
        this.age = age;
        this.type = type;
        
        //["guerreiro","mago","monge","ninja"]
    }

    ataque(){  
        switch(this.type){
            case "guerreiro":
            return "espada.";
            break
        
            case "mago":
            return "magia.";
            break

            case "monge":
            return "artes marciais.";
            break

            case "ninja":
            return "shuriken."
            break

            default:
                return "nada, pois não sabe atacar."
    }
}
    
    atacar (){
        console.log(`O ${this.type} atacou usando ${this.ataque()}`)
    }
}

let heroi = new HeroiDaAventura("jurumim ++", 21, "guerreiro" )

heroi.atacar();