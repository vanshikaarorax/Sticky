const add=document.getElementById('add');
const updateLocalStorage =()=>{
    const textArea= document.querySelectorAll('textarea');
    const notes=[];
    textArea.forEach((note)=>{
     return notes.push(note.value);
    })
    localStorage.setItem('notes',JSON.stringify(notes));
}
const addNew=(text='')=>{
const note=document.createElement('div');
note.classList.add('note');
const html=` <div class="oper">
        <div class="edit"><i class="fa-solid fa-pen-to-square"></i></div>
        <div class="close"><i class="fa-sharp fa-solid fa-circle-xmark"></i></div>
       </div>
      <div class="main  ${
        text ? '':'hidden'
      }" ></div>

       <textarea name="text" class="text ${
        text ? 'hidden':''
      }" ></textarea>`

       note.insertAdjacentHTML('afterbegin',html);

       console.log(note)
       document.body.appendChild(note);

       const close = note.querySelector('.close');
       const edit=note.querySelector('.edit');
       const test=note.querySelector('textarea');
       const main=note.querySelector('.main');

close.addEventListener('click',()=>{
    note.remove();
})

test.innerHTML=text;
main.innerHTML=text;
edit.addEventListener('click',()=>{
   
    main.classList.toggle('hidden');
    test.classList.toggle('hidden');
    
})
test.addEventListener('change',(event)=>{
    const value=event.target.value;
    main.innerHTML=value;
    updateLocalStorage();
})
}

const notes=JSON.parse(localStorage.getItem('notes'));
 if(notes){
 notes.forEach((note)=>addNew(note))
 }

add.addEventListener('click',()=> addNew());