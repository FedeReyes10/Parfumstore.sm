const accesorios = [

    // =========================================
    //  ACCESORIOS DEL CATÁLOGO
    // =========================================

    {
        id: 101,
        nombre: "JBL Flip 7",
        marca: "JBL",
        genero: "Accesorio",
        precio: 220000,
        destacado: false,
        etiqueta: "Nuevo",
        imagen: "jbl_flip7.jpg",

        descripcion: "Parlante portátil impermeable y a prueba de polvo (IP68). Bluetooth 5.4 y hasta 16 horas de batería. Sonido JBL Pro en un formato compacto para llevar a todos lados."
    },

    {
        id: 102,
        nombre: "JBL Charge 6",
        marca: "JBL",
        genero: "Accesorio",
        precio: 300000,
        destacado: false,
        etiqueta: "Nuevo",
        imagen: "jbl_charge6.jpg",

        descripcion: "Parlante portátil impermeable y a prueba de polvo (IP68). Bluetooth 5.4 y hasta 28 horas de batería. Más potencia y volumen, con la robustez característica de la serie Charge."
    },

    {
        id: 103,
        nombre: "JBL Boombox 4",
        marca: "JBL",
        genero: "Accesorio",
        precio: 780000,
        destacado: false,
        etiqueta: "Nuevo",
        imagen: "jbl_boombox4.jpg",

        descripcion: "El parlante portátil impermeable más potente de JBL (IP68). Bluetooth 5.4, hasta 28 horas de batería (34 horas con Playtime Boost) y batería reemplazable. Sonido masivo para fiestas y exteriores."
    },

    // =========================================
    //  CÓMO AGREGAR UN NUEVO ACCESORIO
    // =========================================
    //
    // Copiá el bloque de arriba y completá los datos.
    //
    // IMPORTANTE:
    // - "genero" siempre debe ser "Accesorio" (tal cual, con A mayúscula).
    // - "imagen" debe coincidir exactamente con el nombre del archivo
    //   que esté dentro de la carpeta "imagenes/accesorios/".
    // - El número de "id" no se repite con los de perfumes.js.
    //   Los accesorios arrancan en 101.
    // - "destacado: true" lo muestra en la sección de destacados.
    // - "etiqueta" es el cartelito que aparece sobre la foto
    //   (dejar vacío con "" si no querés que aparezca ninguno).

];
