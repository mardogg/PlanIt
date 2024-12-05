// DEVELOPER: Marwa Monsour, IS117-001, Fall 2024

document.addEventListener("DOMContentLoaded", function() {
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();

    const calendarBody = document.getElementById("calendar-body");

    let row = document.createElement("tr");
    calendarBody.appendChild(row);

    // empty cells for days before the 1st
    for (let i = 0; i < firstDay; i++) {
        row.appendChild(document.createElement("td"));
    }

    // days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        let dayCell = document.createElement("td");
        dayCell.textContent = day;
        dayCell.classList.add("text-center");
        
        // click event for each day
        dayCell.addEventListener("click", function() {
            const previouslySelected = document.querySelector(".selected");
            if (previouslySelected) {
                previouslySelected.classList.remove("selected");
            }
            dayCell.classList.add("selected");
            alert("You selected: " + day);
        });

        row.appendChild(dayCell);

        // new row at the end of the week
        if ((firstDay + day) % 7 === 0) {
            row = document.createElement("tr");
            calendarBody.appendChild(row);
        }
    }
});
