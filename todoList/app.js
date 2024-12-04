const taskForm = document.querySelector("#taskForm");
const taskInput = document.querySelector("#userInput");
const listContainer = document.querySelector("#listContainer");

let tasks = [];

taskForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Hindrer refresh
  const formData = new FormData(taskForm); // Lagrer form data
  tasks.push({
    timeStamp: new Date().toLocaleString("en-UK"),
    description: formData.get("userInput"),
    completed: false,
  }); // Lager nytt task object of pusher til tasks array
  renderList(tasks);
});

function renderList(taskArr) {
  taskArr.forEach((task) => {
    // Make the task container
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("taskContainer");
    // Make the timestamp
    const timeStampElem = document.createElement("p");
    timeStampElem.classList.add("timestamp");
    timeStampElem.textContent = task.timeStamp;
    // Make the task description
    const descriptionElem = document.createElement("p");
    descriptionElem.classList.add("description");
    descriptionElem.textContent = task.description;
    // Add task-completed checkbox
    const completedElem = document.createElement("input");
    completedElem.type = "checkbox";
    completedElem.checked = task.completed;
    // Add edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit-button");
    // Add delete-button
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
