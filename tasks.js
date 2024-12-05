// DEVELOPER: Marwa Monsour, IS117-001, Fall 2024

document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
    const addTaskButton = document.getElementById("add-task");

   
    loadTasks();

    
    addTaskButton.addEventListener("click", function() {
        if (taskInput.value.trim() !== "") {
            const taskText = taskInput.value.trim();
            const taskItem = createTaskElement(taskText);
            taskList.appendChild(taskItem);
            saveTask(taskText); // Save task to localStorage
            taskInput.value = ""; // Clear the input
        }
    });

    
    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTaskButton.click();
        }
    });

    
    function createTaskElement(taskText) {
        const taskItem = document.createElement("li");
        taskItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");

        
        const taskCheckbox = document.createElement("input");
        taskCheckbox.type = "checkbox";
        taskCheckbox.classList.add("form-check-input", "me-2");

        
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        const checked = tasks.includes(taskText);
        taskCheckbox.checked = checked;

        
        const taskLabel = document.createElement("span");
        taskLabel.classList.add("task-label");
        taskLabel.textContent = taskText;

        
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("btn", "btn-danger", "btn-sm");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
            taskItem.remove();
            removeTaskFromStorage(taskText); // Remove task from localStorage
        });

        taskCheckbox.addEventListener("change", function() {
            toggleTaskChecked(taskText, taskCheckbox.checked);
        });

        taskItem.appendChild(taskCheckbox);
        taskItem.appendChild(taskLabel);
        taskItem.appendChild(deleteButton);

        return taskItem;
    }


    function saveTask(taskText) {
        let tasks = localStorage.getItem("tasks");
        tasks = tasks ? JSON.parse(tasks) : [];
        tasks.push(taskText);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    
    function removeTaskFromStorage(taskText) {
        let tasks = localStorage.getItem("tasks");
        tasks = tasks ? JSON.parse(tasks) : [];
        tasks = tasks.filter(task => task !== taskText);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    
    function loadTasks() {
        let tasks = localStorage.getItem("tasks");
        tasks = tasks ? JSON.parse(tasks) : [];
        tasks.forEach(function(taskText) {
            const taskItem = createTaskElement(taskText);
            taskList.appendChild(taskItem);
        });
    }

    
    function toggleTaskChecked(taskText, checked) {
        let tasks = localStorage.getItem("tasks");
        tasks = tasks ? JSON.parse(tasks) : [];
        if (checked) {
            tasks.push(taskText);
        } else {
            tasks = tasks.filter(task => task !== taskText);
        }
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
});
