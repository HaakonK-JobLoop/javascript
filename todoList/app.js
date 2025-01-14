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
  // Trigger error if task is empty
  if (!formData.get("user-input")) {
    showError("You can't submit an empty task");
    return;
  }
  // Lager nytt task object of pusher til tasks array
  tasks.push({
    timeStamp: new Date().toLocaleString("en-UK"),
    description: formData.get("userInput"),
    completed: false,
  });
  renderList(tasks);
  saveStateToLocalStorage();
});

function showError(message) {
  const modal = document.createElement("dialog");

  const errorMsg = document.createElement("p");
  errorMsg.textContent = message;
  const closeModal = document.createElement("button");
  closeModal.textContent = "Got it";
  modal.append(errorMsg, closeModal);
  document.body.append(modal);

  modal.showModal();
  window.addEventListener("click", () => {
    modal.close();
    window.removeEventListener("click", arguments.callee);
  });
}

showCompleted.addEventListener("change", () => {
  renderList(tasks);
});

sortBy.addEventListener("change", () => {
  renderList(tasks);
});

function renderList(taskArr) {
  // Clear local storage if task array is empty
  if (taskArr.length === 0) {
    localStorage.removeItem("tasks");
    localStorage.removeItem("showCompleted");
    localStorage.removeItem("sortBy");
  }
  buildList(filterAndSort(taskArr));
}

function filterAndSort(arr) {
  return arr
    .filter((e) => (!showCompleted.checked ? !e.completed : e))
    .sort((a, b) => {
      if (sortBy.value === "time-asc") {
        return new Date(a.timeStamp) - new Date(b.timeStamp);
      } else if (sortBy.value === "time-desc") {
        return new Date(b.timeStamp) - new Date(a.timeStamp);
      } else if (sortBy.value === "alpha-asc") {
        return b.description.localeCompare(a.description);
      } else if (sortBy.value === "alpha-desc") {
        return a.description.localeCompare(b.description);
      }
    });
}

function buildList(taskArr) {
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
