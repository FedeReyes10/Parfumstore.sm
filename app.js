const contenedorDestacados = document.querySelector(".grid-destacados");
const inputBuscar = document.getElementById("buscar");
const resultadosBusqueda = document.getElementById("resultados");

const resultadoMarca = document.getElementById("resultadoMarca");
const opcionesMarca = document.getElementById("opcionesMarca");

console.log(inputBuscar);
console.log("App cargada");



function crearCard(perfume) {

    return `

    <div class="card-perfume">

        <div class="imagen-perfume">

            ${perfume.etiqueta ? `<div class="etiqueta">${perfume.etiqueta}</div>` : ""}

            <img src="imagenes/perfumes/${perfume.imagen}" alt="${perfume.nombre}">

        </div>

        <h3>${perfume.nombre}</h3>

        <p>${perfume.marca}</p>

        <span>$${perfume.precio.toLocaleString()}</span>

        <a href="https://wa.me/542634215719?text=Hola,%20quiero%20consultar%20por%20${encodeURIComponent(perfume.nombre)}" target="_blank">

            Consultar

        </a>

    </div>

    `;

}

function mostrarPerfumes(lista, buscando = false) {


    contenedorDestacados.innerHTML = "";


    if (buscando) {

        lista.forEach(perfume => {

            resultadosBusqueda.innerHTML += crearCard(perfume);

        });

        return;

    }

    lista.forEach(perfume => {


        if (perfume.destacado) {

            contenedorDestacados.innerHTML += crearCard(perfume);

        }


    });


}
// ================= BUSCADOR =================


inputBuscar.addEventListener("input", () => {


    const texto = inputBuscar.value.toLowerCase();


    resultadosBusqueda.innerHTML = "";


    if (texto === "") {

        mostrarPerfumes(perfumes);

        return;

    }

    const filtrados = perfumes.filter(perfume => {


        return (

            perfume.nombre.toLowerCase().includes(texto) ||

            perfume.marca.toLowerCase().includes(texto) ||

            perfume.genero.toLowerCase().includes(texto)

        );


    });

    filtrados.forEach(perfume => {

        resultadosBusqueda.innerHTML += crearCard(perfume);

    });



});

inputBuscar.addEventListener("keydown", (e) => {


    if (e.key === "Enter") {


        resultadosBusqueda.scrollIntoView({

            behavior: "smooth"

        });


    }


});
// ================= FILTRO POR MARCA =================

function mostrarOpcionesMarca(marca){

    resultadoMarca.innerHTML = "";

    let todos = perfumes.filter(perfume =>
        perfume.marca === marca
    );


    todos.forEach(perfume => {

        resultadoMarca.innerHTML += crearCard(perfume);

    });


    opcionesMarca.innerHTML = `

        <h3>${marca}</h3>

        <button onclick="filtrarMarca('${marca}', 'Masculino')">
            Masculinos
        </button>

        <button onclick="filtrarMarca('${marca}', 'Femenino')">
            Femeninos
        </button>

    `;

}

function filtrarMarca(marca, genero){


    let filtrados = perfumes.filter(perfume =>

        perfume.marca === marca &&
        perfume.genero === genero

    );


    resultadoMarca.innerHTML = "";


    filtrados.forEach(perfume => {

        resultadoMarca.innerHTML += crearCard(perfume);

    });

}
// ================= CARGA INICIAL =================

mostrarPerfumes(perfumes);