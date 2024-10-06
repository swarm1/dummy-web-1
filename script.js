// Select elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Event listener for adding a task
addTaskBtn.addEventListener('click', addTask);

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        // Create list item
        const li = document.createElement('li');

        // Create task text span
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = deleteTask;

        // Append elements
        li.appendChild(taskSpan);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        // Clear input
        taskInput.value = '';
    } else {
        alert('Please enter a task.');
    }
}

// Function to delete a task
function deleteTask() {
    const li = this.parentElement;
    taskList.removeChild(li);
}