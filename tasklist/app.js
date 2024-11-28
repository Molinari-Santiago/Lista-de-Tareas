function addTask() {
    var agregar = document.getElementById("agregar");
    var ltarea = document.getElementById("ltarea");

    if (agregar.value.trim() !== "") {
        var li = document.createElement("li");

      
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.onchange = function() {
            li.classList.toggle("completed");
        };

   
        var label = document.createElement("label");
        label.textContent = agregar.value;

  
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.onclick = function() {
            ltarea.removeChild(li);
        };

        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(deleteButton);

        ltarea.appendChild(li);
        agregar.value = ""; 
    } else {
        alert("Por favor, ingresa una tarea.");
    }
}
