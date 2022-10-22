class Governor {
  constructor(state, name, age){
    this.name = name;
    this.state = state;
    this.age = age;
  } 
 
  static state() {
    console.log('hi')
  }

  static name() {
    console.log('hello')
  }
    
  static age() {
    console.log('hey')
  }
}
Governor.age()
Governor.state()
Governor.name()


class Person {
  constructor(firstName, lastName, age, hunger, stress, time) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.hunger = hunger;
    this.stress = stress;
    this.time = time;
  }

  goToBed(){
    if (this.time >  10) {
      console.log("it is time to go to bed. Goodnight!!")
    }
    else if (this.time <= 10) {
      console.log("It is not bedtime yet.")
    }
  }

  eatFood(){
    if (this.hunger > 5 && this.hunger < 9){
      console.log("Time to eat.")
    }
    else if (this.hunger > 1 && this.hunger <= 5){
      console.log("Go grab a snack.")
    }

    else if (this.hunger <= 1 && this.hunger >= 0){
      console.log("You don't need to eat now.")
    }
    else if (this.hunger >= 9 && this.hunger <= 10){
      console.log("You are starving!! Go eat something ASAP!!")
    }
  }

  selfCare(){
    if (this.stress >= 5 && this.stress <= 10){
      console.log("Take some time for relaxation.")
    }
    else if (this.stress >= 0 && this.stress < 5){
      console.log("You are feeling pretty good.")
    }
  }
}
let person1 = new Person('Chloe', 'Schneider', 27, 7, 9, 11)
person1.goToBed()
person1.eatFood()
person1.selfCare()

class PostalWorker extends Person {
  constructor(firstName, lastName, age, gender, deliveredMail, mailCapacity, mailCount){

    super(firstName, lastName, age, gender)
    this.mailCapacity = mailCapacity;
    this.deliveredMail = deliveredMail;
    this.mailCount = mailCount;
  }

  isFull() {
    if (this.mailCount > this.mailCapacity) {
      console.log("Not enough space.")
    }
    else if (this.mailCount === this.mailCapacity) {
      console.log("Capacity limit reached, go deliver.")
    }
    else {
      console.log("Still more space, keep adding.")
    }
  }
  isDelivered() {
    if (this.deliveredMail === true) {
      console.log("Delivery complete! Onto the next one.")
    }
    else if (this.deliveredMail === false) {
      console.log("Package still needs to be delivered.")
    }
  }
}
let postMan = new PostalWorker('Tom', 'Lin', 52, 'male', false, 50, 35)
let postMan1 = new PostalWorker('Sam', 'Zapp', 35, 'male', true, 55, 45)
postMan.isFull();
postMan.isDelivered();
postMan1.isFull();
postMan1.isDelivered();
class Chef extends Person {
  constructor(firstName, lastName, age, michStar, canCook) {
    super(firstName, lastName, age)
    this.michStar = michStar
    this.canCook = canCook
  }
  isExperienced() {
    if (this.michStar === 3) {
      console.log("You are the best chef I have ever met!")
    }
    else if (this.michStar === 2) {
      console.log("You are an amazing chef!")
    }
    else if (this.michStar === 1) {
      console.log("You are a pretty good chef!")
    }
    else {
      console.log("You are a very average chef.")
    }
  }
  cookingAbility() {
    if (this.canCook === true) {
      console.log("I am glad that you have ability to cook.")
    }
    else {
      console.log("It is fine, I can teach you.")
    }
  }
}
let cook = new Chef('Gordon', 'Ramsay', 53, 3, true)
let cook1 = new Chef('Joe','Smith', 22, 0, false)
cook.isExperienced()
cook.cookingAbility()
cook1.isExperienced()
cook1.cookingAbility()