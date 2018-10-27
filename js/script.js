window.onload = init;

function init() {
    let todoList = {
        listHTML: document.getElementById("todoList"),
        listTask: [],
        add(task, priority = false) {
            let element = document.createElement("li");
            element.innerText = task;
            /*element.addEventListener("click", () => {
               let parent = element.parentNode;
               if(parent){
                   parent.removeChild(element);
               }
            });*/
            /*
            element.addEventListener("click", function(){
               console.log(this);
               let parent = this.parentNode;
               if(parent){
                   parent.removeChild(this);
               }
            });*/
            // Añadir un boton para marcar de finalizado
            let boton = document.createElement("input");
            boton.type = "checkbox";
            element.appendChild(boton);

            boton.addEventListener("click", function () {
                let estado = boton.checked;
                if (estado) {
                    element.style.textDecoration = "line-through";
                    console.log(estado);
                }
                else {
                    element.style.textDecoration = "none";
                }
            });
            // Elmine de la lista
            let botonE = document.createElement("i");
            botonE.className = "fas fa-times-circle";
            element.appendChild(botonE);

            botonE.addEventListener("click", function(){
                let estado = boton.checked;
                let parent = element.parentNode;
                if(estado&&parent){
                    parent.removeChild(element);
                }
             });

                if (priority) {
                    this.listTask.unshift({
                        element,
                        task
                    });
                    this.listHTML.insertBefore(element, this.listHTML.childNodes[0]);
                } else {
                    this.listTask.push({
                        element,
                        task
                    });
                    this.listHTML.appendChild(element);
                }
            }
    }

    let form = document.managerTask;
        form.addEventListener("submit", (evt) => {
            evt.preventDefault();
            let task = form.task.value;

            let validTask = /.{2,}/;
            if (!validTask.test(task)) {
                console.log("Ingrese una descripcion clara");
                return false;
            }

            todoList.add(task, form.important.checked);

        });
    }