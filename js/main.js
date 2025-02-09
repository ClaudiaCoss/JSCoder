//inventario de productos

let existencia;
const productosExistentes = [];
const productosAgotados = [];

function verDisponibles() {
    if (productosExistentes.length === 0) {
        alert("No hay productos disponibles en este momento.")
    } else {
        alert("Los productos disponibles son:");
        alert(productosExistentes.join("\n"))
    };
};

function verAgotados() {
    if (productosAgotados.length === 0) {
        alert("No hay productos agotados en este momento.")
    } else {
        alert("Los productos agotados son:");
        alert(productosAgotados.join("\n"))
    };
};

function agregarProducto(){
    const nuevoProducto = prompt("Ingresa el nombre del producto");
    const vigencia = confirm("¿Está vigente?");

    if(vigencia){
        productosExistentes.push(nuevoProducto);
        alert("Agregaste un nuevo producto a Productos existentes a " + nuevoProducto);
    } 
    else{
        productosAgotados.push(nuevoProducto);
        alert("Agregaste un nuevo producto a Productos agotados a " + nuevoProducto);
    };
};

do {
    opcion = parseInt(prompt("Inventario para identificar productos en stock. \n\n1. Para identificar productos agotados. \n2. Para identificar productos caducados. \n3. Para agregar un producto \n\n Para salir escribe 0. "))
    switch (opcion) {
        case 0:
            alert("¡Nos vemos pronto!");
            break;
        case 1:
            verDisponibles();
            alert("Productos disponibles");
            break;
        case 2:
            verAgotados();
            alert("Productos agotados");
            break;
        case 3:
            agregarProducto();
            alert("Agregar un producto");
            break;
        case 4:
            alert("No válido, intenta de nuevo");
            break;

        default:
            break;
    };



} while (existencia !== 0);

