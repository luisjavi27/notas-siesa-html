let items = [{id:1, object:undefined}];

titulo = document.querySelector("#inputTitulo");
urlImagen = document.querySelector("#urlImageInput");
containerItems = document.querySelector("#itemsArea");
addButton = document.querySelector("#addButton");
btnCargarUrlImagen = document.querySelector("#btnCargarUrlImagen");
btnLimpiarUrlImagen = document.querySelector("#btnLimpiarUrlImagen");
btnCopy = document.querySelector("#containerCopyIcon");
btnGenerateHtml = document.querySelector("#containerGenerateIcon");
inputUrlImagen = document.querySelector("#urlImageInput");
outputHtml = document.querySelector("#outputHtml");
deleteItemUno = document.querySelector(`#deleteItem1`);

agregarEventListeners();

function agregarEventListeners() {

  deleteItemUno.addEventListener("mousedown", () => {
    document.getElementById(`subtitulo1`).value = ""
    document.getElementById(`inputDescripcion1`).value = ""
  });

  addButton.addEventListener("mousedown", () => {
    addItem(items);
  });
  
  addButton.addEventListener("keypress", (e) => {
    if (e.key === 'Enter') {
      addItem(items);
    }
  });

  btnCargarUrlImagen.addEventListener("click", cargarImagen);
  btnLimpiarUrlImagen.addEventListener("click", limpiarUrlImagen);
  btnCopy.addEventListener("click", copiarHtml);
  btnGenerateHtml.addEventListener("click", generarHtml);
}

function addItem(index) {
  let lastItem = index[index.length - 1];
  let newitem = {id:lastItem.id + 1, object:undefined} 
  items.push(newitem);

  containerItems.insertAdjacentHTML(
    "beforeend",
    `
   <li id=containerDeleteItem${newitem.id}>
   <label class="liElement" for="subtitulo${newitem.id}">•</label><br>
   <input class="liElement subtitulo" type="text" id="subtitulo${newitem.id}" placeholder="Subtitulo...">
   <textarea class="liElement" id="inputDescripcion${newitem.id}" rows="1" cols = "60" placeholder="Descripción..." autocomplete="off"></textarea>
   <button type="button" class="containerDeleteIcon" >
        <img  class="deleteIcon" id=deleteItem${newitem.id} src="./assets/trash-can-regular.svg" alt="Deleteitem">
    </button>
   </li>`
  );

  addDeleteListener(newitem);
}

function addDeleteListener(item) {

  let index = items.length-1;
  try{
    items[index].object = document.getElementById(`deleteItem${item.id}`)
    items[index].object.addEventListener("mousedown", () => {eliminarItem(item)});
    
  }catch(e){
    console.log("error en addDeleteListener", e)
  }
}

function eliminarItem(item) {
  try{
  document.getElementById(`containerDeleteItem${item.id}`).remove();
  const found = items.findIndex((element)=> element.id == item.id)
  items.splice(found, 1);
}catch(e){
  console.log("error en eliminarItem", e)
}
}

function cargarImagen() {
  let image = document.querySelector("#imageArea img");
  image.setAttribute("src", inputUrlImagen.value);
  image.style.display="block";
}

function limpiarUrlImagen() {
  let image = document.querySelector("#imageArea img");
  inputUrlImagen.value="";
  image.style.display="none";
}

function copiarHtml() {
 
    outputHtml.select();
    document.execCommand('copy');

}

function limpiarHtml(){
  outputHtml.value="";
}

function generarHtml() {
  limpiarHtml();

  let stringTitulo = titulo.value;
    let subtitulos = [];
    let descripciones =[];
    let stringHtmlImage = "";
  
    items.forEach(function (item) {

      let index = item.id;

      subtitulos.push(document.getElementById(`subtitulo${index}`).value);
      descripciones.push(document.getElementById(`inputDescripcion${index}`).value);
    });
  
    image = document.querySelector("#imageArea img");
    stringHtmlImage = image.getAttribute("src");
  
    let resultString = `
      <p style="line-height=150%">
      <br><b>${stringTitulo}</b><br>`;
  

      for(let i =0; i<items.length; i++) {

          resultString += `
          <br><b>• ${subtitulos[i]}: </b>${descripciones[i]}`;

      };
  
      resultString += 
      `
      </p>
      <br>
      <div  style="text-align: center;">
          <img  src="${stringHtmlImage}">
          <p >Imagen de referencia</p>
      </div>
      `
  
      outputHtml.value= resultString;
  
      
}
