// Agregar elementos dinamicamente en una página.
// Agreagr tareas y al apretar el boton se actaulice la lista en la página

/* requerimientos */

// 1 - Agregar tareas con descripción al llenar el input y presionar el botón agregar tarea, la es agregada al arreglo y luego la lista 
 // en la pagina web se actualiza 

// 2 - Borrar una taera al hacer click en el botón que acompaña a la tarea. Se debe borrar el dato del arreglo y actualizar la lista

// 3 - Contar el total de tareas, mantener actualiza la cuenta cuando se agrege o se borre una tarea.

// 4 - Marcar una tarea como completada al hacer click en un checkbox.

/* pistas */

// - Agregar al objeto el estado completado:
// - Iniciar las tareas con completado : False
// - al hacer click en el botón cambiar, se debe buscar el elemento por el indicie y luego cambiar el estado a completado true.

// 5 - Contar el total de tareas realizadas.

// 6 - El código incluye al menos 3 tareas iniciales en el arrego y estas se muestran en la página web recorriendo el arreglo (for of || forEach)
/* ---------------------------------------*/

// Crear el arreglo donde se almacenan los objetos Lista de tareas
const listToDo = [{id: 0 , nombre:"crear mi Primer ToDoList", estado : false},
    {id: 2 , nombre:"capturar el evento del checkbox", estado : false},
    {id: 3 , nombre:"cambiar el elemento html tareas realizadas", estado : false}
];

let buscaridEstado =  listToDo.findIndex((e) => e.id === listToDo[2].id);
console.log(buscaridEstado);
// 2- Necesitamos el contendor  donde insertaremos las tareas
const listaTareas = document.querySelector("tbody");
renderizarLista()

/* 2- Primero tenemos que obtener los elementos html que interactuan */
const inputTarea = document.querySelector("#nuevaTarea");
const btnAgregarTarea = document.querySelector("#btn-agregarTarea");


//3.- Eliminaer elemento
function borrarTarea(id){
    const buscarIndex = listToDo.findIndex((e)=> e.id === id);
    listToDo.splice(buscarIndex,1);

    renderizarLista(); // Si no se renderiza nuevamente no realiza el cambio en el HTML
}


//4.- actualizar el total de tareas y tareas realizadas
const contenedorContadorDeTareas = document.querySelector(".containerConteoTareas")
function renderContadores(){
   
    const totalTareas = listToDo.length;
    const contarRealizadas = listToDo.filter((e) => e.estado === true);
    contenedorContadorDeTareas.innerHTML = `
                <span">Total Realizadas: ${contarRealizadas.length}</span>
                <span">total: ${totalTareas}</span>
                `; 
}

/*  Función para cambiar es estado del boton  */
// le damos el parámetro ID  que este sea buscado dinamicamente
function cambiarEstado(id){
    //buscamos el indice del elemento que cambia a realizado 
    let indexEstado =  listToDo.findIndex((e) => e.id === id);
    listToDo[indexEstado].estado = true;
    renderContadores()
  
}



btnAgregarTarea.addEventListener("click",()=>{   // Aqui se crea el boton agregar
        // Creamos el nuevo ID
        const nuevoId = listToDo[listToDo.length-1].id + 1;
        
        // creamos la nueva tarea  
          const nuevaTarea = {
            id: nuevoId,
            nombre: inputTarea.value,
            estado: false,
          };
          listToDo.push(nuevaTarea);
          
          renderizarLista()
          inputTarea.value = "";  // vaciamos el valor del input
} )



function renderizarLista(){
    let html = "";
    for(let list of listToDo){
       
      html+=`
              <tr>
                  <td>${list.id}</td>
                  <td>${list.nombre}</td>
                  <td><input onChange="cambiarEstado(${list.id})" id="checkElement" type="checkbox"><i onclick="borrarTarea(${list.id})" class="fa fa-trash" aria-hidden="true"></i></td>
              </tr>        
      `}
    
        
    // Aqui insertamos el total de tareas
    /* const totalTareas = document.querySelector("#cantTareasTotal");
    totalTareas.textContent = `total: ${listToDo.length}`    */
    listaTareas.innerHTML = html

}




