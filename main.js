// make a tamagotchi class
class Tamagotchi {
    constructor(hunger,sleepiness, boredom, age) {
        this.age = 0;
        this.boredom = 0;
        this.hunger = 0;
        this.sleepiness = 0;
        
    }
// these are my click Functions so my buttons have an action 
    clickPlay() {
        if(tamagotchi.boredom >= 0) {
            tamagotchi.boredom-= 1;  
        }
    }

    clickFeed() {
        if(tamagotchi.hunger >= 0) {
            tamagotchi.hunger-= 1;  
        }
    }
    

    clickSleep() {
        if(tamagotchi.sleepiness >= 0) {
            tamagotchi.sleepiness-= 1;  
            

        }
    }


}

const tamagotchi = new Tamagotchi;

const nameButton = document.getElementById("name");
const nameText = document.getElementById("nameSpace");

function name1() {
    nameText.innerHTML = nameSpace
}
nameButton.addEventListener("click", function(e) {
    const name = prompt("Pet name?")

    document.getElementById("nameSpace").innerHTML = name;
});