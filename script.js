
//accessing html elements here:
let listContainer = document.querySelector(".listContainer")
let inputBox = document.querySelector("#taskInput")
let addBtn = document.querySelector("#addBtn")
let list = document.querySelector(".list")
let delBtn = document.querySelectorAll(".delBtn")

//creating functions for each event:
// const handleInputBox = () => {
//     console.log(inputBox.value)
// }
// inputBox.addEventListener("input", handleInputBox)


// array coming like a database..
let taskList = [
    {
        id: 1987,
        text: "this is a dummy task..you can delete it"
    }

]

// render tasks on the screen..
function render(arr) {
    listContainer.innerHTML = ''
    arr.map((obj) => {
        let divEle = document.createElement("div")
        divEle.className = "list"
        divEle.innerHTML = `
        <p>${obj.text}</p>
        `
        let btnEle = document.createElement('button')
        btnEle.className = "delBtn"
        btnEle.innerText = "❌"
        divEle.appendChild(btnEle)
        listContainer.append(divEle)

        btnEle.addEventListener('click', () => {
            handleRemoveBtn(obj.id)
        })
    })

}
//calling render function to display task on the screen..
render(taskList)

const handleAddBtn = () => {
    // console.log(inputBox.value)
    let obj = {
        id: Date.now(),
        text: inputBox.value
    }
    if (inputBox.value === "") {
        alert("enter some task first..")
    } else {
        taskList.push(obj)
        inputBox.value = ""
    }
    console.log("task add hogya")
    render(taskList)
}
addBtn.addEventListener("click", handleAddBtn)

function handleRemoveBtn(id) {
    // console.log(id)
    let b = taskList.filter((obj) => {
        return obj.id !== id
    })
    taskList = b
    render(taskList)
}