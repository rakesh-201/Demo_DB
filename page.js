// // let y = 0;

// // function buildTicket(transport) {
// //     let numOfPassengers = 0;
    
// //     return function (name) {
// //         return (
// //         "Hello Mr/s. " +
// //         name +
// //         "!\n" +
// //         "You are going via " +
// //         transport +
// //         ".\n" +
// //         "Your ticket ID is : " +
// //         ++numOfPassengers + " " + y
// //         );
// //     };
// // }

// // let shipFn = buildTicket("Ship");


// // console.log(shipFn("John"));
// // y = 100;
// // console.log(shipFn("Jenny"));


// let numbers = [3, 4, 5];

// let moreNumbers = [1, 2, ...numbers, 6, 7, 8];

// // console.log(moreNumbers);

// let userOne = {
//   name: "John",
//   isAdmin: true,
//   company: "DB",
// };

// let userTwo = {
//   ...userOne,
//     name: "Jeeny",
// };

// console.log(userTwo);

// let a = {
//   a : 0
// }

// console.log(typeof a)

// a = 10;

// console.log(typeof a)

class Person {
  constructor(name) {
    this.name = name;
  }
  getDetails() {
    return this.name;
  }
}

class Student extends Person {
  #courseEnrolled;
  static NumberOfStudent = 0;

  constructor(studId, studName="Rohan") {
    super(studName);
    this.studId = studId;
    // this.studName = studName;
    Student.NumberOfStudent++;
  }
  get courseEnrolled() {
    return this.#courseEnrolled;
  }
  set courseEnrolled(value) {
    this.#courseEnrolled = value;
  }

  a(b, c){
    return b + c;
  }
  a(b){
    return b;
  }


  getDetails() {
    return this.studId + " -> " + super.getDetails();
    // return this.studId + " - " + this.studName;
  }
}

let john = new Student("S001", "John Doe");
console.log(john.getDetails());
john.courseEnrolled = "React";
console.log("Enrolled Course : ", john.courseEnrolled);

let jenny = new Student("S002", "Jenny Doe");
console.log("Number of Student Enrolled: ", Student.NumberOfStudent);

let jack = new Student(12);
console.log( jack.a(1));
console.log( jack.a(1, 2));
// console.log(jack);