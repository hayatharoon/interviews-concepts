console.log('Call Apply and Bind Methods');

// ======================= call method ======================
// =============== Function inside the object ===============

let name1 = {
  firstName: 'Haroon',
  lastName: 'Hayat',
  // function
  printFullName: function () {
    console.log(`My name is ${this.firstName} ${this.lastName}`);
  },
};

let name2 = {
  firstName: 'John',
  lastName: 'Doe',
};

name1.printFullName.call(name2);

// =============== Function outside object ============

let person1 = {
  name: 'Haroon',
  age: 25,
};
let person2 = {
  name: 'Hayat',
  age: 22,
};
function person_details(email, address) {
  console.log(this.name + ' ' + this.age + ' ' + email + ' ' + address);
}

person_details.call(person1, 'haroon@gmail.com', 'KPK SWAT');
person_details.call(person2, 'hayat@gmail.com', 'KPK PAKISTAN');

// ======================= apply method ======================
//* Apply method is same like call method
//*   but the only difference is the way we pass the arguments.

person_details.apply(person1, ['haroon@gmail.com', 'KPK SWAT']);
person_details.apply(person2, ['hayat@gmail.com', 'KPK PAKISTAN']);

// ======================= bind method ======================

//* Bind method: instead of direct call the method
//* bind method binds the method with the object and returns it the copy of that methods

let print_details = person_details.bind(person1, 'bind.method@gamil.com', 'javascript');
console.log('Bind Methods');
print_details()
