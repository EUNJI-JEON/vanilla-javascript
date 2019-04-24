const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

function filterFn(toDo) {
  return toDo.id === 1
}

let toDos = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos=toDos.filter(function(toDo){
    return toDo.id !== parseInt(li.id);
  });
  toDos=cleanToDos;
  saveToDos();
}

function saveToDos(){
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}


function paintToDo(text){
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText="❌";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;

  if (text !== '') { // 비어있는지 확인
    li.id = newId;
    li.appendChild(delBtn); // li 엘리먼트 안에 넣기
    li.appendChild(span); // 동일
    toDoList.appendChild(li); // li의 부모(toDoList, ul) 안에 넣기.
  }

  const toDoObj = {
    text: text,
    id: newId,
  };

  if (toDoObj.text !== '') { // 비어있는지 확인
   toDos.push(toDoObj); // toDos Array Stack에 Push함으로서 인자를 생성.
   saveToDos(); // LocalStorage에 Todo를 Array 형식으로 저장(const toDos).
 }
}


function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value="";
}



function loadToDos(){
  const loadedToDos= localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {

    const parsedToDos=JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo) {
      paintToDo(toDo.text);
    });


  }else {

  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
