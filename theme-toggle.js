document.addEventListener("DOMContentLoaded", function() {
    const themeToggleButton = document.getElementById("theme-toggle");
    const body = document.body;
    const moonIcon = '<i class="fas fa-moon"></i>';  // Moon icon for dark mode
    const sunIcon = '<i class="fas fa-sun"></i>';    // Sun icon for light mode

    // Check if dark mode is saved in localStorage
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        themeToggleButton.innerHTML = sunIcon;  // Change icon to sun
    }

    // Add event listener for the theme toggle button
    themeToggleButton.addEventListener("click", function() {
        body.classList.toggle('dark-mode');  // Toggle dark mode
        if (body.classList.contains('dark-mode')) {
            themeToggleButton.innerHTML = sunIcon;  // Show sun icon for dark mode
            localStorage.setItem('theme', 'dark');  // Save dark mode in localStorage
        } else {
            themeToggleButton.innerHTML = moonIcon;  // Show moon icon for light mode
            localStorage.removeItem('theme');  // Remove dark mode from localStorage
        }
    });
});
