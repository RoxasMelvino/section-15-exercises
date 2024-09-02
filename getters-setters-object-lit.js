const Person = {
    _fName: 'john',
    _lName: 'doe',
    capitalizeFirst: function(value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    },

    get fName() {
        return this.capitalizeFirst(this._fName) 
    },
    set fName(value) {
        this._fName = this.capitalizeFirst(value);
    },

    get lName() {
        return this.capitalizeFirst(this._lName)
    },
    set lName(value) {
        this._lName = this.capitalizeFirst(value);
    },

    get fullName() {
        return `${this.fName} ${this.lName}`
    }
}

const person1 = Object.create(Person);

console.log(person1.fName);
console.log(person1.lName);
console.log(person1.fullName);

person1.fName = 'jane';
person1.lName = 'demetrius';

console.log(person1.fName);
console.log(person1.lName);




