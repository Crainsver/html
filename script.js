// Selección de elementos
const thumbs = document.querySelectorAll('.thumb');
const mainImage = document.getElementById('mainImage');
const mainDescription = document.getElementById('mainDescription');

// Evento al seleccionar una imagen del catálogo
thumbs.forEach(img => {
    img.addEventListener('click', () => {
        mainImage.src = img.src;
        mainDescription.textContent = img.dataset.description;
    });
});

// Lógica del Carrito de Compras, es bastante manual pero se entienda
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', () => {
    const text = taskInput.value.trim();

    if (text === '') {
        alert('Debes escribir un producto');
        return;
    }

    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = text;
    span.style.cursor = 'pointer';

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