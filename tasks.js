// DEVELOPER: Marwa Monsour, IS117-001, Fall 2024

document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');

    // Load tasks from localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Function to render tasks
    const renderTasks = () => {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between align-items-center';
            li.innerHTML = `
                <span>${task}</span>
                <button class="btn btn-danger btn-sm delete-task" data-index="${index}">Delete</button>
            `;
            taskList.appendChild(li);
        });
    };

    // Add Task
    addTaskButton.addEventListener('click', () => {
        const task = taskInput.value.trim();
        if (task !== '') {
            tasks.push(task);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            renderTasks();
            taskInput.value = '';
        }
    });

    // Delete Task
    taskList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-task')) {
            const index = e.target.getAttribute('data-index');
            tasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            renderTasks();
        }
    });

    // Initial Render
    renderTasks();
});
