// DEVELOPER: Marwa Monsour, IS117-001, Fall 2024

document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
    const addTaskButton = document.getElementById("add-task");

    // Load tasks from localStorage when the page loads
    loadTasks();

    // Add a task
    addTaskButton.addEventListener("click", function() {
        if (taskInput.value.trim() !== "") {
            const taskText = taskInput.value.trim();
            const taskItem = createTaskElement(taskText);
            taskList.appendChild(taskItem);
            saveTask(taskText); // Save task to localStorage
            taskInput.value = ""; // Clear the input
        }
    });

    // Allow pressing Enter to add task
    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTaskButton.click();
        }
    });

    // Create task list item
    function createTaskElement(taskText) {
        const taskItem = document.createElement("li");
        taskItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");

        // Create checkbox
        const taskCheckbox = document.createElement("input");
        taskCheckbox.type = "checkbox";
        taskCheckbox.classList.add("form-check-input", "me-2");

        // Create task label
        const taskLabel = document.createElement("span");
        taskLabel.classList.add("task-label");
        taskLabel.textContent = taskText;

        // Create delete button
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("btn", "btn-danger", "btn-sm");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
            taskItem.remove();
            removeTaskFromStorage(taskText); // Remove task from localStorage
        });

        taskItem.appendChild(taskCheckbox);
        taskItem.appendChild(taskLabel);
        taskItem.appendChild(deleteButton);

        return taskItem;
    }

    // Save task to localStorage
    function saveTask(taskText) {
        let tasks = localStorage.getItem("tasks");
        tasks = tasks ? JSON.parse(tasks) : [];
        tasks.push(taskText);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Remove task from localStorage
    function removeTaskFromStorage(taskText) {
        let tasks = localStorage.getItem("tasks");
        tasks = tasks ? JSON.parse(tasks) : [];
        tasks = tasks.filter(task => task !== taskText);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Load tasks from localStorage
    function loadTasks() {
        let tasks = localStorage.getItem("tasks");
        tasks = tasks ? JSON.parse(tasks) : [];
        tasks.forEach(function(taskText) {
            const taskItem = createTaskElement(taskText);
            taskList.appendChild(taskItem);
        });
    }
});
