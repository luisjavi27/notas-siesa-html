let items = [1];

let producto = {
  titulo: "",
  subtitulo: "",
  descripcion: "",
  urlImagen: "",
};

producto.titulo = document.querySelector("#inputTitulo");
producto.subtitulo = document.querySelector("#subtitulo1");
producto.descripcion = document.querySelector("#inputDescripcion1");
producto.urlImagen = document.querySelector("#urlImageInput");
containerItems = document.querySelector("#itemsArea");
btnPlus = document.querySelector("#addButton");
btnCargarUrlImagen = document.querySelector("#btnCargarUrlImagen");
btnCargarUrlImagen = document.querySelector("#containerCopyIcon");

agregarEventListeners();

function agregarEventListeners() {
  btnPlus.addEventListener("mousedown", () => {
    addItem(items);
  });
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

function addDeleteListener(item){

    document.getElementById(`deleteItem${item}`).addEventListener('mousedown',()=>{
        document.getElementById(`containerDeleteItem${item}`).remove();
    });

    

}


