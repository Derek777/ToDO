var addButton = document.getElementById('add-task');
var inputTask = document.getElementById('new-task');
var unfinishedTasks = document.getElementById('unfinished-tasks');
var finishedTasks = document.getElementById('finished-tasks');


var localStorageProviderItem = new localStorageProvider();
var dataServiceItem = new dataService(localStorageProviderItem);

dataServiceItem.read();
dataServiceItem.save();

function createNewTask(task) {
    var taskItem = document.createElement('li');
    taskItem.className = "form-check-inline task";
    var check = document.createElement('input');
    check.type = "checkbox";
    check.className = "form-check-input";
    var label = document.createElement('label');
    label.className = "toEdit";
    label.innerText = task;
    var input = document.createElement('input');
    input.type = "text";
    input.className = "form-control hidden";
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
    var empty = unfinishedTasks.querySelector('.empty');
    if (inputTask.value){
        var taskItem = createNewTask(inputTask.value);
        if(empty){
            empty.className = "hidden";
        }
        unfinishedTasks.appendChild(taskItem);
        bindTaskEvents(taskItem, finishTask);
        inputTask.value = "";
    }
}

function editTask() {
    var taskItem = this.parentNode;
    var editBtn = taskItem.querySelector('.edit');
    var label = taskItem.querySelector('label');
    var text = label.textContent;
    var input = taskItem.querySelector('input[type=text]');
    if(label.classList.contains('toEdit')){
        input.value = text;
        editBtn.innerText = "Зберегти";
    }else{
        label.innerText = input.value;
        editBtn.innerText = "Редагувати";
    }
    changeClass(label, input);
}

function deleteTask() {
    var taskItem = this.parentNode;
    var ul = taskItem.parentNode;
    ul.removeChild(taskItem);
    if(!ul.querySelector('.task')){
        ul.querySelector('.hidden').className = "toEdit empty";
    }
}

function finishTask() {
    var taskItem = this.parentNode;
    var editBtn = taskItem.querySelector('.edit');
    var empty = finishedTasks.querySelector('.empty');

    finishedTasks.appendChild(taskItem);
    bindTaskEvents(taskItem, unfinishTask);
    taskItem.removeChild(editBtn);
    if(!unfinishedTasks.querySelector('.task')){
        unfinishedTasks.querySelector('.hidden').className = "toEdit empty";
    }
    if(empty){
        empty.className = 'hidden';
    }
}

function unfinishTask() {
    var taskItem = this.parentNode;
    var hidden = unfinishedTasks.querySelector('.hidden');
    var editBtn = document.createElement('button');
    editBtn.className = "btn btn-primary edit";
    editBtn.innerText = "Редагувати";

    var deleteBtn = taskItem.querySelector('.delete');

    taskItem.insertBefore(editBtn, deleteBtn);

    unfinishedTasks.appendChild(taskItem);
    // console.log('2');
    bindTaskEvents(taskItem, finishTask);
    if(!finishedTasks.querySelector('.task')){
        finishedTasks.querySelector('.hidden').className = "toEdit empty";
    }
    if(!hidden){
        unfinishedTasks.querySelector('.empty').className = 'hidden';
    }

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

function save() {
    var unfinishedTasksArr = [];
    var finishedTasksArr = [];
}
addButton.onclick = addtask;



function dataService (dataProvider) {
    this.load = function () {
        return dataProvider.load();
    }

    this.save = function () {
        dataProvider.save();
    }
}

function localStorageProvider () {
    this.load = function () {
        // read from local storage
    }

    this.save = function () {
        // write to local storage
    }
}

//function restProvider () {
//}