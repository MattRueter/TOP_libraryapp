import {toDoList} from './index.js';
import {toggleAddModifyItemBox} from './index.js';
export {showAllTasks};
export {modify};
const display = document.querySelector('.display');



//When the user clicks 'show all tasks' this calls () which loops over
//toDoList anc creates individual cards per item on master list.

const showTasks = document.querySelector('#taskBtn');
	showTasks.addEventListener('click', () =>{

		showAllTasks();
	});


function showAllTasks(){
	
	clearTasks(); //to avoid duplicating list on UI

	toDoList.forEach(item => {  //this could be turned into a function 'toDoList' could be the argument eg function(array), 
								//this way it could be called with const mapped from original array using 
								//folder Keys or from the entire array as here
		
	const taskItem = document.createElement('div');
		taskItem.classList.add('taskItem');
		display.appendChild(taskItem);
		taskItem.addEventListener('click', () => {
			
			toggleAddModifyItemBox(modify, 'modify');
			
		});

			const leftContainer = document.createElement('div');
			leftContainer.classList.add('.leftContainer');
			taskItem.appendChild(leftContainer);

				const title = document.createElement('div');
				title.classList.add('title');
				leftContainer.appendChild(title);
				title.textContent = item.itemTitle;

				const date = document.createElement('div');
				date.classList.add('date');
				leftContainer.appendChild(date);
				date.textContent = item.deadline;
			
			const rightContainer = document.createElement('div');
			rightContainer.classList.add('rightContainer');
			taskItem.appendChild(rightContainer);

				const folderRef = document.createElement('div');
				folderRef.classList.add('folderRef');
				rightContainer.appendChild(folderRef);
				folderRef.textContent = item.folder;

			
				const labelRef = document.createElement('div');
				labelRef.classList.add('labelRef');
				rightContainer.appendChild(labelRef);
				labelRef.textContent = item.priority;

				
				
				const markComplete = document.createElement('div');
				markComplete.classList.add('markComplete');
				rightContainer.appendChild(markComplete);
				markComplete.textContent = 'done';

				const deleteBtn = document.createElement('div');
				deleteBtn.classList.add('delete');
				rightContainer.appendChild(deleteBtn);
				deleteBtn.textContent = 'X';
	});
}	

function clearTasks () {
	while(display.firstElementChild.nextElementSibling){  //firstElementChild is ADD ITEM FORM as it is always there though hidden.
		display.removeChild(display.firstElementChild.nextElementSibling);
	}
}



//this function is called by clicking a task. It switches the id of the add button and then switches it back a the end.
function modify () {
	
		
		console.log('clicking modify');
		// will need to update current task item in the array.
		//..and then display tasks in current folder
};