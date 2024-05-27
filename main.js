// let input = document.querySelector('input');
// let button = document.querySelector('button');

// button.addEventListener('click', (event) => {
//     event.preventDefault();

//     let task = document.createElement('div');
//     // task.textContent = input.value;

//     let taskText = document.createElement('div');
//     taskText.textContent = input.value;

//     let taskComplete = document.createElement('div');
//     taskComplete.textContent = '☑';

//     let taskClose = document.createElement('div');
//     taskClose.textContent = '❌'

//     let taskEdit = document.createElement('div');
//     taskEdit.textContent = 'Edit';

//     let taskEditDiv = document.createElement('div');

//     let taskEditDivForm = document.createElement('form');

//     let taskEditDivInput = document.createElement('input');

//     let taskEditDivBtn = document.createElement('button')
//     taskEditDivBtn.innerText = 'Save';

//     if (input.value.length >= 1) {
//         document.body.appendChild(task);
//         task.classList.add('taskDiv');

//         task.appendChild(taskText);

//         task.appendChild(taskComplete);
//         taskComplete.classList.add('taskDivComplete');

//         task.appendChild(taskClose);
//         taskClose.classList.add('taskClose');

//         task.appendChild(taskEdit);
//         taskEdit.classList.add('taskEdit');

//         // console.log(input.value, 'Task Added!')

//         input.value = '';

//         taskComplete.addEventListener('click', () => {
//             task.classList.add('CompleteEffect')
//             taskComplete.textContent = '✅';
//         })

//         taskClose.addEventListener('click', () => {
//             task.style.display = 'none';
//         })  

//         taskEdit.addEventListener('click', () => {
            
//             document.body.appendChild(taskEditDiv);
//             taskEditDiv.classList.add('taskEditDiv');

//             taskEditDiv.appendChild(taskEditDivForm);

//             taskEditDivForm.appendChild(taskEditDivInput);
//             taskEditDivInput.value = taskText.innerText;

//             taskEditDivForm.appendChild(taskEditDivBtn);

//             taskEditDivBtn.addEventListener('click', (event) => {
//                 event.preventDefault();
//                 if (taskEditDivInput.value.length>=1){
//                     taskText.textContent = taskEditDivInput.value;
//                     taskEditDiv.style.display = 'none';
//                 }
//             })
            
//         })
//     }
// })  


let input = document.querySelector('input');
let button = document.querySelector('button');

let taskEditDiv = document.createElement('div');
taskEditDiv.classList.add('taskEditDiv');
taskEditDiv.style.zIndex = '1';

let taskEditDivForm = document.createElement('form');

let taskEditDivInput = document.createElement('input');

let taskEditDivBtn = document.createElement('button');
taskEditDivBtn.innerText = 'Save';

taskEditDivForm.appendChild(taskEditDivInput);
taskEditDivForm.appendChild(taskEditDivBtn);
taskEditDiv.appendChild(taskEditDivForm);
document.body.appendChild(taskEditDiv);

taskEditDiv.style.display = 'none';

button.addEventListener('click', (event) => {
    event.preventDefault();

    let task = document.createElement('div');

    let taskText = document.createElement('div');
    taskText.textContent = input.value;
    taskText.classList.add('taskText');

    let taskComplete = document.createElement('div');
    taskComplete.textContent = '☑';
    taskComplete.classList.add('taskComplete');

    let taskClose = document.createElement('div');
    taskClose.textContent = '❌';
    taskClose.classList.add('taskClose');

    let taskEdit = document.createElement('div');
    taskEdit.textContent = 'Edit';
    taskEdit.classList.add('taskEdit');

    if (input.value.length >= 1) {
        document.body.appendChild(task);
        task.classList.add('taskDiv');

        task.appendChild(taskText);
        task.appendChild(taskComplete);
        taskComplete.classList.add('taskDivComplete');
        task.appendChild(taskClose);
        taskClose.classList.add('taskClose');
        task.appendChild(taskEdit);
        taskEdit.classList.add('taskEdit');

        input.value = '';

        taskComplete.addEventListener('click', () => {
            task.classList.add('CompleteEffect');
            taskComplete.textContent = '✅';
        });

        taskClose.addEventListener('click', () => {
            task.style.display = 'none';
        });

        taskEdit.addEventListener('click', () => {
            taskEditDiv.style.display = 'flex';
            taskEditDivInput.value = taskText.innerText;

            taskEditDivBtn.onclick = (event) => {
                event.preventDefault();
                if (taskEditDivInput.value.length >= 1) {
                    taskText.textContent = taskEditDivInput.value;
                    taskEditDiv.style.display = 'none';
                    
                }
            };
        });
    }
});
