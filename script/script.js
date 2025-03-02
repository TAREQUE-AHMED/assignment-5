
        // Add an event listener to the action button
        const actionButton = document.querySelector('.action-button');

        actionButton.addEventListener('click', function() {
            // Generate a random color
            const randomColor = getRandomColor();
            // Change the background color of the body
            document.body.style.backgroundColor = randomColor;
        });

        // Function to generate a random color
        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        // Function to set the current date
        function setCurrentDate() {
            const dateElement = document.getElementById('date-full');
            const dayElement = document.getElementById('date-day');
            
            const today = new Date();
            const dayOfWeek = today.toLocaleString('en-us', { weekday: 'short' });
            const day = today.getDate();
            const month = today.toLocaleString('en-us', { month: 'short' });
            const year = today.getFullYear();
            
            // Set the date in the format "Wed , Jul 28 2025"
            dayElement.textContent = `${dayOfWeek} ,`;
            dateElement.textContent = `${month} ${day} ${year}`;
        }

        // Call the function to set the date when the page loads
        setCurrentDate();



        document.addEventListener("DOMContentLoaded", function () {
    const completeButtons = document.querySelectorAll(".complete-button");
    const taskCountElement = document.querySelector(".task-count");
    const activityLog = document.querySelector(".activity-log");
    const taskCountNumber = document.querySelector(".task-count-number"); // Select the strong element

    let totalTasks = completeButtons.length; // Total number of tasks
    let completedTasks = 23; // Track completed tasks
    let assignedTasks = parseInt(taskCountNumber.textContent); // Get the initial number of assigned tasks

    completeButtons.forEach((button) => {
        button.addEventListener("click", function () {
            // Get the task title (h3 text only)
            const taskTitle = this.closest(".card").querySelector("h3").textContent;

            // Get the current date and time
            const currentDate = new Date();
            const dateOptions = {
                weekday: 'short', year: 'numeric', month: 'short', day: 'numeric',
                hour: '2-digit', minute: '2-digit', second: '2-digit'
            };
            const formattedDate = currentDate.toLocaleString('en-US', dateOptions);

            // Show pop-up for task completion
            alert(`Board update successfully`);

            // Add task title and date to Activity Log in real-time
            addToActivityLog(`you have complete the task ${taskTitle} - Completed on ${formattedDate}`);

            // Increase Task Count
            completedTasks++;
            taskCountElement.textContent = completedTasks;

            // Decrease the assigned task count when a task is completed
            if (assignedTasks > 0) {
                assignedTasks--;
                taskCountNumber.textContent = assignedTasks; // Update the number in the task assigned section
            }

            // Disable the button after clicking
            this.disabled = true;
            this.style.backgroundColor = "#ccc"; // Indicate it's disabled
            this.textContent = "Done";

            // Check if all tasks are completed
            if (completedTasks === totalTasks) {
                setTimeout(() => {
                    alert("🎉 Congratulations! You have completed all the tasks!");
                    addToActivityLog("🎉 Congratulations! You completed all the tasks!", true);
                }, 500);
            }
        });
    });

    // Function to add messages to Activity Log in real-time
    function addToActivityLog(message, isCongrats = false) {
        const activityItem = document.createElement("h3"); // Use h3 tag
        activityItem.classList.add("activity-item");
        activityItem.textContent = message;

        // Style the congratulatory message differently
        if (isCongrats) {
            activityItem.style.backgroundColor = "#4CAF50";
            activityItem.style.color = "white";
            activityItem.style.fontWeight = "bold";
            activityItem.style.padding = "10px";
            activityItem.style.borderRadius = "5px";
            activityItem.style.textAlign = "center";
        }

        activityLog.appendChild(activityItem);
    }

    // Add event listener for the "Clear History" button
    const clearHistoryButton = document.querySelector(".clear-btn");

    clearHistoryButton.addEventListener("click", function () {
        // Clear all activity log items
        activityLog.innerHTML = '';
    });
});

// Add event listener to the "Discover Something New Today!" section
document.querySelector(".highlight-box").addEventListener("click", function () {
    window.location.href = "inside.html"; // Replace with your actual HTML file
});


  

    