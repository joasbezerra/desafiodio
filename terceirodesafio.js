class hero{ 
    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = type;
        }
    
    attack(){
        if (this.type === "mago") {
            console.log(`${this.type} atacou usando magia`) }
        else if (this.type === "guerreiro") {
            console.log(`${this.type} atacou usando espada`) } 
        else if (this.type === "monge") {
            console.log(`${this.type} atacou usando artes marciais`) }
        else if (this.type === "ninja") {
            console.log(`${this.type} atacou usando shuriken`) }
        else {
            console.log(`seu herói não conseguiu atacar`); }      
    }
}


let hero1 = new hero("Naruto", 22, "ninja");
let hero2 = new hero("Gandalf", 60, "mago");
let hero3 = new hero("Aragorn", 35, "guerreiro");
let hero4 = new hero("Shaolin", 60, "monge");


console.log(hero1,hero2,hero3,hero4);
hero1.attack();
hero2.attack();
hero3.attack();
hero4.attack();
