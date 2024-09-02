function Person(fName, lName) {
    this._fName = fName;
    this._lName = lName;

    // First name
    Object.defineProperty(this, 'fName', {
        get: function() {
            return this.capitalizeFirst(this._fName);
        },
        set: function(value) {
            this._fName = this.capitalizeFirst(value);
        }
    })

    // Last Name
    Object.defineProperty(this, 'lName', {
        get: function() {
            return this.capitalizeFirst(this._lName);
        },
        set: function(value) {
            this._lName = this.capitalizeFirst(value);
        }
    })

    // get fullName
    Object.defineProperty(this, 'fullName', {
        get: function() {
            // we are actually using the getters and/or setters here. (there are no underscores);
            // and, these getters and setters already the capitalizeFirst method, so we need not to call it.
            return `${this.fName} ${this.lName}`; 
        },
    })
}

Person.prototype.capitalizeFirst = function(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
}

const person1 = new Person('john', 'doe');
console.log(person1.fName); // we want to get this property through the getter, not directly.
console.log(person1.lName); 
console.log(person1.fullName);

person1.fName = "jane";
person1.lName = "roxas";
console.log(person1);