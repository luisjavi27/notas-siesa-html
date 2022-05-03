let items = [1];

titulo = document.querySelector("#inputTitulo");
urlImagen = document.querySelector("#urlImageInput");
containerItems = document.querySelector("#itemsArea");
addButton = document.querySelector("#addButton");
btnCargarUrlImagen = document.querySelector("#btnCargarUrlImagen");
btnCopy = document.querySelector("#containerCopyIcon");
btnGenerateHtml = document.querySelector("#containerGenerateIcon");
inputUrlImagen = document.querySelector("#urlImageInput");
outputHtml = document.querySelector("#outputHtml");

agregarEventListeners();

function agregarEventListeners() {
  addButton.addEventListener("mousedown", () => {
    addItem(items);
  });

  btnCargarUrlImagen.addEventListener("click", cargarImagen);
  btnCopy.addEventListener("click", copiarHtml);
  btnGenerateHtml.addEventListener("click", generarHtml);
}

function addItem(index) {
  let lastItem = index[index.length - 1];
  let newitem = lastItem + 1;
  items.push(newitem);

  containerItems.insertAdjacentHTML(
    "beforeend",
    `
   <li id=containerDeleteItem${newitem}>
   <label class="liElement" for="subtitulo${newitem}">•</label><br>
   <input class="liElement subtitulo" type="text" id="subtitulo${newitem}" placeholder="Subtitulo...">
   <textarea class="liElement" id="inputDescripcion${newitem}" rows="1" cols = "60" placeholder="Descripción..." autocomplete="off"></textarea>
   <button class="containerDeleteIcon" >
        <img  class="deleteIcon" id=deleteItem${newitem} src="./assets/trash-can-regular.svg" alt="Deleteitem1">
    </button>
   </li>`
  );

  addDeleteListener(newitem);
}

function addDeleteListener(item) {
  document
    .getElementById(`deleteItem${item}`)
    .addEventListener("mousedown", () => {
      document.getElementById(`containerDeleteItem${item}`).remove();
    });
}

function cargarImagen() {
  let image = document.querySelector("#imageArea img");
  image.setAttribute("src", inputUrlImagen.value);
}

function copiarHtml() {
 
    outputHtml.select();
    document.execCommand('copy');

}

function generarHtml() {
    let stringTitulo = titulo.value;
    let subtitulos = [];
    let descripciones =[];
    let stringHtmlImage = "";
  
    items.forEach(function (item) {
      subtitulos.push(document.getElementById(`subtitulo${item}`).value);
      descripciones.push(document.getElementById(`inputDescripcion${item}`).value);
    });
  
    image = document.querySelector("#imageArea img");
    stringHtmlImage = image.getAttribute("src");
  
    let resultString = `
      <p>
      <br><b>${stringTitulo}</b><br>`;
  
      for(let i = 0; i <=  (items.length - 1 ); i++){
  
          resultString += `
          <br><b>• ${subtitulos[i]}: </b>${descripciones[i]}`;
      }
  
      resultString += 
      `</p>
      <br>
      <div  style="text-align: center;">
          <img style=" height:100px;" src="${stringHtmlImage}">
      </div>
      `
  
      outputHtml.value= resultString;
  
      
}
