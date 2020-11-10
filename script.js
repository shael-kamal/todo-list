const todoInput =document.querySelector('.todo-input');
const todoBtn =document.querySelector('.todo-button');
const todoList =document.querySelector('.todo-list');


todoBtn.addEventListener('click', (e)=>{
    e.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const li = document.createElement('li');
    li.innerText = todoInput.value;
    li.classList.add('todo-item');
    todoDiv.appendChild(li)
    todoList.appendChild(todoDiv)
    
    const doneButton = document.createElement('button');
    doneButton.innerHTML = '<i class="fas fa-check"></i>';
    doneButton.classList.add('complete-btn');

    todoDiv.appendChild(doneButton);
    
    const rmvButton = document.createElement('button');
    rmvButton.innerHTML = '<i class="fas fa-trash"></i>';
    rmvButton.classList.add('remove-btn');

    todoDiv.appendChild(rmvButton);

    todoList.appendChild(todoDiv)

    todoInput.value='';
})

todoList.addEventListener('click', (e)=>{
    const grandfatherElement =  e.target.parentElement.parentElement
    
    e.target.classList.contains('fa-trash')?
    grandfatherElement.remove():
    e.target.classList.contains('fa-check')?
    grandfatherElement.querySelector('li').classList.toggle('done'):
    ''
    

})

