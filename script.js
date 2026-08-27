const thumbs = document.querySelectorAll('.thumb');
const mainImage = document.getElementById('mainImage');

thumbs.forEach(img => {
    img.addEventListener('click' , () => {
            mainImage.src=img.src.replace('/300/200','/600/400');
    }
    );
});

const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', () => {
    const text = taskInput.value.trim();

    if(text === ''){
        alert('Debes escribir una tarea');
        return;
    }

const li = document.createElement('li');

const span = document.createElement('span');
span.textContent = text;

    span.addEventListener('click', () => {
        span.classList.toggle('done');
    });


    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';

    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = '';

});
