export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public address: Address[] = [];

  constructor(public name: string, public age: number) {}

  clone(): Person {
    const newObj = new Person(this.name, this.age);
    newObj.address = this.address.map((item) => item.clone());
    return newObj;
  }

  addAddress(address: Address): void {
    this.address.push(address);
  }
}

export class Address implements Prototype {
  constructor(public street: string, public number: number) {}
  clone(): Address {
    return new Address(this.street, this.number);
  }
}

const address1 = new Address('av santo antonio', 15);
const person1 = new Person('luiz', 20);
person1.addAddress(address1);
const person2 = person1.clone();

person2.name = 'joas';
console.log(person2);
console.log(person2.name);
console.log(person2.address);
