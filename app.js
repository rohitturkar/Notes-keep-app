const addButton=document.querySelector("#add");
function addnewNote(text=''){
  const note=document.createElement('div');
  note.classList.add('note');
  const htmlData=`<div class="operation">
  <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
  <button class="delete"><i class="fa-solid fa-trash"></i></button>
</div>

<div class="main ${text?"":"hidden"}"></div>
<textarea class=" ${text? "hidden":""}"></textarea>`

note.insertAdjacentHTML('afterbegin',htmlData);

function updateLocalStrorageData(){
    const textAreaData=document.querySelectorAll('textarea')
    const notes=[];
    textAreaData.forEach((element)=>{
        return notes.push(element.value);
    })
    localStorage.setItem('notes',JSON.stringify(notes));
}


const editButton=note.querySelector(".edit");
const deleteButton=note.querySelector(".delete")
const mainDiv=note.querySelector('.main')
const textArea=note.querySelector('textarea');


deleteButton.addEventListener('click',()=>{
    note.remove();
})

// toggle using the Edit button
textArea.value=text;
mainDiv.innerHTML=text;

editButton.addEventListener('click',()=>{
    mainDiv.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
})
textArea.addEventListener('input',(event)=>{
    const value=event.target.value;
    mainDiv.innerHTML=value; 
    updateLocalStrorageData();
})
document.body.appendChild(note);
}


function displayFn(){
addnewNote();
}


const notes=JSON.parse(localStorage.getItem('notes'));
if(notes){
    notes.forEach((note)=>{
        addnewNote(note)
    })
}

addButton.addEventListener("click",displayFn);

