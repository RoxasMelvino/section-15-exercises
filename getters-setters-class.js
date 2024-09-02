class Person {
    constructor(fName, lName) {
        this._fName = fName; // an underscore preceding a variable signifies a private variable
        this._lName = lName; // however, it is not really a "private" variable, it's just a variable name
    }

    get fName() {
        return this.capitalizeFirst(this._fName);
    }

    set fName (value) {
        this._fName = this.capitalizeFirst(value)
    }

    get lName() {
        return this.capitalizeFirst(this._lName);
    }

    set lName(value) {
        this._lName = this.capitalizeFirst(value)
    }

    get fullName() {
        return `${this.fName} ${this.lName}`;
    }

    capitalizeFirst(value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
}

const person1 = new Person('john', 'doe');
console.log(person1.fName);
console.log(person1.lName);

person1.fName = "jane"; // this calls the setter and it will not directly set the property
person1.lName = "done" 
console.log(person1.fullName);
console.log(person1);

