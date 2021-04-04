const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}


const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')


let cantTarea = 0
let cantUncheck = 0
let misTareas = []

function addTodo() {
  let tituloTarea = prompt('Que tarea quieres agregar?')
  
  if (tituloTarea != null){  
    while (tituloTarea.trim() == ''){
      alert('Debe ingresar algun texto')
      tituloTarea = prompt('Que tarea quieres agregar?')
    }     
    if (tituloTarea != null){
      
      cantTarea++
      itemCountSpan.innerHTML = cantTarea
   
      var li=document.createElement('li');
      li.innerHTML = "<input type='checkbox' checked/>"
      var text=document.createTextNode(tituloTarea);
      li.appendChild(text)
      list.appendChild(li);
     
      let checkBoxlist = document.querySelectorAll("ul input[type='checkbox']")        
  
      checkBoxlist[checkBoxlist.length-1].onclick = function() {
         if(this.checked == false){
            cantUncheck++ 
            uncheckedCountSpan.innerHTML = cantUncheck
            cantTarea--
            itemCountSpan.innerHTML = cantTarea
         }else{
           cantUncheck--
           uncheckedCountSpan.innerHTML = cantUncheck
           // itemCountSpan.innerHTML = parseInt(itemCountSpan.innerHTML) + 1
           cantTarea++
           itemCountSpan.innerHTML = cantTarea
         }             
      }   
    }
  }
}