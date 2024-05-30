document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const dueDateInput = document.getElementById('due-date-input');
    const categoryInput = document.getElementById('category-input');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(taskInput.value, dueDateInput.value, categoryInput.value);
        taskInput.value = '';
        dueDateInput.value = '';
        categoryInput.value = 'work';
    });

    const addTask = (task, dueDate, category) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task} - ${category} - ${dueDate}</span>
            <div>
                <button class="complete-btn">Complete</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;
        taskList.appendChild(li);

        const completeBtn = li.querySelector('.complete-btn');
        const deleteBtn = li.querySelector('.delete-btn');

        completeBtn.addEventListener('click', () => {
            li.querySelector('span').classList.toggle('complete');
        });

        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });
    };
});
