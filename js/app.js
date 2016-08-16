// Problem: User interaction doesn't provide desired results.
// Solution: Add interactivity so the user can manage daily tasks

var taskInput = document.getElementById('new-task').value // new-task
var addButton = document.getElementsByTagName('button')[0] // first button
var incompleteTaskHolder = document.getElementById('incomplete-tasks') //incomplete-tasks
var completedTaskHolder = document.getElementById('completed-tasks') //completed-tasks

// Add a new task
var addTask = function(){
	console.log("Add task...")
	// When the button is pressed
	// Create a new list item with the text from #new-task:
		// input (checkbox)
		// label
		// input (text)
		// button.edit
		// button.delete
		// Each elements, needs modified and appended
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
	//select it's children
		//bind editTask to edit button
		//bind deleteTask to delete button
		//bind checkBoxEventHandler to checkbox
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
for(var i = 0; i < incompleteTaskHolder.children.length; i++){
	//bind events to list item's children (incompleteTask)
	bindTaskEvents(completedTaskHolder.children[i], incompleteTask)
}

