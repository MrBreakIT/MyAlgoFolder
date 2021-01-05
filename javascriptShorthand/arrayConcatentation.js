// use the concat in place of the spread

one = ['a', 'b', 'c']
const two = ['d', 'e', 'f']
const three = ['g', 'h', 'i']

//old way
const result = one.concat(two, three)
console.log(result)

//old way 2
const result1 = [].concat(one, two, three)
console.log(result1)

//newer way
const result2 = [...one, ...two, ...three]
console.log(result2)