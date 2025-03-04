//segunda entrega agregar productos

const container = document.getElementById("contenedor");


let productos = JSON.parse(localStorage.getItem("productos")) || [];

const agregar = (producto) => {
    productos.push(producto);
    localStorage.setItem("productos", JSON.stringify(productos));
    container.innerHTML = "";
    verProductos();
};

const borrarProducto = (nombre) => {
    productos = productos.filter(el => el.producto !== nombre);
    localStorage.setItem("productos", JSON.stringify(productos));
    container.innerHTML = "";
    verProductos();
};

const formulario = document.getElementById("formulario");
console.log("Formulario:", formulario); 

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Evento submit capturado"); 

    const producto = e.target[0].value;
    const vigencia = e.target[1].value;

    const nuevoProducto = {
        producto,
        vigencia,
    };

    agregar(nuevoProducto);

    console.log("Agregaste un nuevo producto.", nuevoProducto);

    e.target[0].value = "";
    e.target[1].value = "";
});

const crearcard = (producto) => {
    const card = document.createElement("div");
    card.className = "card";

    const nuevoProducto = document.createElement("h2");
    nuevoProducto.innerText = producto.producto;

    const vigencia = document.createElement("h2");
    vigencia.innerText = producto.vigencia;

    const borrar = document.createElement("button");
    borrar.className = "boton-borrar"; 
    borrar.innerText = "Borrar producto";
    borrar.onclick = () => borrarProducto(producto.producto);

    card.appendChild(nuevoProducto);
    card.appendChild(vigencia);
    card.appendChild(borrar);

    container.appendChild(card);
};

const verProductos = () => {
    productos.forEach(el => {
        crearcard(el);
    });
};


verProductos();