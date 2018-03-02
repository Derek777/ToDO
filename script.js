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
    var label = document.createElement('label');
    label.className = "toEdit";
    label.innerText = task;
    var input =document.createElement('input');
    input.type = "text";
    input.className = "form-control col-5 hidden";
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
        console.log(taskItem);
        inputTask.value = "";
    }
}

function editTask() {
    var taskItem = this.parentNode;                   //li
    var label = taskItem.querySelector('label'); // label
    var text = label.textContent;                //text in label
    var input = taskItem.querySelector('input[type=text]');    //input
    if(label.classList.contains('toEdit')){
        input.value = text;
    }else{
        label.innerText = input.value;
    }

    changeClass(label, input);

    // taskText.className = "text";
    // input.value = text;
    // input.className = "";
    // console.log(input);
}

function deleteTask() {
    var taskItem = this.parentNode;
    var ul = taskItem.parentNode;
    ul.removeChild(taskItem);
}

function finishTask() {
    var taskItem = this.parentNode;
    finishedTasks.appendChild(taskItem);
    bindTaskEvents(taskItem, unfinishTask);

    // console.log(taskItem);
}

function unfinishTask() {
    var taskItem = this.parentNode;
    unfinishedTasks.appendChild(taskItem);
    // console.log('2');
    bindTaskEvents(taskItem, finishTask);
}

function bindTaskEvents(tastItem, checkboxEvent) {
    var checkbox = tastItem.querySelector('input[type=checkbox]');
    var editBtn = tastItem.querySelector('.edit');
    var deleteBtn = tastItem.querySelector('.delete');

    checkbox.onclick = checkboxEvent;
    editBtn.onclick = editTask;
    deleteBtn.onclick = deleteTask;
}

function changeClass(label, input) {
    if(label.classList.contains('toEdit')){
        label.className = "hidden";
        input.className = "toEdit";
    } else {
        label.className = "toEdit";
        input.className = "hidden";
    }
}
addButton.onclick = addtask;
// console.log(document.querySelector('input[type=checkbox]'));