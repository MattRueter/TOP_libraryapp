let taskItemArray = [
	{itemTitle:'Food Shopping', folder:'General', priority:'medium',deadline:'today', completed:'',notes:'Take Victoria with you.'},
	{itemTitle: 'Cook dinner', folder: 'General', priority:'medium', deadline:'today', completed: '', notes:'make 4 servings'}
];

const display = document.querySelector('.display');


//This creates an task item (Could probably be much simpler).
const showTasks = document.querySelector('#taskBtn');
	showTasks.addEventListener('click', () =>{
		showAllTasks();
	});



function showAllTasks(){
	taskItemArray.forEach(item => {
		
	
	const taskItem = document.createElement('div');
		taskItem.classList.add('taskItem');
		display.appendChild(taskItem);

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
