taskList= JSON.parse(localStorage.getItem('TaskList')) || [];
printValue();
function addValues()
{
  let getTask= document.querySelector('#task').value;
  let getDate= document.querySelector('#date').
  value;
  if(!getTask || !getDate)
    {
      alert(' Task or date value is not entered.');
    }
  else
  {
    taskList.push({task:getTask, date:getDate});
    localStorage.setItem('TaskList', JSON.stringify(taskList));
  }
  printValue();
}
function printValue()
{
  let containerElement= document.querySelector('#todo-container');
  let html='';
  for(let i=0;i<taskList.length;i++){
    html+=`<span>${taskList[i] ['task']}</span>
            <span>${taskList[i]['date']}</span>
            <button id="delete-button" class="todo-button" onclick="taskList.splice(${i}, 1);
            localStorage.setItem('TaskList', JSON.stringify(taskList));
            printValue();
            ">Delete</button>
          `;

  }
  containerElement.innerHTML = html;
  
  
}