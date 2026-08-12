const contenedorDestacados = document.querySelector(".grid-destacados");
const inputBuscar = document.getElementById("buscar");
const resultadosBusqueda = document.getElementById("resultados");
const catalogoGenero = document.getElementById("catalogo-genero");
const tituloGenero = document.getElementById("tituloGenero");
const perfumesGenero = document.getElementById("perfumesGenero");
const botonHero = document.getElementById("botonHero");
const resultadoMarca = document.getElementById("resultadoMarca");
const opcionesMarca = document.getElementById("opcionesMarca");

console.log(inputBuscar);
console.log("App cargada");


// ================= CREAR CARD =================

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

        <a href="#" class="btn-detalles" onclick="abrirModal(${perfume.id}); return false;">
            Ver detalles
        </a>

        <a href="https://wa.me/542634215719?text=${encodeURIComponent(`¡Hola! 👋 Me interesó el perfume ${perfume.nombre} que vi en la página. ¿Podrían brindarme más información sobre esta fragancia? ¡Muchas gracias!`)}" target="_blank">

            Consultar

        </a>

    </div>

    `;

}


// ================= MOSTRAR PERFUMES =================

function mostrarPerfumes(lista, buscando = false) {

    contenedorDestacados.innerHTML = "";

    document.querySelectorAll(".grid-perfumes").forEach(grid => {
        grid.innerHTML = "";
    });

    const marcasPrincipales = [
        "lattafa",
        "armaf",
        "afnan",
        "rasasi",
        "french avenue"
    ];

    lista.forEach(perfume => {

        // ================= BUSCADOR =================

        if (buscando) {

            resultadosBusqueda.innerHTML += crearCard(perfume);

            return;

        }


        // ================= DESTACADOS =================

        if (perfume.destacado && contenedorDestacados.children.length < 5) {

            contenedorDestacados.innerHTML += crearCard(perfume);

        }


        // ================= CATEGORIAS =================

        let marca = perfume.marca.toLowerCase();


        if (marca === "french avenue") {

            marca = "french_avenue";

        }

        else if (!marcasPrincipales.includes(perfume.marca.toLowerCase())) {

            marca = "otras";

        }


        const genero = perfume.genero.toLowerCase();

        const contenedor = document.getElementById(`${marca}-${genero}s`);

        if (contenedor) {

            contenedor.innerHTML += crearCard(perfume);

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

function mostrarOpcionesMarca(marca) {

    resultadoMarca.innerHTML = "";

    const marcasPrincipales = [
        "Lattafa",
        "Armaf",
        "Afnan",
        "Rasasi",
        "French Avenue"
    ];

    let todos;

    if (marca === "Otras marcas") {

        todos = perfumes.filter(perfume =>
            !marcasPrincipales.includes(perfume.marca)
        );

    } else {

        todos = perfumes.filter(perfume =>
            perfume.marca === marca
        );

    }

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

        <button onclick="filtrarMarca('${marca}', 'Unisex')">
            Unisex
        </button>

    `;

}


// ================= FILTRAR MARCA + GENERO =================

function filtrarMarca(marca, genero) {

    const marcasPrincipales = [
        "Lattafa",
        "Armaf",
        "Afnan",
        "Rasasi",
        "French Avenue"
    ];

    let filtrados;


    // ================= OTRAS MARCAS =================

    if (marca === "Otras marcas") {

        filtrados = perfumes.filter(perfume =>

            !marcasPrincipales.includes(perfume.marca) &&

            perfume.genero === genero

        );

    }


    // ================= MARCAS PRINCIPALES =================

    else {

        filtrados = perfumes.filter(perfume =>

            perfume.marca === marca &&

            perfume.genero === genero

        );

    }


    resultadoMarca.innerHTML = "";


    filtrados.forEach(perfume => {

        resultadoMarca.innerHTML += crearCard(perfume);

    });

}


// ================= BOTON CATALOGO =================

const botonCatalogo = document.querySelector('a[href="#categorias"]');

function cambiarCatalogo() {

    if (window.innerWidth <= 768) {

        botonCatalogo.href = "#destacados";

        if (botonHero) {

            botonHero.href = "#destacados";

        }

    }

    else {

        botonCatalogo.href = "#categorias";

        if (botonHero) {

            botonHero.href = "#categorias";

        }

    }

}


// ================= MOSTRAR CATEGORIA POR GENERO =================

function mostrarCategoria(genero) {

    console.log("Entró a categoría:", genero);

    perfumesGenero.innerHTML = "";

    tituloGenero.innerHTML = `Perfumes ${genero}s`;


    const filtrados = perfumes.filter(perfume =>

        perfume.genero === genero

    );


    filtrados.forEach(perfume => {

        perfumesGenero.innerHTML += crearCard(perfume);

    });


    catalogoGenero.style.display = "block";


    catalogoGenero.scrollIntoView({

        behavior: "smooth"

    });

}


// ================= RESPONSIVE =================

cambiarCatalogo();

window.addEventListener("resize", cambiarCatalogo);


// ================= CARGA INICIAL =================

mostrarPerfumes(perfumes);


// ================= MODAL =================

function abrirModal(id) {

    const perfume = perfumes.find(p => p.id === id);

    if (!perfume) return;


    document.getElementById("modalImagen").src =
        `imagenes/perfumes/${perfume.imagen}`;

    document.getElementById("modalImagen").alt =
        perfume.nombre;

    document.getElementById("modalNombre").textContent =
        perfume.nombre;

    document.getElementById("modalMarca").textContent =
        perfume.marca;

    document.getElementById("modalPrecio").textContent =
        "$" + perfume.precio.toLocaleString();

    document.getElementById("modalDescripcion").textContent =
        perfume.descripcion ||
        "La información detallada de esta fragancia estará disponible muy pronto.";

    document.getElementById("modalSalida").textContent =
        perfume.salida || "Próximamente.";

    document.getElementById("modalCorazon").textContent =
        perfume.corazon || "Próximamente.";

    document.getElementById("modalFondo").textContent =
        perfume.fondo || "Próximamente.";

    document.getElementById("modalEstacion").textContent =
        perfume.estacion || "Próximamente.";

    document.getElementById("modalWhatsapp").href =
        `https://wa.me/542634215719?text=${encodeURIComponent(
            `¡Hola! 👋 Me interesó el perfume ${perfume.nombre} que vi en la página. ¿Podrían brindarme más información sobre esta fragancia?`
        )}`;

    document.getElementById("modalPerfume").style.display = "flex";

    document.body.style.overflow = "hidden";

}


// ================= CERRAR MODAL =================

function cerrarModal() {

    document.getElementById("modalPerfume").style.display = "none";

    document.body.style.overflow = "auto";

}


// ================= INICIO DE PAGINA =================

window.onload = () => {

    window.scrollTo(0, 0);

};