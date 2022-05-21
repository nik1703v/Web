const input = document.querySelector("#myInput");
const ul = document.querySelector("#myUL");
const lists = document.querySelectorAll("li");
const spans = document.getElementsByTagName("span");
const saveBtn = document.querySelector("#save");
const clearBtn = document.querySelector("#clear");
const addDtn = document.querySelector("#addBtn");

for (let i = 0; i < lists.length; i++) {
    let span1 = document.createElement("span");
	let txt = document.createTextNode("\u00D7");
	span1.className = "close";
	span1.appendChild(txt);
	lists[i].appendChild(span1);
}

function deleteTodo(){
  for(let span of spans){
    span.addEventListener ("click",function (){
      span.parentElement.remove();
      event.stopPropagation();
    });
  }
}

function loadTodo(){
  if(localStorage.getItem('todoList')){
    ul.innerHTML = localStorage.getItem('todoList');
    deleteTodo();
  }
}



input.addEventListener("keypress",function(keyPressed){
  if(keyPressed.which === 13){
    let li = document.createElement("li");
    let spanElement = document.createElement("span");
		let newTodo = this.value;
    this.value = " " ;
		for (let i = 0; i < lists.length; i++) {
			var span1 = document.createElement("span");
			var txt = document.createTextNode("\u00D7");
			span1.className = "close";
			span1.appendChild(txt);
		  lists[i].appendChild(span1);
		}
    ul.appendChild(li).append(spanElement,newTodo,span1);
    deleteTodo();
    }
});



const close = document.getElementsByClassName("close");
let i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

saveBtn.addEventListener('click',function(){
  localStorage.setItem('todoList',ul.innerHTML );
});

clearBtn.addEventListener('click', function(){
  ul.innerHTML= "";
  localStorage.removeItem('todoList',ul.innerHTML );
});

deleteTodo();

loadTodo();
