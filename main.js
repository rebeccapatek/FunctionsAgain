const calculateAgeInDogYears = (ageOfPerson) => {
    const ageInDogYears = ageOfPerson / 7
    return ageInDogYears
}
const dogAge = calculateAgeInDogYears(56)
console.log(dogAge)

const bestInShow = (dogBreed) => {
    const myFavotiteDog = `My favorite dog breed is ${dogBreed}.`
    return myFavotiteDog
}
const myFavorite = bestInShow("schnauzer")
// console.log(myFavorite)

const pets = `When it comes to pets, ${myFavorite}.`
// console.log(pets)

const dogOrCat = (animalNoise) => {
    let emptyString = ""
    if (animalNoise === "meow"){
        emptyString = `When it comes to pets, I like cats`

    }
    else {
        emptyString = `My Favorite dog breed is ${animalNoise}`
    }
    return emptyString
}
const favoriteAnimal = dogOrCat("Pitbull")
console.log(favoriteAnimal)

const addSum = (first, second) => {
    const sum = first + second
    return sum
}
const sum = addSum(1,2)
console.log(sum)

const threeSum = (first, second, third) => {
    const newSum = first + second + third
    return newSum
}
const newSum = threeSum(25,65,88)
console.log(newSum)

const go = (direction, speed) => {
    const sentence = `The car is travelling ${direction} at ${speed} mph.`
    if (speed > 75) {
    return sentence + ` SLOW DOWN!`}
    else {
    return sentence}
}
const sentence = go('forward', 45)
console.log(sentence)

const evenOrOdd = (number) => {
    const div2 = number % 2
    if (div2 === 0) {
        return `EVEN.`
    }
    else {
        return `ODD.`
    }
}
const div2 = evenOrOdd(7)
console.log(div2)

const words = [
    "The", "killing", "complex", "houses",
    "married", "kittens", "and", "single",
    "soldiers", "and", "their", "kleptomaniacal",
    "families"
]
const filteredK = words.filter((word) => {
    return !word.startsWith("k")
})
console.log(filteredK)
const sentenceWithoutK = (wordsInArray) => {
    return wordsInArray.join(" ")
}
const newSentence = sentenceWithoutK(filteredK)
console.log(newSentence)

const svensChances = () => {
    const randomNumber = Math.random() * 3
    console.log(randomNumber)
    if (randomNumber < 1) {
        return `Sven hooked a Tuna!`
    } 
    else {
        return `Sven came home empty-handed.`
    }

}
const catchAnything = svensChances()
console.log(catchAnything)

const order = (sandwich, side, drink, dessert) => {
    const meal = { 
    "side": side,
    "sandwich": sandwich,
    "drink": drink,
    "dessert": dessert
    }
    return meal
}
const takeOutBag = order("Ultimate Slammer", "Potato Wedges", "Mr. Pepper", "cookie" )
console.log(takeOutBag)

const twice = number => number * 2
const timesFive = number => number * 5
const square = number => number * number
const cubed = number => number * number * number
const bigify = (number, operationFunction) => {
    const result = operationFunction(number)
    return result
}
const number = 7
const by2 = bigify(number, twice)
console.log(by2)
const by5 = bigify(number, timesFive)
console.log(by5)  
const byItself = bigify(number, square) 
console.log(byItself)
const byItselfcubed = bigify(number, cubed)
console.log(byItselfcubed)
const byItcubed = bigify(7, cubed)
console.log(byItcubed)

let person =
{
    firstName: "Georgia",
    lastName: "Peach"
}

const walked = (doggy) => {
    return `${doggy.firstName} ${doggy.lastName} went to the park.`
}
console.log(walked(person))
const picked = (doggy) => {
    return `${doggy.firstName} ${doggy.lastName} picked up her dog poo`

}
const piggy = (doggy) => {
    return `${doggy.firstName} ${doggy.lastName} made a big pot of dog chow`

}
const pukey = (doggy) => {
    return `${doggy.firstName} ${doggy.lastName} got rid of the bad stuff she ate`
}
console.log(pukey(person))

const lazyDay = (chore, person, day) => {
    const lazyDaySentence = chore(person);
    return `${lazyDaySentence} on ${day}.`

}
console.log(lazyDay(walked, person, "Tuesday"))

const busyDay = (chore1, chore2, chore3, panther, day) => {
    const busyDaySentence = chore1(panther) + chore2(panther) + chore3(panther);
    return `${busyDaySentence} on ${day}.`
}
console.log(busyDay(picked, piggy, pukey, person, "Monday"))