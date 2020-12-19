// For multiline string we normally use + operator with a new line escape sequence (\n). We can do it an easier way by using backticks (`).


// longhand
console.log("Javascript, often abbreviated as JS, is a \n" + "programming language that confoms to the \n" + "ECMAScript specification. Javascript is high-level, /n" + "often just-in-time compiled, and multi-paradigm.");

//shorthand
console.log(`Javascript, often abbreviated as JS, is a programming language that confoms to the ECMAScript specification. Javascript is high-level, often just-in-time compiled, and multi-paradigm.`);