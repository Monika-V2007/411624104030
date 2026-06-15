console.log("print statement")
const a=20;                             //num declaration
const b=30;
console.log(a+b)
const str="Monika"                          //str declaration
console.log(str)

const arr =[1,2.4,"string",false]           //array declaration
console.log(arr)                                 

for(let i=0;i<arr.length;i++){              //for loop
    console.log(arr[i])                     
}

arr[1]=3.1                           // reassign the value
console.log(arr[1])

for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}

arr.push("Monika")              // adding value
console.log(arr)
arr.pop()                       // removing value //automatically lastone
console.log(arr)

function example(){
    console.log("I am writing javascript code")
}
example()

const ptag = document.getElementById("ptag")
ptag.innerHTML="print statement"

const input = document.getElementById("input")
const output = document.getElementById("inputField")

input.addEventListener("input",()=>{
    output.textContent = input.value
})

const first = document.createElement("h1")
first.textContent = "Some text"
document.body.appendChild(first)

