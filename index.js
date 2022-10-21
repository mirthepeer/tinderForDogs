import Dog from './Dog.js'
import dogsData from './data.js'
let currentDogIndex = 0
let currentDog = new Dog(dogsData[currentDogIndex])
document.getElementById("accept-button").addEventListener('click', yes)
document.getElementById("reject-button").addEventListener('click', no)
render()

function render() {
    document.getElementById('card').innerHTML = currentDog.getDogHtml()
}

function getNewDog() {
    if(currentDogIndex === dogsData.length - 1){
        currentDogIndex= 0
        currentDog = new Dog(dogsData[currentDogIndex])
        render()        
    }else{
    currentDogIndex+=1
    currentDog = new Dog(dogsData[currentDogIndex])
    render()
    console.log(dogsData[currentDogIndex])
    }
}

function yes() {
    if(currentDog.hasBeenSwiped){
        return
    }
    currentDog.setMatchStatus(true)
    render()
    setTimeout(()=>{
       getNewDog()
    },1100)}

function no() {
    if(currentDog.hasBeenSwiped){
        return
    }

    currentDog.setMatchStatus(false)
    render()
    setTimeout(()=>{
        getNewDog()
     },1100)}