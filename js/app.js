// Consider: \
// adding validation when editing
// disabling edit on completed tasks

var taskInput = document.getElementById('new-task') // new-task
var addButton = document.getElementsByTagName('button')[0] // first button
var incompleteTaskHolder = document.getElementById('incomplete-tasks') //incomplete-tasks
var completedTaskHolder = document.getElementById('completed-tasks') //completed-tasks
var error = document.getElementById('errorMsg')

var createNewTaskElement = function(taskString){
	//create List Item
	var listItem = document.createElement('li')
	// input (checkbox)
	var checkBox = document.createElement('input')
	// label
	var label = document.createElement('label')
	// input (text)
	var editInput = document.createElement('input')
	// button.edit
	var editButton = document.createElement('button')
	// button.delete
	var deleteButton = document.createElement('button')	
	// Each elements needs modifying	
	checkBox.type = 'checkbox'
	editInput.type = 'text'
	label.innerText = taskString
	// label.innerText = taskString

	editButton.className = 'edit'
	editButton.innerHTML = 'Edit'
	deleteButton.className = 'delete'
	deleteButton.innerHTML = 'Delete'
	
	// Each elements needs appending
	listItem.appendChild(checkBox)
	listItem.appendChild(label)
	listItem.appendChild(editInput)
	listItem.appendChild(editButton)
	listItem.appendChild(deleteButton)	
	
	return listItem
}

// Add a new task
var addTask = function(){
	if (taskInput.value !== ''){
	// Create a new list item with the text from #new-task:
	var listItem = createNewTaskElement(taskInput.value)
	taskInput.value = ''
	error.innerText = ''
	//Append listItem to incompleteTaskholder
	incompleteTaskHolder.appendChild(listItem)
	bindTaskEvents(listItem, completedTask)
	} else {
		error.innerText = "Please enter a task first"
	}
}

// Edit an existing task
var editTask = function (){
	var listItem = this.parentNode
	var editInput = listItem.querySelector('input[type=text]')
	var label = listItem.querySelector('label')

	// if the class of the parent is .editMode
	var containsClass = listItem.classList.contains('editMode')
	if (containsClass) {
		//  Switch from .editMode
		listItem.querySelector('button.edit').innerText = 'Edit'
		//  label text becomes the input's value
		 label.innerText = editInput.value
	} else {
		//Switch to editMode
		listItem.querySelector('button.edit').innerText = 'Save'
		//input value becomes label's text
		editInput.value = label.innerText
	}
	//Toggle .editMode on the parent
	listItem.classList.toggle('editMode')
}

// Delete an existing task
var deleteTask = function () {
	// Remove the parent list item from the ul
	var listItem = this.parentNode
	var ul = listItem.parentNode
	ul.removeChild(listItem)
}

// Mark a task as complete
var completedTask = function () {
	//Append the task list item to the #complete-tasks
	var listItem = this.parentNode
	completedTaskHolder.appendChild(listItem)
	bindTaskEvents(listItem, incompleteTask)
}

// Mark a task as incomplete
var incompleteTask = function () {
	// Append the task list item to the #incomplete-tasks
	var listItem = this.parentNode
	incompleteTaskHolder.appendChild(listItem)
	bindTaskEvents(listItem, completedTask)
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
	//select taskListItem's children
	var checkBox = taskListItem.querySelector('input[type=checkbox]'),
		editButton = taskListItem.querySelector('button.edit'),
		deleteButton = taskListItem.querySelector('button.delete')	
	//bind checkBoxEventHandler to checkbox
	checkBox.onchange = checkBoxEventHandler
	//bind editTask to edit button
	editButton.onclick = editTask
	//bind deleteTask to delete button
	deleteButton.onclick = deleteTask
}

//set the click handler to the addTask function
addButton.addEventListener('click', addTask)
taskInput.addEventListener('keyup', function(event){
	if(event.keyCode == 13){
		addButton.click()
		console.log("running enter on keyup")
	}
})
//Alternate way
//addButton.onlick = addTask

// Cycle over incompleteTaskHolder ul list items
for(var i = 0; i < incompleteTaskHolder.children.length; i++){
	//bind events to list item's children (completedTask)
	bindTaskEvents(incompleteTaskHolder.children[i], completedTask)
}
		

// Cycle over completedTaskHolder ul list items
for(var i = 0; i < completedTaskHolder.children.length; i++){
	//bind events to list item's children (incompleteTask)
	bindTaskEvents(completedTaskHolder.children[i], incompleteTask)
}