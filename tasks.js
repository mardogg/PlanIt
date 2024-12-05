// DEVELOPER: Marwa Monsour, IS117-001, Fall 2024

document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
    const addTaskButton = document.getElementById("add-task");

    // Add a task
    addTaskButton.addEventListener("click", function() {
        if (taskInput.value.trim() !== "") {
            const taskText = taskInput.value.trim();
            const taskItem = document.createElement("li");
            taskItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");

            // Create the checkbox
            const taskCheckbox = document.createElement("input");
            taskCheckbox.type = "checkbox";
            taskCheckbox.classList.add("form-check-input", "me-2");

            // Create the task label
            const taskLabel = document.createElement("span");
            taskLabel.classList.add("task-label");
            taskLabel.textContent = taskText;

            // Create the delete button
            const deleteButton = document.createElement("button");
            deleteButton.classList.add("btn", "btn-danger", "btn-sm");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", function() {
                taskItem.remove();
            });

            // Append the elements
            taskItem.appendChild(taskCheckbox);
            taskItem.appendChild(taskLabel);
            taskItem.appendChild(deleteButton);

            // Append the task item to the list
            taskList.appendChild(taskItem);

            // Clear the input
            taskInput.value = "";
        }
    });

    // Allow pressing Enter to add task
    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTaskButton.click();
        }
    });
});
