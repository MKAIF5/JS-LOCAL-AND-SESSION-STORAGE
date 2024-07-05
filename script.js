const key = prompt("enetr key you want to set");
const value = prompt("enter value you want to set");

localStorage.setItem(key, value)
console.log(` the value is set ${key} is  ${localStorage.getItem(key)}`)

if (key == "red" || key == "blue") {
    localStorage.removeItem(key)
}
