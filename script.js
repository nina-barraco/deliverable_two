//exercise 1
var total=0
for (var num=1; num < 6; num ++) {
  total=total+num;
}
console.log(total)

//exercise 2
var line = "";

do{
  var play = prompt("Do You Want To Play?");
  var word = prompt("Enter A Word");
  line = line + " " + word;
}while (play === "yes");
  console.log(line);

//exercise 3
var person = prompt("Would You Like to Print Your Name?");
var x = "!";
var count = "";

while (person === "yes") {
  var name = prompt("What's Your Name?");
  var y = count += x;
  console.log(name + y);
  var person = prompt("Would You Like to Print Your Name?");
}

//exercise 4
var choice = prompt("What Time Of Day Is It?");

switch (choice) {
  case 'morning':
    console.log("Since it is morning, you should eat breakfast. We suggest eggs and toast.");
    break;
  case 'noon':
    console.log("Since it is noon, you should eat lunch. We suggest a salad.");
    break;
  case 'evening':
    console.log("Since it is evening, you should eat dinner. We suggest chicken and rice.");
    break;
  default:
    para.textContent = '';
  }
