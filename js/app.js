// Problem: User interaction doesn't provide desired results.
// Solution: Add interactivity so the user can manage daily tasks

var taskInput = document.getElementById('new-task') // new-task
var addButton = document.getElementsByTagName('button')[0] // first button
var incompleteTaskHolder = document.getElementById('incomplete-tasks') //incomplete-tasks
var completedTaskHolder = document.getElementById('completed-tasks') //completed-tasks

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
	console.log("Add task...")
	// Create a new list item with the text from #new-task:
	var taskString = taskInput.value
	var listItem = createNewTaskElement(taskString)
	taskInput.value = ''
	//Append listItem to incompleteTaskholder
	incompleteTaskHolder.appendChild(listItem)
	bindTaskEvents(listItem, completedTask)
}

var editTask = function (){
	console.log("Edit task...")
// Edit an existing task
	// When the Edit button is pressed
		// if the class of the parent is .editMode
			//  Switch from .editMode
			//  label text becomes the input's value
		// else
			//Switch to editMode
			//input value becomes label's text
			
		//Toggle .editMode on the parent
}

// Delete an existing task
var deleteTask = function () {
	console.log("Delete task...")
	// Remove the parent list item from the ul
	var listItem = this.parentNode
	var ul = listItem.parentNode
	ul.removeChild(listItem)
}

// Mark a task as complete
var completedTask = function () {
	console.log("Completed task...")
	//Append the task list item to the #complete-tasks
	var listItem = this.parentNode
	completedTaskHolder.appendChild(listItem)
	bindTaskEvents(listItem, incompleteTask)
}

// Mark a task as incomplete
var incompleteTask = function () {
	console.log("Incomplete task...")
	// Append the task list item to the #incomplete-tasks
	var listItem = this.parentNode
	incompleteTaskHolder.appendChild(listItem)
	bindTaskEvents(listItem, completedTask)
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
	console.log('Bind list item events...')
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