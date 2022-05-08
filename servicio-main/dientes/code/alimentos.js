const draggable_opciones = document.querySelectorAll(".draggable");
const droppable_espacio_respuesta = document.querySelectorAll(".droppable");


for(var i=0; i < draggable_opciones.length; i++){
    console.log(draggable_opciones[i]);
    draggable_opciones[i].addEventListener("dragstart", dragStart);
  }


  for(var i=0; i < draggable_opciones.length; i++){
    console.log(draggable_opciones[i]);
    draggable_opciones[i].addEventListener("dragstart", dragStart);
  }
  
  for(var i=0; i < droppable_espacio_respuesta.length; i++){
    droppable_espacio_respuesta[i].addEventListener("dragover", dragOver); // Fires when a dragged item is being dragged over a valid drop target, repeatedly while the draggable item is within the drop zone
    //elem.addEventListener("dragleave", dragLeave); // Fires when a dragged item leaves a valid drop target
    droppable_espacio_respuesta[i].addEventListener("click",changeAnswer);
    
    droppable_espacio_respuesta[i].addEventListener("drop", drop); // Fires when an item is dropped on a valid drop target
  
  }  

  function dragStart(event) {
    event.dataTransfer.setData("text", event.target.id); // or "text/plain" but just "text" would also be fine since we are not setting any other type/format for data value
  }
  
  function dragOver(event) {
    if(!event.target.classList.contains("dropped")) {
      event.preventDefault(); // Prevent default to allow drop
    }
  }

  function drop(event) {
    event.preventDefault(); // This is in order to prevent the browser default handling of the data
    const draggableElementData = event.dataTransfer.getData("text"); // Get the dragged data. This method will return any data that was set to the same type in the setData() method
  
    
    const actual_opcion = event.target.getAttribute("data-diente");
    
    if(actual_opcion !== "") {
      document.getElementById(actual_opcion).classList.remove("d-none")};
    event.target.setAttribute("data-diente",draggableElementData);
    
    event.target.innerHTML = draggableElementData;
    const draggableElement = document.getElementById(draggableElementData);
    draggableElement.classList.add("d-none");
  }

  function changeAnswer(event){
    const contenido = event.target.getAttribute("data-diente");
    const opcion_desa = document.getElementById(contenido);
    opcion_desa.classList.remove("d-none");
    event.target.innerHTML = "";
    event.target.setAttribute("data-diente","");
  
  }