document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form')
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    // console.log(form)

    const newTaskInput = document.getElementById('new-task-description').value
    const newTasks = document.getElementById('tasks')
    const newLI = document.createElement('li')
    newLI.textContent = newTaskInput
    newTasks.appendChild(newLI)
    console.log(newLI)
    form.reset()

    const deleteButton = document.createElement('button')
    newLI.appendChild(deleteButton)
    deleteButton.style.border = '10px solid red'
    deleteButton.textContent = 'X'
    deleteButton.addEventListener('click', (event) => {
      console.log('deleteButton')
      newLI.remove()
    })
  })
});