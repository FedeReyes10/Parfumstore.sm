const contenedorDestacados = document.querySelector(".grid-destacados");
const inputBuscar = document.getElementById("buscar");
const resultadosBusqueda = document.getElementById("resultados");

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

    document.querySelectorAll(".grid-perfumes").forEach(grid => {
        grid.innerHTML = "";
    });



    lista.forEach(perfume => {


        // Cuando se usa el buscador
        if (buscando) {

            console.log("Mostrando:", perfume.nombre);

            contenedorDestacados.innerHTML += crearCard(perfume);

            return;

        }



        // DESTACADOS

        if (perfume.destacado) {

            contenedorDestacados.innerHTML += crearCard(perfume);

        }



        // CATEGORIAS

        let marca = perfume.marca.toLowerCase();



        if (marca === "french avenue") {

            marca = "french_avenue";

        }



        if (
            marca === "bharara" ||
            marca === "xerjoff" ||
            marca === "al haramain"
        ) {

            marca = "otras";

        }



        const genero = perfume.genero.toLowerCase();



        const contenedor = document.getElementById(`${marca}-${genero}s`);



        if (contenedor) {

            contenedor.innerHTML += crearCard(perfume);

        }


    });


}



// BUSCADOR

inputBuscar.addEventListener("input", () => {

    const texto = inputBuscar.value.toLowerCase();

    if (texto === "") {
        resultadosBusqueda.innerHTML = "";
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

    console.log("RESULTADO FINAL:", filtrados);

    resultadosBusqueda.innerHTML = "";

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


// CARGA INICIAL

mostrarPerfumes(perfumes);