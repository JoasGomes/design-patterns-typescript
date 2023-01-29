const personPrototype = {
  firstName: 'Joas',
  lastName: 'Gomes',
  age: 20,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const anotherPerson = Object.create(personPrototype);
// shadow
anotherPerson.firstName = 'joana';
console.log(anotherPerson);
console.log(anotherPerson.firstName);
