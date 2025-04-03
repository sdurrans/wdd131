
const input = document.querySelector('#favchap'); 
const button = document.querySelector('button'); 
const list = document.querySelector('#list'); 

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {displayList(chapter)});

button.addEventListener('click', function () {
    if (input.value !== '') {
        displayList(input.value); 
        chaptersArray.push(input.value);  
        setChapterList(); 
        input.value = '';
        input.focus();
    } 
});

function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item;
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete');
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}