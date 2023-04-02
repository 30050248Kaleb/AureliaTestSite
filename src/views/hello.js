export class Hello {
  constructor() {
    this.name = "Hello"
    this.firstName = 'John';
    this.lastName = 'Doe';
  }

  sayHello() {
    alert(`Hello ${this.firstName} ${this.lastName}. Nice to meet you.`);
  }
}
