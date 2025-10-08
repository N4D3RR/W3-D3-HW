// il form
const addForm = document.getElementById("addTaskForm")
// bottone che apre il form
const addButton = document.getElementById("addTaskBtn")
// la lista
const addedTasks = document.getElementById("addedTasks")

addForm.style.display = "none"

// submit del form
const formSubmit = function (e) {
  e.preventDefault()

  // input
  const taskInput = document.getElementById("titolo")
  const noteInput = document.getElementById("note")
  const dataInput = document.getElementById("dataOra")
  // valore input
  const valoreTask = taskInput.value
  const valoreNote = noteInput.value
  const valoreData = dataInput.value

  console.log(valoreTask)
  console.log(valoreNote)
  console.log(valoreData)

  //aggiungo li in ul
  const li = document.createElement("li")
  li.textContent = `${valoreTask}${valoreNote ? " - Note: " + valoreNote : ""}${
    valoreData ? " - Entro: " + valoreData : ""
  }
  `

  addedTasks.appendChild(li)

  addForm.reset()

  li.addEventListener("click", function () {
    li.classList.toggle("completed")
  })
}

//mostra/nascondi input
addForm.addEventListener("submit", formSubmit)
addButton.addEventListener("click", () => {
  if (addForm.style.display === "none") {
    addForm.style.display = "block"
  } else {
    addForm.style.display = "none"
  }
})
