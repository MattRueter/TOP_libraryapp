import _ from 'lodash';
import './styles.css';
export {toDoList};
import './DOM.js';


let toDoList = [
	{itemTitle:'Food Shopping', folder:'General', priority:'medium',deadline:'today', completed:'',notes:'Take Victoria with you.'},
	{itemTitle:'Cook dinner', folder: 'General', priority:'medium', deadline:'today', completed: '', notes:'make 4 servings'},
	{itemTitle:'Lunch', folder:'Nutrition', priority:'high', deadline:'today', completed:'',notes:''}

];

function taskConstructor (itemTitle,folder,priority,label,deadline,completed,notes) {
	this.itemTitle = itemTitle;
	this.folder = folder;
	this.priority = priority;
	this.label = label;
	this.deadline = deadline;
	this.completed = completed;
	this.notes = notes;

	toDoList.push(this);

}

const addTaskBtn = document.querySelector('#addItemBtn');
	addTaskBtn.addEventListener('click', () => {
		
		const addItemBox = document.querySelector('.addItemBox');
			addItemBox.classList.add('addItemBoxShow');
			const addItemBoxShow = document.querySelector('.addItemBoxShow');

		const cancelBtn = document.querySelector('#cancel');
			cancelBtn.addEventListener('click', () => {       
				addItemBoxShow.classList.remove('addItemBoxShow');
				
					
				
				
			})

		//let task = new taskConstructor('Lunch','Nutrition','HIGH', 'today',','');
		//console.log(toDoList);
	})


