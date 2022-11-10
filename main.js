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
const hungerLevel = document.querySelector("#hungerLevel")
const boredomLevel = document.querySelector('#boredomLevel')
const sleepyLevel = document.querySelector('#sleepyLevel')

// This is the naming Function I made so the pet will have a name! 
function name1() {
    nameText.innerHTML = nameSpace
}


nameButton.addEventListener("click", function(e) {
    const name = prompt("Pet name?")

    document.getElementById("nameSpace").innerHTML = name;
});

// this is my getHungry function so the pet's hunger level will get higher every 10 seconds!  
const getHungry = () => {
    let hungerLevel = document.querySelector("#hungerLevel")
    tamagotchi.hunger += 1 
    hungerLevel.innerText = tamagotchi.hunger

    tamagotchiIsDead()
   
}
setInterval(getHungry,10000);

// this is my getBored function so the pet's boredom level is getting higher every 10 seconds! 
const getBored = () => {
    let boredomLevel = document.querySelector('#boredomLevel')
    tamagotchi.boredom += 1
    boredomLevel.innerText = tamagotchi.boredom

    tamagotchiIsDead()
}
setInterval(getBored, 10000);

// this is my getSleepy function so the pet's boredom level is getting higher every 10 seconds! 
const getSleepy = () => {
    let sleepyLevel = document.querySelector('#sleepyLevel')
    tamagotchi.sleepiness += 1 
    sleepyLevel.innerText = tamagotchi.sleepiness

    tamagotchiIsDead()
}
setInterval(getSleepy, 10000);



// this is my timeAge function which will increase the pet's age every 5 seconds!
const timeAge = () => {
    let petAge = document.querySelector('#petAge')
    tamagotchi.age += 1
    petAge.innerText = tamagotchi.age

   
}
setInterval(timeAge, 5000);