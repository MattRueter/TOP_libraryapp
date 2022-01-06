import _ from 'lodash';
import './styles.css';
export {taskItemArray};
import './DOM.js';


let taskItemArray = [
	{itemTitle:'Food Shopping', folder:'General', priority:'medium',deadline:'today', completed:'',notes:'Take Victoria with you.'},
	{itemTitle: 'Cook dinner', folder: 'General', priority:'medium', deadline:'today', completed: '', notes:'make 4 servings'}
];

function taskConstructor (title,folder,priority,label,deadline,completed,notes) {
	this.title = title;
	this.folder = folder;
	this.priority = priority;
	this.label = label;
	this.deadline = deadline;
	this.completed = completed;
	this.notes = notes;

	taskItemArray.push(this);

}

function showTask(currentTask){
	const task  = document.querySelector('.taskItem');
	const title = document.querySelector('.title');

	title.textContent=currentTask.title;

}

