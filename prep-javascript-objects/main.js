var person = {
  firstName: 'Diamond',
  lastName: 'Morehead',
  hobby: 'Singin'
};
console.log(person);

var fullName = person.firstName + ' ' + person.lastName;

console.log("The person's name is: " + fullName + '.');

person.job = 'Account Manager';

console.log('This persons current job is:' + person.job + '.');

person.previousJob = 'Loan Processor';

console.log("This person's previous job is:" + person.previousJob + '.');

console.log('The complete person object: ', person);
