//We normally use + operator to concatenate string values with variables. With ES6 template literals we can do it in a more simple way.

let number = 8179997836,
    time = 1130;

// longhand
console.log("You got a missed call from " + number + " at " + time);

// shorthand
console.log("You got a missed call from ${number} at ${time}");