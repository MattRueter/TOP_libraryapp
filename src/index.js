import _ from 'lodash';
import './styles.css';
//import './DOM.js';
//import {showAllTasks} from './DOM.js';
//import {modify} from './DOM.js';
//export {toDoList};
//export {toggleAddModifyItemBox};


//GLOBALS (eventually reduce as much as possible)
const display = document.querySelector('.display');
let currentTask ={};
let toDoList = [
	{itemTitle:'Food Shopping', folder:'General', priority:'MEDIUM',deadline:'20/01/2022', notes:'Take Victoria with you.', completed:''},
	{itemTitle:'Cook dinner', folder: 'General', priority:'MEDIUM', deadline:'22/01/2022', notes:'make 4 servings', completed: ''},
	{itemTitle:'Lunch', folder:'Nutrition', priority:'HIGH', deadline:'05/01/2022', notes:'', completed:''}
];

function taskConstructor (itemTitle,folder,priority,deadline,completed,notes) {
	this.itemTitle = itemTitle;
	this.folder = folder;
	this.priority = priority;
	this.deadline = deadline;
	this.notes = notes;
	this.completed = completed;

	this.push = function(){
	
		toDoList.push(this);
	}

	this.modify = function () {
		console.log(this.itemTitle+ ' is fun.');
	}

}


//const item = new taskConstructor('exercise','general','high','today','','');
//item.push();



////////////////  MENU BUTTONS /////////////

// 1) allows user to click the 'add item' button on the menu to open up form for creating task.
const addTaskBtn = document.querySelector('#addItemBtn');
	addTaskBtn.addEventListener('click', () => {
		
		
		toggleAddModifyItemBox('Add');
		activateAddButton();
	});

// 2) When the user clicks 'show all tasks' this calls () which loops over
//toDoList anc creates individual cards per item on master list.
	
const showTasks = document.querySelector('#taskBtn');
	showTasks.addEventListener('click', () =>{
	
		showAllTasks();
	});
	





//Existing HTML. This function displays the form for adding/modifying tasks.
function toggleAddModifyItemBox(label){			
//makes add form box visible
	const addItemBox = document.querySelector('.addItemBox');
		addItemBox.classList.add('addItemBoxShow');
	
//labels add/modify button correctly
	const addBtn = document.querySelector('#add');
		addBtn.textContent = label//labels the button correctly	
		
//hides add form box & removes eventListenr on ADD button (this avoids duplicating event and allows other events to assign to it)
	const cancelBtn = document.querySelector('#cancel');
		cancelBtn.addEventListener('click', () => {   
			addItemBox.classList.remove('addItemBoxShow');
			
		});	
			
};






//These two functions add and then remove functionality to 'add' button depending on how it is opened. (a lot is repeated here ...reduce).
function activateAddButton () {
	const addBtn = document.querySelector('#add');
	const cancelBtn = document.querySelector('#cancel');

	addBtn.addEventListener('click', add);
	cancelBtn.addEventListener('click', () =>{
		addBtn.removeEventListener('click', add);
	});
}

function activateModifyButton (item) {
	const addBtn = document.querySelector('#add');
	const cancelBtn = document.querySelector('#cancel');

	addBtn.addEventListener('click', modify);
	cancelBtn.addEventListener('click', () => {

		addBtn.removeEventListener('click', modify);
	});
}




//sends user input into array of 'to do items' i.e. this creates a new task from the user input.	
function add(){			
					
	const title = document.querySelector('#title');
	const folder = document.querySelector('#folder');
	const priority = document.querySelector('#priority');
	const deadline = document.querySelector('#deadline');
	const comments = document.querySelector('#comments');
	
	let task = new taskConstructor(title.value, folder.value, priority.value, deadline.value, '', comments.value);
		
		task.push();

		title.value = '';
		folder.value = '';
		priority.value ='';
		deadline.value = '';
		comments.value = '';
				
		showAllTasks();
	};




//This is called when 'Show All Tasks' button is clicked. It displays all tasks. (similar logic might be used to call tasks in folders DRY)
	function showAllTasks(){
		
		clearTasks(); 
		
		toDoList.forEach(item => {   
		
	

		const taskItem = document.createElement('div');
			taskItem.classList.add('taskItem');
			display.appendChild(taskItem);
		
	
				const leftContainer = document.createElement('div');
				leftContainer.classList.add('leftContainer');
				taskItem.appendChild(leftContainer);
				leftContainer.addEventListener('click', () => {
					currentTask = item;

				populateFields(Object.values(item));
				toggleAddModifyItemBox('modify');
				activateModifyButton ();
				})
	
					const leftTitleContainer = document.createElement('div');
					leftTitleContainer.classList.add('leftLeft');
					leftContainer.appendChild(leftTitleContainer);

						const title = document.createElement('div');
						title.classList.add('title');
						leftTitleContainer.appendChild(title);
						title.textContent = item.itemTitle;
		
						const date = document.createElement('div');
						date.classList.add('date');
						leftTitleContainer.appendChild(date);
						date.textContent = item.deadline;
				
					const rightLabelContainer = document.createElement('div');
					rightLabelContainer.classList.add('rightRight');
					leftContainer.appendChild(rightLabelContainer);

						const folderRef = document.createElement('div');
						folderRef.classList.add('folderRef');
						rightLabelContainer.appendChild(folderRef);
						folderRef.textContent = item.folder;
		
					
						const labelRef = document.createElement('div');
						labelRef.classList.add('labelRef');
						rightLabelContainer.appendChild(labelRef);
						labelRef.textContent = item.priority;

				const rightContainer = document.createElement('div');
				rightContainer.classList.add('rightContainer');
				taskItem.appendChild(rightContainer);
	
					
	
					
					
					const markComplete = document.createElement('div');
					markComplete.classList.add('markComplete');
					rightContainer.appendChild(markComplete);
					markComplete.textContent = 'done';
	
					const deleteBtn = document.createElement('div');
					deleteBtn.classList.add('delete');
					rightContainer.appendChild(deleteBtn);
					deleteBtn.textContent = 'X';
					deleteBtn.addEventListener('click', () => {
						
						currentTask = item;
						deleteTask();
				
					});
		});
	}	
	


	function clearTasks () {
		while(display.firstElementChild.nextElementSibling){  //firstElementChild is ADD ITEM FORM as it is always there though hidden.
			display.removeChild(display.firstElementChild.nextElementSibling);
		}
	}
	
	
	
	
	//this function is called when clicking a task. it Populates the fields with the current task.
	function populateFields (item) {
		const title = document.querySelector('#title');
		const folder = document.querySelector('#folder');
		const priority = document.querySelector('#priority');
		const deadline = document.querySelector('#deadline');
		const comments = document.querySelector('#comments');
	
			let values = item;
			//console.log(values);
	
	
				title.value = values[0];
				folder.value = values[1];
				priority.value =values[2];
				deadline.value = values[3];
				comments.value = values[4];

				
				const cancelBtn = document.querySelector('#cancel');
					cancelBtn.addEventListener('click', () => {
				
						title.value = '';
						folder.value = '';
						priority.value = '';
						deadline.value = '';
						comments.value = '';
	
					})
	}
	
	//this function is called by clicking the modify button in the form. And makes changes to the array/then displays tasks.
	function modify () {


		const inputTitle = document.querySelector('#title');
		const inputFolder = document.querySelector('#folder');
		const inputPriority = document.querySelector('#priority');
		const inputDeadline = document.querySelector('#deadline');
		const inputComments = document.querySelector('#comments');
		
	
	currentTask.itemTitle = inputTitle.value; 
	currentTask.folder = inputFolder.value;
	currentTask.priority = inputPriority.value;
	currentTask.deadline = inputDeadline.value;
	currentTask.comments = inputComments.value; 

			
	showAllTasks();
			
	};
	
	function deleteTask () {
		
		//get the index of currentTask in toDoList and pass it below to 'splice'
		const searchForIndex = (element) => element == currentTask;
		const index = toDoList.findIndex(searchForIndex);

		toDoList.splice(index, 1);
		
		showAllTasks();
		
	}
	