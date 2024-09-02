class Human {
    constructor(name, age, sex) {
      this.name = name;
      this.age = age;
      this.sex = sex;
    }
  }
  
  Human.prototype.greet = function() {
    console.log(`Hello my name is ${this.name}`)
  }
  
  class Humanoid extends Human {
    constructor(name, age, sex, serialNumber) {
      super(name, age, sex)
      this.serialNumber = serialNumber;
    }
  }
  
  const newHuman = new Human("Melvino", 18, 'M');
  const newHumanoid = new Humanoid("Melvinoid", 1, 'N/A', "#m101");
  
  console.log(newHuman.name)
  console.log(newHumanoid.name)
  
  newHuman.greet();
  newHumanoid.greet();
  