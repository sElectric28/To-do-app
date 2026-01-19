const inputBox = document.getElementById("inputBox");
const toDoList = document.getElementById("toDoList");

inputBox.addEventListener("keypress", function(e){
    if(e.key === 'Enter' && inputBox.value === ''){
        alert("You must write something...");
    } else if(e.key === 'Enter'){
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        toDoList.appendChild(li)

        let button = document.createElement("button");
        button.innerHTML = "X";
        li.appendChild(button);

        inputBox.value = '';
        saveData();
    }
})

toDoList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "BUTTON"){
        e.target.parentElement.remove();
        saveData();
    }
})

function clearAll(){
    toDoList.innerHTML = "";
    localStorage.clear();
}

function saveData(){
    localStorage.setItem("data", toDoList.innerHTML);
}

function showTask(){
    toDoList.innerHTML = localStorage.getItem("data");
}

showTask();