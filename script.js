var addButton = document.getElementById('add-task');
var inputTask = document.getElementById('new-task');
var unfinishedTasks = document.getElementById('unfinished-tasks');
var finishedTasks = document.getElementById('finished-tasks');

function createNewTask(task) {
    var taskItem = document.createElement('li');
    taskItem.className = "form-inline";
    var check = document.createElement('input');
    check.type = "checkbox";
    check.className = "form-check-input";
    var label = document.createElement('p');
    label.className = "form-check-label";
    label.innerText = task;
    var input =document.createElement('input');
    input.type = "text";
    input.name = "text";
    input.className = "form-control col-5 text";
    var editBtn = document.createElement('button');
    editBtn.className = "btn btn-primary edit";
    editBtn.innerText = "Редагувати";
    var deleteBtn = document.createElement('button');
    deleteBtn.className = "btn btn-danger delete";
    deleteBtn.innerText = "Видалити";

    taskItem.appendChild(check);
    taskItem.appendChild(label);
    taskItem.appendChild(input);
    taskItem.appendChild(editBtn);
    taskItem.appendChild(deleteBtn);

    return taskItem

}

function addtask() {
    if (inputTask.value){
        var taskItem = createNewTask(inputTask.value);
        unfinishedTasks.appendChild(taskItem);
        bindTaskEvents(taskItem, finishTask);
        inputTask.value = "";
    }
}

function editTask() {
    var taskItem = this.parentNode;
    var taskText = taskItem.querySelector('p');
    var text = taskText.textContent;
    var input = taskItem.querySelector('.text');
    taskText.className = "text";
    input.value = text;
    input.className = "";
    console.log(taskText);
}

function deleteTask() {
    var taskItem = this.parentNode;
    var ul = taskItem.parentNode;
    ul.removeChild(taskItem);
}

function finishTask() {
    console.log('3');
}

function unfinishTask() {

}

function bindTaskEvents(tastItem, checkboxEvent) {
    var checkbox = tastItem.querySelector('input[type=checkbox]');
    var editBtn = tastItem.querySelector('.edit');
    var deleteBtn = tastItem.querySelector('.delete');

    checkbox.onclick = checkboxEvent;
    editBtn.onclick = editTask;
    deleteBtn.onclick = deleteTask;
}
addButton.onclick = addtask;
// console.log(document.querySelector('input[type=checkbox]'));