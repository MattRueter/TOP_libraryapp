
const display = document.querySelector('.display');


//This creates an task item (Could probably be much simpler).
const showTasks = document.querySelector('#taskBtn');
	showTasks.addEventListener('click', () =>{
		
		const taskItem = document.createElement('div');
		taskItem.classList.add('taskItem');
		display.appendChild(taskItem);

			const leftContainer = document.createElement('div');
			leftContainer.classList.add('.leftContainer');
			taskItem.appendChild(leftContainer);

				const title = document.createElement('div');
				title.classList.add('title');
				leftContainer.appendChild(title);
				title.textContent = 'Get me from Array';

				const viewDetails = document.createElement('div');
				viewDetails.classList.add('viewDetails');
				leftContainer.appendChild(viewDetails);
				viewDetails.textContent = 'View details';
			
			const rightContainer = document.createElement('div');
			rightContainer.classList.add('rightContainer');
			taskItem.appendChild(rightContainer);

				const folderRef = document.createElement('div');
				folderRef.classList.add('folderRef');
				rightContainer.appendChild(folderRef);
				folderRef.textContent = 'Folder:';

					const folder = document.createElement('div');
					folder.setAttribute('id','folder');
					folderRef.appendChild(folder);
					folder.textContent ='get from array';
				
				const labelRef = document.createElement('div');
				labelRef.classList.add('labelRef');
				rightContainer.appendChild(labelRef);
				labelRef.textContent = 'Label:';

					const label = document.createElement('div');
					label.setAttribute('id', 'label');
					labelRef.appendChild(label);
					label.textContent = 'get label from array';
				
				const markComplete = document.createElement('div');
				markComplete.classList.add('markComplete');
				rightContainer.appendChild(markComplete);
				markComplete.textContent ='Completed';

				const deleteBtn = document.createElement('div');
				deleteBtn.classList.add('delete');
				rightContainer.appendChild(deleteBtn);
				deleteBtn.textContent = 'DELETE';		
	});

