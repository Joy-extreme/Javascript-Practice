taskList= [];
printValue();
function addValues()
{
  let getTask= document.querySelector('#task').value;
  let getDate= document.querySelector('#date').value.toString();
  taskList.push({task:getTask, date:getDate});
  printValue();
}
function printValue()
{
  let containerElement= document.querySelector('#todo-container');
  let html='';
  for(let i=0;i<taskList.length;i++){
    html+=`<div>
            <span>${taskList[i]['task']}</span>
            <span>${taskList[i]['date']}</span>
            <button onclick="taskList.splice(${i}, 1);
            printValue();
            ">Delete</button>
          </div>\n`;

  }
  containerElement.innerHTML =  html;
  
  
}