const key = prompt("Enter your key you want to see")
const value = prompt("Enter your value you want to see")

localStorage.setItem(key , value)

console.log(`the key is ${key} and value is ${localStorage.getItem(key)}`);