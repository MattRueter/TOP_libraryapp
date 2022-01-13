import _ from 'lodash';
import './styles.css';
import './DOM.js';
import {showAllTasks} from './DOM.js';
import {modify} from './DOM.js';
export {toDoList};
export {toggleAddModifyItemBox};

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

}

//allows user to click the 'add item' button on the menu to open up form for creating task.
const addTaskBtn = document.querySelector('#addItemBtn');
	addTaskBtn.addEventListener('click', () => {
		
		toggleAddModifyItemBox('Add');
		activateAddButton();
});




//This is used for both adding an item and modifying an existing item. (add item button OR clicking on a task calls it)
//It 1)displays the form 
//2)labels the button 
//3) creates 'click' eventL's and then 
//4)closes box &removes eventL's


function toggleAddModifyItemBox(label){			
//makes add form box visible
	const addItemBox = document.querySelector('.addItemBox');
		addItemBox.classList.add('addItemBoxShow');
	
//labels add/modify button correctly
	const addBtn = document.querySelector('#add');
		addBtn.textContent = label//labels the button correctly	
		
		//addBtn.addEventListener('click', addORmodfunction); //this will assign either 'add' or 'modify' to button depending on which is passed into current ().

//hides add form box & removes eventListenr on ADD button (this avoids duplicating event and allows other events to assign to it)
	const cancelBtn = document.querySelector('#cancel');
		cancelBtn.addEventListener('click', () => {   
			addItemBox.classList.remove('addItemBoxShow');
			//addBtn.removeEventListener('click', addORmodfunction); //this removes the current EventListener 
		});	
};

function activateAddButton () {
	const addBtn = document.querySelector('#add');
	const cancelBtn = document.querySelector('#cancel');

	addBtn.addEventListener('click', add);
	cancelBtn.addEventListener('click', () =>{
		addBtn.removeEventListener('click', add);
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