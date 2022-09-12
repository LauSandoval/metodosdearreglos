const listaDeTareas = document.querySelector("#tareas")
const totalTareas = document.querySelector("#total Tareas")
const tareaInput = document.querySelector("#nuevaTarea")
const btnAgregar = document.querySelector("#agregarTarea")
const tareas = []
var id = 0
// boton click 
btnAgregar.addEventListener("click", () => {
    const nuevaTarea = tareaInput.value
    id = id + 1
    //console.log(id)
    elemento = {
        id: id,
        nombre: nuevaTarea,
        estado: false
    }
    tareas.push(elemento)
    //console.log(elemento)
    tareaInput.value = ""
    renderizar()
})
/* Actualizamos la información en el HTML */
function renderizar() {
    let html = ""
    let cont = 0
    for (let tarea of tareas) {
        // if (${tarea.estado} == false)
        html += `<li class="alert alert-primary" id="tarea-${tarea.id}">${tarea.id} ${tarea.nombre} <input id ="chk-${tarea.id}"type="checkbox" class= "form-check-input ms-3 check" onchange="realizado(${tarea.id})" ><button class="btn btn-danger ms-3"
onclick="borrar(${tarea.id})"> <i class='bx bx-x-circle'></i> </button> </li>`;
        cont += 1
    }
    //console.log(cont)
    listaDeTareas.innerHTML = html;
    document.querySelector("#totalTareas").innerHTML = `Total:${cont}`;
}

function borrar(id) {
    const index = tareas.findIndex((ele) => ele.id == id)
    tareas.splice(index, 1)
    renderizar()
}
var acum = 0
function realizado(id) { 
      
    if (document.querySelector("#chk-" + id).checked) {
        document.querySelector("#tarea-" + id).classList.add("tachado");
        acum = acum + 1
        document.querySelector("#totalRealizado").innerHTML = `Total Realizado:${acum}`;
        //console.log(index)
    }else{
        document.querySelector("#tarea-" + id).classList.remove("tachado");
        acum = acum - 1 
        document.querySelector("#totalRealizado").innerHTML = `Total Realizado:${acum}`;
    }
}