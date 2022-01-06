import _ from 'lodash';
import './styles.css';
import './DOM.js';


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

