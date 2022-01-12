import _ from 'lodash';
import './styles.css';
import './DOM.js';
import {showAllTasks} from './DOM.js';
import {modify} from './DOM.js';
export {toDoList};
export {toggleAddModifyItemBox};

let toDoList = [
	{itemTitle:'Food Shopping', folder:'General', priority:'MEDIUM',deadline:'20/01/2022', completed:'',notes:'Take Victoria with you.'},
	{itemTitle:'Cook dinner', folder: 'General', priority:'MEDIUM', deadline:'22/01/2022', completed: '', notes:'make 4 servings'},
	{itemTitle:'Lunch', folder:'Nutrition', priority:'HIGH', deadline:'05/01/2022', completed:'',notes:''}

];

function taskConstructor (itemTitle,folder,priority,deadline,completed,notes) {
	this.itemTitle = itemTitle;
	this.folder = folder;
	this.priority = priority;
	this.deadline = deadline;
	this.completed = completed;
	this.notes = notes;

	this.push = function(){
	
		toDoList.push(this);
	}

}

//allows user to click the 'add item' button on the menu to open up form for creating task.
const addTaskBtn = document.querySelector('#addItemBtn');
	addTaskBtn.addEventListener('click', () => {
		
		toggleAddModifyItemBox(add,'Add');
});

//This is used for both adding an item and modifying an existing item. (add item button OR clicking on a task calls it)
//It 1)displays the form 
//2)labels the button 
//3) creates 'click' eventL's and then 
//4)closes box &removes eventL's

function toggleAddModifyItemBox(addORmodfunction,label){
						
//makes add form box visible
	const addItemBox = document.querySelector('.addItemBox');
		addItemBox.classList.add('addItemBoxShow');
	
//activates and labels add/modify button correctly
	const addBtn = document.querySelector('#add');
		
		addBtn.textContent = label//labels the button correctly	
		addBtn.addEventListener('click', addORmodfunction); //this will assign either 'add' or 'modify' to button depending on which is passed into current ().

//hides add form box & removes eventListenr on ADD button (this avoids duplicating event and allows other events to assign to it)
	const cancelBtn = document.querySelector('#cancel');
		cancelBtn.addEventListener('click', () => {   
			addItemBox.classList.remove('addItemBoxShow');
			addBtn.removeEventListener('click', addORmodfunction); //this removes the current EventListener 
		});	
};


//sends user input into array of 'to do items' i.e. this creates a new task from the user input.	
function add(){			
					
//declare input fields for later use
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


//In DOM file
	//click a taskItem =>
	//1. opens up the modify form (same as the add form)     X
			//-fields autopopulated with taskItem info (including comments)
			//-ADD button says 'update' or something similar 
			//-ADD button event Listener changes to call another function.   X
				//2. remove other EventListenr on ADD button (or do that in the function which creates it perhaps)
				//- and clicking ADD button wil modify item in the array.
				//- and clear/show items on the page.
