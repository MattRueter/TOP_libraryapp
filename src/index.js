import _ from 'lodash';
import './styles.css';
import './DOM.js';
import {showAllTasks} from './DOM.js';
export {toDoList};

let toDoList = [
	{itemTitle:'Food Shopping', folder:'General', priority:'medium',deadline:'today', completed:'',notes:'Take Victoria with you.'},
	{itemTitle:'Cook dinner', folder: 'General', priority:'medium', deadline:'today', completed: '', notes:'make 4 servings'},
	{itemTitle:'Lunch', folder:'Nutrition', priority:'high', deadline:'today', completed:'',notes:''}

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

//listens for add button / opens add form / takes input information and creates new object 
//& sends it to 'toDoList' array.
const addTaskBtn = document.querySelector('#addItemBtn');
	addTaskBtn.addEventListener('click', () => {
		
	//makes add form box visible
		const addItemBox = document.querySelector('.addItemBox');
			addItemBox.classList.add('addItemBoxShow');
			const addItemBoxShow = document.querySelector('.addItemBoxShow');
	
	//hides add form box
		const cancelBtn = document.querySelector('#cancel');
			cancelBtn.addEventListener('click', () => {       
				addItemBoxShow.classList.remove('addItemBoxShow');
			});

});


//sends user input into array of to do items
const addBtn = document.querySelector('#add');
	addBtn.addEventListener('click', () => {

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
	});