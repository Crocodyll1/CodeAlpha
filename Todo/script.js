const input = document.querySelector("#todo-input");
const addButton = document.querySelector("#add-button");
const todoList = document.querySelector("#todo-list");


console.log(input);

let tasks = [];

addButton.addEventListener("click", addTask);

function addTask(){
    const taskText = input.value.trim();

    if( taskText === ""){
        return;
    }
    tasks.push({
        text: taskText,
        completed:false
    });

    renderTasks();
    input.value = "";
}

function renderTasks(){
    todoList.innerHTML="";

    tasks.forEach(function(task){
        const li = document.createElement("li");
        li.textContent = task.text;
        todoList.appendChild(li)
    });

}