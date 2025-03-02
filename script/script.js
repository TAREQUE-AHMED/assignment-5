
        const actionButton = document.querySelector('.action-button');

        actionButton.addEventListener('click', function() {
            
            const randomColor = getRandomColor();
            
            document.body.style.backgroundColor = randomColor;
        });

        
        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        
        function setCurrentDate() {
            const dateElement = document.getElementById('date-full');
            const dayElement = document.getElementById('date-day');
            
            const today = new Date();
            const dayOfWeek = today.toLocaleString('en-us', { weekday: 'short' });
            const day = today.getDate();
            const month = today.toLocaleString('en-us', { month: 'short' });
            const year = today.getFullYear();
            
            
            dayElement.textContent = `${dayOfWeek} ,`;
            dateElement.textContent = `${month} ${day} ${year}`;
        }

        
        setCurrentDate();



        document.addEventListener("DOMContentLoaded", function () {
    const completeButtons = document.querySelectorAll(".complete-button");
    const taskCountElement = document.querySelector(".task-count");
    const activityLog = document.querySelector(".activity-log");
    const taskCountNumber = document.querySelector(".task-count-number"); 
    let totalTasks = completeButtons.length; 
    let completedTasks = 23; 
    let assignedTasks = parseInt(taskCountNumber.textContent); 

    completeButtons.forEach((button) => {
        button.addEventListener("click", function () {
            
            const taskTitle = this.closest(".card").querySelector("h3").textContent;

            
            const currentDate = new Date();
            const dateOptions = {
                weekday: 'short', year: 'numeric', month: 'short', day: 'numeric',
                hour: '2-digit', minute: '2-digit', second: '2-digit'
            };
            const formattedDate = currentDate.toLocaleString('en-US', dateOptions);

            
            alert(`Board update successfully`);

            
            addToActivityLog(`you have complete the task ${taskTitle} - Completed on ${formattedDate}`);

            
            completedTasks++;
            taskCountElement.textContent = completedTasks;

            
            if (assignedTasks > 0) {
                assignedTasks--;
                taskCountNumber.textContent = assignedTasks; 
            }

            
            this.disabled = true;
            this.style.backgroundColor = "#ccc"; 
            this.textContent = "Done";

            
            if (completedTasks === totalTasks) {
                setTimeout(() => {
                    alert("🎉 Congratulations! You have completed all the tasks!");
                    addToActivityLog("🎉 Congratulations! You completed all the tasks!", true);
                }, 500);
            }
        });
    });

    
    function addToActivityLog(message, isCongrats = false) {
        const activityItem = document.createElement("h3"); 
        activityItem.classList.add("activity-item");
        activityItem.textContent = message;

        
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

    
    const clearHistoryButton = document.querySelector(".clear-btn");

    clearHistoryButton.addEventListener("click", function () {
       
        activityLog.innerHTML = '';
    });
});


document.querySelector(".highlight-box").addEventListener("click", function () {
    window.location.href = "inside.html"; 
});


  

    