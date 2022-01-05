import _ from 'lodash';

console.log('running with build from config');

let taskItemArray = [
	{title:'Food Shopping', folder:'General', priority:'medium',deadline:'today', completed:'',notes:'Take Victoria with you.'}
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
	const task =document.querySelector('.taskItem');
	const title=document.querySelector('.title');

	title.textContent=currentTask.title;

}
