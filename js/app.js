// Problem: User interaction doesn't provide desired results.
// Solution: Add interactivity so the user can manage daily tasks

var taskInput = document.getElementById('new-task').value // new-task
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
	
	// Each elements needs appending
	
	return listItem
}

// Add a new task
var addTask = function(){
	console.log("Add task...")
	// Create a new list item with the text from #new-task:
	var listItem = createNewTaskElement("Some new task")
	//Append listItem to incompleteTaskholder
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

var deleteTask = function () {
	console.log("Delete task...")
// Delete an existing task
	// When the Delete button is pressed
		// Remove the parent list item from the ul
}

var completedTask = function () {
	console.log("Completed task...")
// Mark a task as complete
	// When the Checkbox is checked
		//Append the task list item to the #complete-tasks
}

var incompleteTask = function () {
	console.log("Incomplete task...")
// Mark a task as incomplete
	//When the checkbox is unchecked
		// Append the task list item to the #incomplete-tasks
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

