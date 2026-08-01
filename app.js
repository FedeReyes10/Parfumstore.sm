const contenedorMasculinos = document.getElementById("perfumes-masculinos");
const contenedorFemeninos = document.getElementById("perfumes-femeninos");
const contenedorDestacados = document.querySelector(".grid-destacados");


function crearCard(perfume) {

    return `

    <div class="card-perfume">

        <div class="imagen-perfume">

            <img src="${perfume.imagen}" alt="${perfume.nombre}">

        </div>

        <h3>${perfume.nombre}</h3>

        <p>${perfume.marca}</p>

        <span>$${perfume.precio.toLocaleString()}</span>

        <a 
        href="https://wa.me/542634215719?text=Hola,%20quiero%20consultar%20por%20${encodeURIComponent(perfume.nombre)}"
        target="_blank">

            Consultar

        </a>

    </div>

    `;

}


// Cargar perfumes

perfumes.forEach(perfume => {


    if(perfume.genero === "Masculino"){

        contenedorMasculinos.innerHTML += crearCard(perfume);

    }


    if(perfume.genero === "Femenino"){

        contenedorFemeninos.innerHTML += crearCard(perfume);

    }


    if(perfume.destacado){

        contenedorDestacados.innerHTML += crearCard(perfume);

    }


});