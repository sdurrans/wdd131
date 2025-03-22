
const input = document.querySelector('#favchap'); 
const button = document.querySelector('button'); 
const list = document.querySelector('#list'); 

button.addEventListener('click', function () {
    const chapter = input.value.trim(); 

    if (chapter !== '') {
        const li = document.createElement('li');
        li.textContent = chapter;


        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete');


        li.append(deleteButton);


        list.append(li);


        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
        });


        input.value = '';
        input.focus();
    } 
});