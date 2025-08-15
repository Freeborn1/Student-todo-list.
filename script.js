document.getElementById("addBtn").addEventListener("click", function() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText !== "") {
        let li = document.createElement("li");
        li.textContent = taskText;

        // Toggle completed task
        li.addEventListener("click", function() {
            li.classList.toggle("completed");
        });

        // Delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.style.background = "transparent";
        deleteBtn.style.border = "none";
        deleteBtn.style.cursor = "pointer";
        deleteBtn.addEventListener("click", function(e) {
            e.stopPropagation();
            li.remove();
        });

        li.appendChild(deleteBtn);
        document.getElementById("taskList").appendChild(li);

        taskInput.value = "";
    }
});
