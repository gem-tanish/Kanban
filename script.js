const todos = document.querySelectorAll(".todo");
const all_status = document.querySelectorAll(".status");
let draggableTodo = null;

todos.forEach((todo) => {
  todo.addEventListener("dragstart", dragStart);
  todo.addEventListener("dragend", dragEnd);
});

function dragStart() {
  draggableTodo = this;
  setTimeout(() => {
    this.style.display = "none";
  }, 0);
  console.log("dragStart");
}

function dragEnd() {
  draggableTodo = null;
  setTimeout(() => {
    this.style.display = "block";
  }, 0);
  console.log("dragEnd");
}

all_status.forEach((status) => {
  status.addEventListener("dragover", dragOver);
  status.addEventListener("dragenter", dragEnter);
  status.addEventListener("dragleave", dragLeave);
  status.addEventListener("drop", dragDrop);
});

function dragOver(e) {
  e.preventDefault();
  //   console.log("dragOver");
}

function dragEnter() {
  this.style.border = "1px dashed #ccc";
  console.log("dragEnter");
}

function dragLeave() {
  this.style.border = "none";
  console.log("dragLeave");
}

function dragDrop() {
  this.style.border = "none";
  this.appendChild(draggableTodo);
  console.log("dropped");
}

/* modal */
const btns = document.querySelectorAll("[data-target-modal]");
const close_modals = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.targetModal).classList.add("active");
    overlay.classList.add("active");
  });
});

close_modals.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    modal.classList.remove("active");
    overlay.classList.remove("active");
  });
});

window.onclick = (event) => {
  if (event.target == overlay) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => modal.classList.remove("active"));
    overlay.classList.remove("active");
  }
};

/* create todo  */
const todo_submit = document.getElementById("todo_submit");

const submit_count = todo_submit.addEventListener("click", createTodo);


//id code

function createTodo() {
  const todo_div = document.createElement("div");
  
  function uniqueId() {
     var i=1;
     i++;
     return i;
     
    }

    var abc = document.getElementById("id").value;
  var id = document.createElement("p");
  var new_id = document.createTextNode("#" + uniqueId());
  id.classList.add("id");
  id.appendChild(new_id);
  todo_div.appendChild(id);
  

  //create edit btn
  const btn = document.createElement("button");
  const btn_txt = document.createTextNode("Edit Task");
  btn.classList.add("edit-btn");
  btn.appendChild(btn_txt);
  
  todo_div.appendChild(btn);
  //title code
  const title = document.getElementById("title_input").value;
  const title_txt = document.createTextNode(title);
  const h3 = document.createElement("h3");
  h3.innerHTML = title;
  h3.classList.add("title");
  todo_div.appendChild(h3);

  //desc code
  const desc = document.getElementById("desc_input").value;
  const desc_txt = document.createTextNode(desc);
  const p = document.createElement("p");
  p.innerHTML = desc;
  p.classList.add("desc");
  todo_div.appendChild(p);

  //date code
  const date = document.getElementById("date_input").value;
  const date_txt = document.createTextNode(date);
  const p2 = document.createElement("p");
  p2.innerHTML = "Last Date :" + " " + date;
  p2.classList.add("date");
  todo_div.appendChild(p2);

  //name code
  const x = document.getElementById("name_input").value;
  const x_txt = document.createTextNode(x);
  const p3 = document.createElement("p");
  p3.innerHTML = "By" + " " + x;
  p3.classList.add("name");
  todo_div.appendChild(p3);

  todo_div.classList.add("todo");
  todo_div.setAttribute("draggable", "true");

  /* create span */
  const span = document.createElement("span");
  const span_txt = document.createTextNode("\u00D7");
  span.classList.add("close");
  span.appendChild(span_txt);
  todo_div.appendChild(span);
  


  no_status.appendChild(todo_div);

  span.addEventListener("click", () => {
    span.parentElement.style.display = "none";
  });
  //   console.log(todo_div);

  
  todo_div.addEventListener("dragstart", dragStart);
  todo_div.addEventListener("dragend", dragEnd);

  document.getElementById("title_input").value = " ";
  document.getElementById("desc_input").value = "";
  document.getElementById("date_input").value = "";
  document.getElementById("name_input").value = "";
  todo_form.classList.remove("active");
  overlay.classList.remove("active");
}

const close_btns = document.querySelectorAll(".close");

close_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.style.display = "none";
  });
});






// var modal = document.getElementsByClassName("modal");
 
//  var submitBtn = document.getElementById("todo_submit");
// var taskName = document.getElementById("task_input");
// var x = document.getElementById("name_input");
// var desc = document.getElementById("desc_input");
// var date =document.getElementById("date_input");
// let editTask =(e)=> {

// taskName.value=e.innerHTML
// date.value=e.parentElement.parentElement.nextElementSibling.firstElementChild.lastElementChild.innerHTML
// desc.value=e.parentElement.parentElement.nextElementSibling.firstElementChild.nextElementSibling.lastElementChild.innerHTML
// x.value=e.parentElement.parentElement.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.lastElementChild.innerHTML


// submitBtn.addEventListener('click',()=>{
//   e.parentElement.parentElement.parentElement.remove();

// })}