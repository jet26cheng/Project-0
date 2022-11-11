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

// this is my getHungry function so the pet's hunger level will get higher every 10 seconds!  
const getHungry = () => {
    let hungerLevel = document.querySelector("#hungerLevel")
    tamagotchi.hunger += 1 
    hungerLevel.innerText = tamagotchi.hunger

    tamagotchiIsDead()
   
}
const getHungryInterval = setInterval(getHungry,10000);

// this is my getBored function so the pet's boredom level is getting higher every 10 seconds! 
const getBored = () => {
    let boredomLevel = document.querySelector('#boredomLevel')
    tamagotchi.boredom += 1
    boredomLevel.innerText = tamagotchi.boredom

    tamagotchiIsDead()
}
const getBoredInterval = setInterval(getBored, 10000);

// this is my getSleepy function so the pet's boredom level is getting higher every 10 seconds! 
const getSleepy = () => {
    let sleepyLevel = document.querySelector('#sleepyLevel')
    tamagotchi.sleepiness += 1 
    sleepyLevel.innerText = tamagotchi.sleepiness

    tamagotchiIsDead()
}
const getSleepyInterval =setInterval(getSleepy, 10000);



// this is my timeAge function which will increase the pet's age every 5 seconds!
const timeAge = () => {
    let petAge = document.querySelector('#petAge')
    tamagotchi.age += 1
    petAge.innerText = tamagotchi.age

   
}
const ageInterval = setInterval(timeAge, 5000);

// the tamagotchiIsDead function is to run to end the game and letting hte player know they lost.
const tamagotchiIsDead = () => {
    if(tamagotchi.hunger > 10 || tamagotchi.sleepiness > 10 || tamagotchi.boredom > 10){
        
        document.body.querySelector("img").setAttribute("src", "./images/Crying Huskie.gif")
        
        clearInterval(getHungryInterval)
        clearInterval(getSleepyInterval)
        clearInterval(getBoredInterval)
        alert(`Your pet has died`)
      
        
    }
    
}

// Button functions!


const clickFeed = () => {
    tamagotchi.clickFeed()
    document.querySelector('#hungerLevel').innerText = tamagotchi.hunger

    document.body.querySelector("img").setAttribute("src", "./images/eating husky.gif")
}

const clickSleep = () => {
    tamagotchi.clickSleep()
    document.querySelector('#sleepyLevel').innerText = tamagotchi.sleepiness

    document.body.querySelector("img").setAttribute("src", "./images/sleepying husky.gif")
}

const clickPlay = () => {
    tamagotchi.clickPlay()
    document.querySelector('#boredomLevel').innerText = tamagotchi.boredom

    document.body.querySelector("img").setAttribute("src", "./images/playing husky.gif")
}



// these are the event listners for the buttons I created 

document.getElementById('feed').addEventListener('click', clickFeed)
document.getElementById('light').addEventListener('click',clickSleep)
document.getElementById('play').addEventListener('click', clickPlay)

nameButton.addEventListener("click", function(e) {
    const name = prompt("Pet name?")

    document.getElementById("nameSpace").innerHTML = name;
});