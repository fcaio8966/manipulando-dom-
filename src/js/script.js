function addtask(){
    var input = document.getElementById("input-tarefa")
    //console.log(input)
    //alert("função de adicionar tarefa")
    var inputValue = input.value
    input.Value = ""
     var list = document.getElementById("lista-tarefa")
     var li = document.createElement("li");

     //li.innerText = input.value;
     li.innerHTML=   `${inputValue} <button onclick="this.parentElement.remove()" >🗑️</button>`;
     li.onclick = function(){
        li.className = "tarefa-concluida"
     }
     list.appendChild(li)
    
    console.log(input.value)

}