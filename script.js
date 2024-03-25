function createTask() {
    const newTask = document.getElementById('newTask');
    const taskList = document.getElementById('taskList');

    if (newTask.value.trim() === '') return;

    const taskItem = document.createElement('li');
    const taskContent = document.createElement('span');
    taskContent.textContent = newTask.value;
    taskContent.className = 'task';
    taskContent.onclick = function() {
        taskItem.classList.toggle('completed');
    };

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function() {
        taskList.removeChild(taskItem);
    };

    taskItem.appendChild(taskContent);
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);

    newTask.value = '';
}

document.getElementById('newTask').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        createTask();
    }
});
