const taskForm = document.querySelector("#taskForm");
const taskInput = document.querySelector("#userInput");
const listContainer = document.querySelector("#listContainer");
const showCompleted = document.querySelector("#show-completed");
const sortBy = document.querySelector("#sort-by");

let tasks = [];

// Load data from localStorage
showCompleted.checked = localStorage.getItem("showCompleted") === "true";
sortBy.value = localStorage.getItem("sortBy");
const storedTasks = localStorage.getItem("tasks");
if (storedTasks) {
  tasks = JSON.parse(storedTasks);
  renderList(tasks);
}

taskForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Hindrer refresh
  const formData = new FormData(taskForm); // Lagrer form data
  tasks.push({
    timeStamp: new Date().toLocaleString("en-UK"),
    description: formData.get("userInput"),
    completed: false,
  }); // Lager nytt task object of pusher til tasks array
  renderList(tasks);
  saveStateToLocalStorage();
});

function renderList(taskArr) {
  // Empty list
  while (listContainer.firstChild) {
    listContainer.firstChild.remove();
  }
  taskArr.forEach((task, i) => {
    // Make the task container
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("taskContainer");
    // Make the timestamp
    const timeStampElem = document.createElement("p");
    timeStampElem.classList.add("timestamp");
    timeStampElem.textContent = task.timeStamp;
    // Make the task description
    const descriptionElem = document.createElement("input");
    descriptionElem.classList.add("description");
    descriptionElem.value = task.description;
    descriptionElem.readOnly = true;
    // Add task-completed checkbox
    const completedElem = document.createElement("input");
    completedElem.type = "checkbox";
    completedElem.checked = task.completed;
    if (task.completed) {
      taskContainer.classList.add("completed");
    }
    // Update the task array and add/remove the completed CSS class
    completedElem.addEventListener("change", () => {
      tasks[i].completed = completedElem.checked;
      saveStateToLocalStorage();
      if (task.completed) {
        taskContainer.classList.add("completed");
      } else {
        taskContainer.classList.remove("completed");
      }
    });
    // Add edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit-button");
    // Edit button clicking functionality
    editButton.addEventListener("click", () => {
      tasks[i].description = descriptionElem.value;
      saveStateToLocalStorage();
      descriptionElem.readOnly = !descriptionElem.readOnly;
      editButton.textContent = descriptionElem.readOnly ? "Edit" : "Save";
      if (!descriptionElem.readOnly) descriptionElem.focus();
    });
    // Add delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    // Appends
    taskContainer.append(
      timeStampElem,
      descriptionElem,
      completedElem,
      editButton,
      deleteButton
    );
    listContainer.prepend(taskContainer);
  });
}

function saveStateToLocalStorage() {
  // Serialize tasks array to JSON before storing to local storage
  localStorage.setItem("tasks", JSON.stringify(tasks));
  // Store boolean value of showCompleted checkbox
  localStorage.setItem("showCompleted", showCompleted.checked);
  // Store the value of the sort by select element
  localStorage.setItem("sortBy", sortBy.value);
}
