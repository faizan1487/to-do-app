//selectors
const todoinput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todolist = document.querySelector(".todo-list");

//eventlistenters

todoButton.addEventListener("click", addtodo);
todolist.addEventListener("click", deleteCheck);


//funstions

function addtodo(event) {
    //prevnts form from doing its default action that is submitting
    event.preventDefault();
    //todo div

    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //Create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoinput.value;     //innertext only lets you retreive and set the content of element in plain text 
    newTodo.classList.add("todo-item"); //classlist proeprty returns the classname of the element.it is used to add,remove,toggle css classes on an element.classlist proeprty is readonly but you can modify it using add() and removea() method.
    todoDiv.appendChild(newTodo);
    
    //check mark button
    const completedbutton = document.createElement('button');
    completedbutton.innerHTML = '<i class = "fas fa-check"></i>';
    completedbutton.classList.add('complete-btn');
    todoDiv.appendChild(completedbutton);

    //trashbutton
    const trashbutton = document.createElement('button');
    trashbutton.innerHTML = '<i class = "fas fa-trash"></i>';
    trashbutton.classList.add('trash-btn');
    todoDiv.appendChild(trashbutton);
    //inner html lets you retreive and set the content of the  element in html form

    //append tododiv to list
    todolist.appendChild(todoDiv);

    //Clear todo input value
    todoinput.value = "";

}


function deleteCheck(e) {
    const item = e.target; //target property returns the element which triggers the event.
    
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.remove();
    }

    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}