const perfumes = [

    {
        id: 1,
        nombre: "Khamrah",
        marca: "Lattafa",
        genero: "Masculino",
        precio: 55000,
        destacado: true,
        etiqueta: "Más vendido",
        imagen: "khamrah.jpeg",

        descripcion: "Khamrah de Lattafa es una fragancia intensa y elegante con un perfil dulce y especiado. Ideal para quienes buscan un perfume con presencia, perfecto para ocasiones especiales y noches frescas.",

        salida: "Canela, bergamota y nuez moscada.",

        corazon: "Dátiles, praliné, tuberosa y mahonial.",

        fondo: "Vainilla, haba tonka, ámbar, mirra y benjuí.",

        estacion: "Otoño e invierno. Ideal para noches y climas frescos."
    },

    {
        id: 2,
        nombre: "Asad Black",
        marca: "Lattafa",
        genero: "Masculino",
        precio: 56000,
        destacado: true,
        etiqueta: "Recomendado",
        imagen: "asad_black.jpg",

        descripcion: "Fragancia cálida, especiada y ambarada de carácter intenso.",

        salida: "Pimienta negra, piña y tabaco.",

        corazon: "Café, iris y pachulí.",

        fondo: "Ámbar, vainilla, maderas secas, benjuí y ládano.",

        estacion: "Otoño e invierno. Ideal para noches."
    },

    {
        id: 3,
        nombre: "9PM",
        marca: "Afnan",
        genero: "Masculino",
        precio: 60000,
        destacado: true,
        etiqueta: "Más vendido",
        imagen: "9pm.jpeg",

        descripcion: "Fragancia dulce, frutal y especiada, con un carácter seductor y nocturno. Una opción marcada para salidas y ocasiones especiales.",

        salida: "Bergamota, lavanda, canela y manzana.",

        corazon: "Muguet y flor de azahar.",

        fondo: "Pachulí, ámbar, vainilla y haba tonka.",

        estacion: "Otoño e invierno. Especialmente recomendable para la noche."
    },

    {
        id: 4,
        nombre: "9PM Elixir EDP",
        marca: "Afnan",
        genero: "Masculino",
        precio: 90000,
        destacado: true,
        etiqueta: "Nuevo",
        imagen: "9pm_elixir_edp.jpeg",

        descripcion: "Una interpretación más cálida, especiada y profunda de la línea 9PM, con cuero y vainilla en un perfil pensado para la noche.",

        salida: "Nuez moscada, elemí y cardamomo.",

        corazon: "Pimiento, lavanda y cuero.",

        fondo: "Cistus, ládano, pachulí y vainilla.",

        estacion: "Otoño e invierno. Ideal para noches."
    },

    {
        id: 5,
        nombre: "Amber Oud Gold EDP",
        marca: "Al Haramain",
        genero: "Masculino",
        precio: 75000,
        destacado: true,
        etiqueta: "Premium",
        imagen: "amber_oud_gold_edp.jpeg",

        descripcion: "Fragancia dulce, frutal y avainillada, con un carácter luminoso y elegante. Su perfil es versátil y llamativo.",

        salida: "Bergamota y notas verdes.",

        corazon: "Melón, piña, ámbar y acorde gourmand.",

        fondo: "Vainilla, almizcle y notas amaderadas.",

        estacion: "Primavera, otoño e invierno. Versátil para día o noche."
    },

    {
        id: 6,
        nombre: "Bade'e Honor & Glory",
        marca: "Lattafa",
        genero: "Masculino",
        precio: 55000,
        destacado: true,
        etiqueta: "Popular",
        imagen: "badee_honor_glory.jpeg",

        descripcion: "Fragancia gourmand y especiada con una salida tropical y un fondo cremoso, cálido y amaderado.",

        salida: "Pineapple Brûlée.",

        corazon: "Cúrcuma, canela, pimienta negra y benjuí.",

        fondo: "Vainilla, cashmeran, sándalo y musgo.",

        estacion: "Otoño e invierno. También puede disfrutarse en noches frescas de primavera."
    },

    {
        id: 7,
        nombre: "Bade'e Oud Black",
        marca: "Lattafa",
        genero: "Masculino",
        precio: 52000,
        destacado: false,
        etiqueta: "",
        imagen: "badee_oud_black.jpeg",

        descripcion: "Fragancia oscura, amaderada y especiada, pensada para quienes buscan un perfil profundo y elegante.",

        salida: "Bergamota, pimienta rosa y grosella negra.",

        corazon: "Peonía, caramelo y madera de oud.",

        fondo: "Frambuesa, pachulí y ámbar seco.",

        estacion: "Otoño e invierno. Ideal para la noche."
    },

    {
        id: 8,
        nombre: "Bade'e Oud Sublime",
        marca: "Lattafa",
        genero: "Masculino",
        precio: 55000,
        destacado: false,
        etiqueta: "",
        imagen: "badee_oud_sublime.jpeg",

        descripcion: "Fragancia frutal y dulce con un corazón floral y un fondo suave, amaderado y ligeramente gourmand.",

        salida: "Ciruela, manzana y lichi.",

        corazon: "Magnolia, jazmín, nota solar, ládano y ámbar.",

        fondo: "Almizcle, musgo y oud caramelizado.",

        estacion: "Primavera y otoño. Versátil para día y tarde."
    },
    {
        id: 9,
        nombre: "Bharara King",
        marca: "Bharara",
        genero: "Masculino",
        precio: 115000,
        destacado: true,
        etiqueta: "Premium",
        imagen: "bharara_king.jpeg",

        descripcion: "Fragancia dulce, frutal y amaderada, con una presencia marcada y un perfil elegante y llamativo.",

        salida: "Piña, naranja, limón y bergamota.",

        corazon: "Almizcle, ámbar y notas florales.",

        fondo: "Vainilla, musgo, maderas y almizcle.",

        estacion: "Primavera, otoño e invierno. Versátil para día y noche."
    },

    {
        id: 10,
        nombre: "Erba Pura",
        marca: "Xerjoff",
        genero: "Masculino",
        precio: 85000,
        destacado: true,
        etiqueta: "Exclusivo",
        imagen: "erba_pura.jpeg",

        descripcion: "Fragancia intensa y luminosa de perfil frutal, almizclado y ambarado, con una estela muy marcada.",

        salida: "Naranja, bergamota y limón de Sicilia.",

        corazon: "Frutal y floral.",

        fondo: "Almizcle blanco, ámbar y vainilla de Madagascar.",

        estacion: "Primavera, otoño e invierno. Funciona tanto de día como de noche."
    },

    {
        id: 11,
        nombre: "Bade'e Oud Amethyst",
        marca: "Lattafa",
        genero: "Masculino",
        precio: 65000,
        destacado: false,
        etiqueta: "",
        imagen: "badee_oud_amethyst.jpg",

        descripcion: "Fragancia floral, amaderada y especiada, con un carácter elegante y profundo.",

        salida: "Pimienta rosa y bergamota.",

        corazon: "Rosa turca y jazmín.",

        fondo: "Oud, ámbar, vainilla y pachulí.",

        estacion: "Otoño, invierno y noches frescas."
    },

    {
        id: 12,
        nombre: "The Kingdom",
        marca: "Lattafa",
        genero: "Masculino",
        precio: 70000,
        destacado: true,
        etiqueta: "Nuevo",
        imagen: "the_kingdom.jpg",

        descripcion: "Fragancia dulce, aromática y amaderada, con un perfil moderno y masculino.",

        salida: "Lavanda, mandarina y pimienta rosa.",

        corazon: "Canela, menta y flor de azahar.",

        fondo: "Vainilla, haba tonka, ámbar y benjuí.",

        estacion: "Otoño e invierno. Especialmente recomendable para la noche."
    },

    {
        id: 13,
        nombre: "Khamrah Qahwa",
        marca: "Lattafa",
        genero: "Masculino",
        precio: 60000,
        destacado: true,
        etiqueta: "Popular",
        imagen: "khamrah_qahwa.jpeg",

        descripcion: "Fragancia gourmand y especiada que combina el carácter dulce de Khamrah con un acorde de café tostado.",

        salida: "Canela, cardamomo y jengibre.",

        corazon: "Praliné, frutas confitadas y flores blancas.",

        fondo: "Café, vainilla, haba tonka, almizcle y benjuí.",

        estacion: "Otoño e invierno. Ideal para noches y climas frescos."
    },

    {
        id: 14,
        nombre: "Khamrah Dukhan",
        marca: "Lattafa",
        genero: "Masculino",
        precio: 50000,
        destacado: false,
        etiqueta: "",
        imagen: "khamrah_dukhan.jpg",

        descripcion: "Fragancia cálida, especiada y ahumada, con un perfil intenso y envolvente.",

        salida: "Pimienta, canela y especias aromáticas.",

        corazon: "Tabaco, incienso y acordes dulces.",

        fondo: "Ámbar, vainilla, haba tonka y maderas.",

        estacion: "Otoño e invierno. Principalmente para la noche."
    },

    {
        id: 15,
        nombre: "Asad Green",
        marca: "Lattafa",
        genero: "Masculino",
        precio: 48000,
        destacado: false,
        etiqueta: "",
        imagen: "asad_green.jpg",

        descripcion: "Fragancia fresca, aromática y amaderada, con un perfil masculino y versátil.",

        salida: "Acordes cítricos y especiados.",

        corazon: "Notas aromáticas y florales.",

        fondo: "Maderas, ámbar y almizcle.",

        estacion: "Primavera y verano. Ideal para el día y temperaturas templadas."
    },

    {
        id: 16,
        nombre: "Asad Bourbon",
        marca: "Lattafa",
        genero: "Masculino",
        precio: 60000,
        destacado: true,
        etiqueta: "Nuevo",
        imagen: "asad_bourbon.jpeg",

        descripcion: "Fragancia cálida y dulce con un perfil gourmand, especiado y amaderado.",

        salida: "Lavanda y pimienta rosa.",

        corazon: "Cacao, nuez moscada y davana.",

        fondo: "Bourbon vainilla, ámbar y vetiver.",

        estacion: "Otoño e invierno. Ideal para noches y ocasiones especiales."
    },

    {
        id: 17,
        nombre: "Hayaati Black",
        marca: "Lattafa",
        genero: "Masculino",
        precio: 48000,
        destacado: false,
        etiqueta: "",
        imagen: "hayaati_black.jpeg",

        descripcion: "Fragancia fresca, frutal y amaderada, con un carácter juvenil y versátil.",

        salida: "Manzana y bergamota.",

        corazon: "Canela, maderas y notas aromáticas.",

        fondo: "Almizcle, ámbar y maderas.",

        estacion: "Primavera y verano. Buena opción para el uso diario."
    },

    {
        id: 18,
        nombre: "Hayaati Gold Elixir",
        marca: "Lattafa",
        genero: "Masculino",
        precio: 45000,
        destacado: false,
        etiqueta: "",
        imagen: "hayaati_gold_elixir.jpeg",

        descripcion: "Fragancia cálida, dulce y amaderada, con un carácter elegante y envolvente.",

        salida: "Notas frutales y especiadas.",

        corazon: "Acordes florales y aromáticos.",

        fondo: "Ámbar, vainilla, almizcle y maderas.",

        estacion: "Otoño e invierno. Ideal para la noche."
    },
    {
        id: 19,
        nombre: "Odyssey Limoni EDP",
        marca: "Armaf",
        genero: "Masculino",
        precio: 55000,
        destacado: true,
        etiqueta: "Nuevo",
        imagen: "odyssey_limoni_edp.jpeg",

        descripcion: "Fragancia cítrica, fresca y aromática, con un perfil luminoso y moderno.",

        salida: "Limón y notas cítricas.",

        corazon: "Acordes aromáticos y especiados.",

        fondo: "Maderas, almizcle y ámbar.",

        estacion: "Primavera y verano. Ideal para el día."
    },

    {
        id: 20,
        nombre: "Odyssey Homme White",
        marca: "Armaf",
        genero: "Masculino",
        precio: 65000,
        destacado: true,
        etiqueta: "Premium",
        imagen: "odyssey_homme_white.jpeg",

        descripcion: "Fragancia fresca, cítrica y amaderada, con un perfil limpio y elegante.",

        salida: "Limón, mandarina y notas verdes.",

        corazon: "Notas florales y aromáticas.",

        fondo: "Maderas, ámbar y almizcle.",

        estacion: "Primavera y verano. Excelente para el día."
    },

    {
        id: 21,
        nombre: "Odyssey Homme",
        marca: "Armaf",
        genero: "Masculino",
        precio: 55000,
        destacado: false,
        etiqueta: "",
        imagen: "odyssey_homme.jpg",

        descripcion: "Fragancia aromática, especiada y amaderada, con un carácter masculino y versátil.",

        salida: "Mandarina, neroli y cardamomo.",

        corazon: "Rosa, azahar y cedro.",

        fondo: "Sándalo, vainilla, ámbar y almizcle.",

        estacion: "Otoño, invierno y primavera. Versátil para día y noche."
    },

    {
        id: 22,
        nombre: "Odyssey Spectra EDP",
        marca: "Armaf",
        genero: "Masculino",
        precio: 55000,
        destacado: true,
        etiqueta: "Popular",
        imagen: "odyssey_spectra_EDP.jpeg",

        descripcion: "Fragancia dulce, especiada y amaderada, con un perfil llamativo y moderno.",

        salida: "Pimienta rosa, mandarina y bergamota.",

        corazon: "Lavanda, canela y notas florales.",

        fondo: "Vainilla, haba tonka, ámbar y maderas.",

        estacion: "Otoño e invierno. Ideal para la noche."
    },

    {
        id: 23,
        nombre: "Odyssey Sky Mandarin",
        marca: "Armaf",
        genero: "Masculino",
        precio: 55000,
        destacado: false,
        etiqueta: "",
        imagen: "odyssey_mandarin_sky.jpeg",

        descripcion: "Fragancia fresca, cítrica y dulce, con un perfil juvenil y fácil de llevar.",

        salida: "Mandarina y cítricos.",

        corazon: "Acordes aromáticos y florales.",

        fondo: "Almizcle, ámbar y maderas.",

        estacion: "Primavera y verano. Ideal para el día."
    },

    {
        id: 24,
        nombre: "Odyssey Omega",
        marca: "Armaf",
        genero: "Masculino",
        precio: 55000,
        destacado: false,
        etiqueta: "",
        imagen: "odyssey_omega.jpg",

        descripcion: "Fragancia aromática y amaderada, con un perfil masculino y versátil.",

        salida: "Notas cítricas y aromáticas.",

        corazon: "Especias y acordes florales.",

        fondo: "Maderas, ámbar y almizcle.",

        estacion: "Primavera, otoño e invierno."
    },

    {
        id: 25,
        nombre: "Odyssey Mandarin Sky Elixir",
        marca: "Armaf",
        genero: "Masculino",
        precio: 68000,
        destacado: true,
        etiqueta: "Nuevo",
        imagen: "odyssey_mandarin_sky_elixir.jpeg",

        descripcion: "Fragancia dulce, cítrica y amaderada, con una concentración y presencia marcadas.",

        salida: "Mandarina y notas cítricas.",

        corazon: "Acordes frutales y aromáticos.",

        fondo: "Vainilla, ámbar, almizcle y maderas.",

        estacion: "Otoño, invierno y noches frescas."
    },

    {
        id: 26,
        nombre: "Club de Nuit Intense EDT",
        marca: "Armaf",
        genero: "Masculino",
        precio: 88000,
        destacado: true,
        etiqueta: "Más vendido",
        imagen: "club_de_nuite_intense_men.jpeg",

        descripcion: "Fragancia cítrica, frutal y amaderada, reconocida por su carácter elegante, masculino y de gran proyección.",

        salida: "Limón, piña, bergamota, grosella negra y manzana.",

        corazon: "Abedul, jazmín y rosa.",

        fondo: "Almizcle, ámbar, pachulí y vainilla.",

        estacion: "Primavera, otoño e invierno. Muy versátil para día y noche."
    },

    {
        id: 27,
        nombre: "Club de Nuit Untold",
        marca: "Armaf",
        genero: "Masculino",
        precio: 90000,
        destacado: true,
        etiqueta: "Premium",
        imagen: "club_de_nuit_untold.jpeg",

        descripcion: "Fragancia dulce, ambarada y amaderada, con un perfil elegante y sofisticado.",

        salida: "Azafrán y jazmín.",

        corazon: "Ámbar y ámbar gris.",

        fondo: "Cedro y resinas amaderadas.",

        estacion: "Otoño e invierno. Ideal para la noche y ocasiones especiales."
    },

    {
        id: 28,
        nombre: "Club de Nuit Oud",
        marca: "Armaf",
        genero: "Masculino",
        precio: 85000,
        destacado: true,
        etiqueta: "Premium",
        imagen: "club_de_nuit_oud.jpeg",

        descripcion: "Fragancia intensa y elegante, con un perfil amaderado y especiado dominado por el oud.",

        salida: "Pimienta rosa, bergamota y limón.",

        corazon: "Rosa, jazmín y azafrán.",

        fondo: "Oud, pachulí, vainilla, ámbar y almizcle.",

        estacion: "Otoño e invierno. Principalmente para la noche."
    },
    {
        id: 29,
        nombre: "Hawas Black",
        marca: "Rasasi",
        genero: "Masculino",
        precio: 68000,
        destacado: true,
        etiqueta: "Popular",
        imagen: "hawas_black.jpeg",

        descripcion: "Fragancia intensa y masculina con un perfil aromático, especiado y amaderado.",

        salida: "Notas cítricas, especiadas y aromáticas.",

        corazon: "Acordes florales y especiados.",

        fondo: "Ámbar, almizcle y maderas.",

        estacion: "Otoño e invierno. Ideal para la noche."
    },

    {
        id: 30,
        nombre: "Hawas Yellow",
        marca: "Rasasi",
        genero: "Masculino",
        precio: 58000,
        destacado: false,
        etiqueta: "",
        imagen: "hawas_yellow.jpg",

        descripcion: "Fragancia fresca y vibrante, con un perfil cítrico, frutal y aromático.",

        salida: "Cítricos y notas frutales.",

        corazon: "Acordes aromáticos y florales.",

        fondo: "Almizcle, ámbar y maderas.",

        estacion: "Primavera y verano. Ideal para el día."
    },

    {
        id: 31,
        nombre: "Hawas Ice",
        marca: "Rasasi",
        genero: "Masculino",
        precio: 65000,
        destacado: true,
        etiqueta: "Nuevo",
        imagen: "hawas_ice.jpeg",

        descripcion: "Fragancia fresca, acuática y aromática, con un perfil limpio, moderno y refrescante.",

        salida: "Limón, manzana y bergamota.",

        corazon: "Lavanda, violeta y acordes acuáticos.",

        fondo: "Almizcle, musgo y maderas.",

        estacion: "Primavera y verano. Excelente para el día y temperaturas cálidas."
    },

    {
        id: 32,
        nombre: "Hawas Elixir",
        marca: "Rasasi",
        genero: "Masculino",
        precio: 70000,
        destacado: true,
        etiqueta: "Premium",
        imagen: "hawas_elixir.jpeg",

        descripcion: "Fragancia intensa y elegante, con un perfil amaderado, aromático y ligeramente dulce.",

        salida: "Acordes especiados y aromáticos.",

        corazon: "Notas florales y amaderadas.",

        fondo: "Ámbar, almizcle, vainilla y maderas.",

        estacion: "Otoño e invierno. Ideal para la noche."
    },

    {
        id: 33,
        nombre: "Vulcan Feu",
        marca: "French Avenue",
        genero: "Masculino",
        precio: 62000,
        destacado: true,
        etiqueta: "Nuevo",
        imagen: "vulcan_feu.jpeg",

        descripcion: "Fragancia cálida, especiada y amaderada, con un carácter intenso y llamativo.",

        salida: "Notas frutales y especiadas.",

        corazon: "Acordes florales y amaderados.",

        fondo: "Ámbar, vainilla, almizcle y maderas.",

        estacion: "Otoño e invierno. Ideal para la noche."
    },

    {
        id: 34,
        nombre: "Vulcan",
        marca: "French Avenue",
        genero: "Masculino",
        precio: 62000,
        destacado: false,
        etiqueta: "",
        imagen: "vulcan.jpeg",

        descripcion: "Fragancia frutal, fresca y amaderada, con un perfil moderno y versátil.",

        salida: "Cítricos y frutas.",

        corazon: "Acordes florales y aromáticos.",

        fondo: "Maderas, almizcle y ámbar.",

        estacion: "Primavera y otoño. Versátil para día y tarde."
    },

    {
        id: 35,
        nombre: "Liquid Brun",
        marca: "French Avenue",
        genero: "Masculino",
        precio: 90000,
        destacado: true,
        etiqueta: "Premium",
        imagen: "liquid_brun.jpeg",

        descripcion: "Fragancia cálida, dulce y especiada, con un carácter gourmand y envolvente.",

        salida: "Canela y cardamomo.",

        corazon: "Bourbon vainilla y jazmín.",

        fondo: "Ámbar, maderas y almizcle.",

        estacion: "Otoño e invierno. Ideal para noches y ocasiones especiales."
    },

    {
        id: 36,
        nombre: "Salvo",
        marca: "French Avenue",
        genero: "Masculino",
        precio: 50000,
        destacado: false,
        etiqueta: "",
        imagen: "salvo.jpeg",

        descripcion: "Fragancia fresca, aromática y amaderada, con un perfil limpio y masculino.",

        salida: "Cítricos y notas aromáticas.",

        corazon: "Lavanda y especias.",

        fondo: "Maderas, ámbar y almizcle.",

        estacion: "Primavera y verano. Ideal para el uso diario."
    },

    {
        id: 37,
        nombre: "Fakhar Rose Gold",
        marca: "Lattafa",
        genero: "Femenino",
        precio: 58000,
        destacado: true,
        etiqueta: "Más vendido",
        imagen: "fakhar_rose_gold.jpg",

        descripcion: "Fragancia femenina floral y dulce, con un perfil elegante, luminoso y moderno.",

        salida: "Frutas y notas cítricas.",

        corazon: "Rosa, jazmín, nardo y flores blancas.",

        fondo: "Almizcle, vainilla y maderas.",

        estacion: "Primavera y verano. Ideal para el día y ocasiones especiales."
    },

    {
        id: 38,
        nombre: "Yara Pink",
        marca: "Lattafa",
        genero: "Femenino",
        precio: 56000,
        destacado: true,
        etiqueta: "Más vendido",
        imagen: "yara_pink.jpeg",

        descripcion: "Fragancia dulce, cremosa y floral con un carácter femenino, suave y envolvente.",

        salida: "Orquídea, heliotropo y mandarina.",

        corazon: "Frutas tropicales y gourmand.",

        fondo: "Vainilla, almizcle y sándalo.",

        estacion: "Primavera, otoño e invierno. Versátil para día y noche."
    },
    {
        id: 39,
        nombre: "Yara Moi",
        marca: "Lattafa",
        genero: "Femenino",
        precio: 65000,
        destacado: true,
        etiqueta: "Popular",
        imagen: "yara_moi.jpeg",

        descripcion: "Fragancia femenina dulce, cremosa y floral, con un carácter elegante y envolvente.",

        salida: "Durazno, pera y notas frutales.",

        corazon: "Jazmín y flores blancas.",

        fondo: "Vainilla, almizcle y sándalo.",

        estacion: "Primavera, otoño e invierno. Ideal para día y tarde."
    },

    {
        id: 40,
        nombre: "Yara Mini (50ml)",
        marca: "Lattafa",
        genero: "Femenino",
        precio: 25000,
        destacado: false,
        etiqueta: "",
        imagen: "yara_mini.jpg",

        descripcion: "Versión compacta de Yara, con un perfil dulce, cremoso y femenino, ideal para llevar a cualquier lugar.",

        salida: "Orquídea, heliotropo y mandarina.",

        corazon: "Frutas tropicales y notas gourmand.",

        fondo: "Vainilla, almizcle y sándalo.",

        estacion: "Primavera, otoño e invierno. Versátil para uso diario."
    },

    {
        id: 41,
        nombre: "Haya Pink",
        marca: "Lattafa",
        genero: "Femenino",
        precio: 50000,
        destacado: false,
        etiqueta: "",
        imagen: "haya_pink.jpeg",

        descripcion: "Fragancia femenina dulce y floral, con un perfil juvenil, suave y agradable.",

        salida: "Frutas y cítricos.",

        corazon: "Flores blancas y notas florales.",

        fondo: "Vainilla, almizcle y maderas suaves.",

        estacion: "Primavera y verano. Ideal para el día."
    },

    {
        id: 42,
        nombre: "Sehr Lattafa",
        marca: "Lattafa",
        genero: "Femenino",
        precio: 58000,
        destacado: true,
        etiqueta: "Nuevo",
        imagen: "sehr_lattafa.jpeg",

        descripcion: "Fragancia gourmand, dulce y cálida, con un perfil cremoso y sofisticado.",

        salida: "Canela, almendra amarga y pomelo.",

        corazon: "Jazmín, rosa y heliotropo.",

        fondo: "Vainilla, haba tonka, ámbar y sándalo.",

        estacion: "Otoño e invierno. Ideal para noches y ocasiones especiales."
    },

    {
        id: 43,
        nombre: "Eclaire",
        marca: "Lattafa",
        genero: "Femenino",
        precio: 68000,
        destacado: true,
        etiqueta: "Popular",
        imagen: "eclaire.jpeg",

        descripcion: "Fragancia gourmand extremadamente cremosa y dulce, con un perfil de caramelo, leche y vainilla.",

        salida: "Caramelo, leche y azúcar.",

        corazon: "Miel, flores blancas y cumarina.",

        fondo: "Vainilla, praliné y almizcle.",

        estacion: "Otoño e invierno. Ideal para noches y climas frescos."
    },

    {
        id: 44,
        nombre: "Her Confession",
        marca: "Lattafa",
        genero: "Femenino",
        precio: 58000,
        destacado: false,
        etiqueta: "",
        imagen: "her_confession.jpeg",

        descripcion: "Fragancia femenina dulce, floral y ambarada, con un carácter elegante y sensual.",

        salida: "Canela, mandarina y acordes frutales.",

        corazon: "Jazmín, nardos y flores blancas.",

        fondo: "Vainilla, haba tonka, ámbar y almizcle.",

        estacion: "Otoño e invierno. Ideal para la noche."
    },

    {
        id: 45,
        nombre: "Vanilla Freak 75ML",
        marca: "Lattafa",
        genero: "Femenino",
        precio: 55000,
        destacado: true,
        etiqueta: "Vainilla",
        imagen: "vanilla_freak_75ML.jpeg",

        descripcion: "Fragancia dulce y gourmand protagonizada por la vainilla, con un carácter cálido y cremoso.",

        salida: "Acordes dulces y especiados.",

        corazon: "Vainilla y notas gourmand.",

        fondo: "Vainilla cremosa, almizcle y maderas suaves.",

        estacion: "Otoño e invierno. Ideal para noches y climas frescos."
    },

    {
        id: 46,
        nombre: "Club de Nuit Woman",
        marca: "Armaf",
        genero: "Femenino",
        precio: 87000,
        destacado: true,
        etiqueta: "Premium",
        imagen: "club_de_nuit_woman.jpeg",

        descripcion: "Fragancia femenina floral, frutal y cítrica, elegante y versátil para distintas ocasiones.",

        salida: "Naranja, pomelo, melocotón y bergamota.",

        corazon: "Rosa, jazmín, geranio y lichi.",

        fondo: "Pachulí, vainilla, almizcle y vetiver.",

        estacion: "Primavera, otoño e invierno. Versátil para día y noche."
    },

    {
        id: 47,
        nombre: "Yum Yum",
        marca: "Armaf",
        genero: "Femenino",
        precio: 70000,
        destacado: true,
        etiqueta: "Nuevo",
        imagen: "yum_yum.jpeg",

        descripcion: "Fragancia femenina dulce, frutal y gourmand, con un carácter juvenil y llamativo.",

        salida: "Frutas rojas, cítricos y notas dulces.",

        corazon: "Flores y acordes gourmand.",

        fondo: "Vainilla, almizcle y maderas.",

        estacion: "Primavera, otoño e invierno. Ideal para día y noche."
    },

    {
        id: 48,
        nombre: "Hawas Malibu",
        marca: "Rasasi",
        genero: "Masculino",
        precio: 62000,
        destacado: false,
        etiqueta: "",
        imagen: "hawas_malibu.jpeg",

        descripcion: "Fragancia fresca, tropical y acuática, pensada para transmitir una sensación limpia y veraniega.",

        salida: "Cítricos y notas tropicales.",

        corazon: "Acordes acuáticos y florales.",

        fondo: "Almizcle, ámbar y maderas.",

        estacion: "Primavera y verano. Ideal para días cálidos."
    },
{
    id: 49,
    nombre: "Asad Elixir",
    marca: "Lattafa",
    genero: "Masculino",
    precio: 68000,
    destacado: true,
    etiqueta: "Nuevo",
    imagen: "asad_elixir.jpg",

    descripcion: "Fragancia intensa, cálida y especiada, con un perfil masculino elegante y de gran presencia.",

    salida: "Notas especiadas y aromáticas.",

    corazon: "Acordes amaderados y florales.",

    fondo: "Ámbar, vainilla, almizcle y maderas.",

    estacion: "Otoño e invierno. Ideal para la noche."
},

{
    id: 50,
    nombre: "Confidential Private Gold",
    marca: "Lattafa",
    genero: "Masculino",
    precio: 48000,
    destacado: false,
    etiqueta: "",
    imagen: "confidential_private_gold.jpg",

    descripcion: "Fragancia dulce, frutal y floral, con un perfil elegante y llamativo.",

    salida: "Notas frutales y cítricas.",

    corazon: "Rosa, jazmín y flores blancas.",

    fondo: "Vainilla, almizcle, ámbar y maderas.",

    estacion: "Primavera, otoño e invierno."
},

{
    id: 51,
    nombre: "His Confession",
    marca: "Lattafa",
    genero: "Masculino",
    precio: 62000,
    destacado: true,
    etiqueta: "Nuevo",
    imagen: "his_confession.jpeg",

    descripcion: "Fragancia masculina elegante, dulce y amaderada, con un carácter cálido y sofisticado.",

    salida: "Canela, mandarina y lavanda.",

    corazon: "Iris, benjuí y ciprés.",

    fondo: "Vainilla, haba tonka, ámbar y maderas.",

    estacion: "Otoño e invierno. Ideal para la noche."
},

{
    id: 52,
    nombre: "Fakhar Black",
    marca: "Lattafa",
    genero: "Masculino",
    precio: 60000,
    destacado: true,
    etiqueta: "Popular",
    imagen: "fakhar_black.jpg",

    descripcion: "Fragancia aromática y amaderada, fresca y elegante, con un perfil masculino moderno.",

    salida: "Manzana, jengibre y bergamota.",

    corazon: "Lavanda, salvia, bayas de enebro y geranio.",

    fondo: "Cedro, vetiver, haba tonka y ámbar.",

    estacion: "Primavera, otoño e invierno. Muy versátil para uso diario."
},

{
    id: 53,
    nombre: "Musamam L",
    marca: "Lattafa",
    genero: "Masculino",
    precio: 68000,
    destacado: false,
    etiqueta: "",
    imagen: "musamam_l.jpeg",

    descripcion: "Fragancia cálida, especiada y amaderada, con un perfil oriental elegante y envolvente.",

    salida: "Notas cítricas y especiadas.",

    corazon: "Acordes aromáticos, florales y amaderados.",

    fondo: "Ámbar, almizcle, vainilla y maderas.",

    estacion: "Otoño e invierno. Ideal para la noche."
},

{
    id: 54,
    nombre: "Al Qaed Al Fursan",
    marca: "Lattafa",
    genero: "Masculino",
    precio: 48000,
    destacado: false,
    etiqueta: "",
    imagen: "al_qaed_al_fursan.jpg",

    descripcion: "Fragancia frutal, dulce y amaderada, con un marcado protagonismo de la piña.",

    salida: "Piña y azafrán.",

    corazon: "Bálsamo de abeto y jazmín.",

    fondo: "Maderas, ámbar y oud.",

    estacion: "Otoño, invierno y primavera."
},

{
    id: 55,
    nombre: "Odyssey Chocolate",
    marca: "Armaf",
    genero: "Masculino",
    precio: 62000,
    destacado: true,
    etiqueta: "Nuevo",
    imagen: "odyssey_chocolate.jpeg",

    descripcion: "Fragancia dulce y gourmand con un perfil cálido, cremoso y envolvente.",

    salida: "Notas dulces y especiadas.",

    corazon: "Chocolate y acordes gourmand.",

    fondo: "Vainilla, ámbar, almizcle y maderas.",

    estacion: "Otoño e invierno. Ideal para noches."
},

{
    id: 56,
    nombre: "Yara Elixir",
    marca: "Lattafa",
    genero: "Femenino",
    precio: 65000,
    destacado: true,
    etiqueta: "Nuevo",
    imagen: "yara_elixir.jpeg",

    descripcion: "Fragancia femenina dulce, cremosa y gourmand, con un carácter cálido y envolvente.",

    salida: "Frutas y notas dulces.",

    corazon: "Acordes florales y gourmand.",

    fondo: "Vainilla, caramelo, almizcle y maderas.",

    estacion: "Otoño e invierno. Ideal para la noche."
},

{
    id: 57,
    nombre: "Erba Pura Original",
    marca: "Xerjoff",
    genero: "Masculino",
    precio: 400000,
    destacado: true,
    etiqueta: "Exclusivo",
    imagen: "erba_pura_original.jpg",

    descripcion: "Fragancia exclusiva de perfil frutal, cítrico y almizclado, reconocida por su gran presencia y estela.",

    salida: "Cítricos y frutas mediterráneas.",

    corazon: "Acordes frutales y florales.",

    fondo: "Almizcle blanco, ámbar y vainilla.",

    estacion: "Primavera, otoño e invierno. Versátil para día y noche."
},
{
    id: 58,
    nombre: "Odyssey Aqua",
    marca: "Armaf",
    genero: "Masculino",
    precio: 60000,
    destacado: true,
    etiqueta: "Nuevo",
    imagen: "odyssey_aqua.jpeg",
    descripcion: "Fragancia fresca, acuática y aromática, con un perfil limpio, enérgico y moderno.",
    salida: "Notas acuáticas, bergamota y limón.",
    corazon: "Acordes marinos, lavanda y violeta.",
    fondo: "Almizcle, ámbar y maderas.",
    estacion: "Primavera y verano. Ideal para días cálidos y uso diario."
},

{
    id: 59,
    nombre: "9PM Rebel",
    marca: "Afnan",
    genero: "Masculino",
    precio: 88000,
    destacado: false,
    etiqueta: "Nuevo",
    imagen: "9pm_rebel_edp.jpg",

    descripcion: "Una fragancia frutal, dulce y amaderada que combina una salida vibrante con un corazón suave y un fondo cálido y envolvente.",

    salida: "Piña, manzana Granny Smith y mandarina.",

    corazon: "Musgo de roble, cedro y vainilla.",

    fondo: "Maderas secas, ámbar gris, caramelo y almizcle.",

    estacion: "Primavera y verano. Ideal para salidas y ocasiones informales."
},

{
    id: 60,
    nombre: "9PM Night Out",
    marca: "Afnan",
    genero: "Masculino",
    precio: 108000,
    destacado: false,
    etiqueta: "Nuevo",
    imagen: "9pm_night_out.jpg",

    descripcion: "Una fragancia intensa y moderna de perfil frutal, dulce y especiado, pensada para acompañar las noches y las ocasiones especiales.",

    salida: "Pitahaya, lavanda, coñac, manzana y bergamota.",

    corazon: "Toffee, ante, cardamomo, cedro y Mahonial.",

    fondo: "Haba tonka, Akigalawood, Ambrofix y pachulí.",

    estacion: "Otoño, invierno y noches frescas. Ideal para salir."
},

{
    id: 61,
    nombre: "Bharara Gold Elixir",
    marca: "Bharara",
    genero: "Masculino",
    precio: 105000,
    destacado: false,
    etiqueta: "Nuevo",
    imagen: "bharara_gold_elixir.jpeg",

    descripcion: "Una fragancia de perfil cálido y sofisticado, ideal para quienes buscan una presencia marcada y elegante.",

    salida: "Información de notas próximamente.",

    corazon: "Información de notas próximamente.",

    fondo: "Información de notas próximamente.",

    estacion: "Otoño e invierno. Ideal para noches."
},
{
    id: 62,
    nombre: "Bharara King 150 ML",
    marca: "Bharara",
    genero: "Masculino",
    precio: 130000,
    destacado: false,
    etiqueta: "Nuevo",
    imagen: "bharara_king_150_ML.jpeg",

    descripcion: "Una fragancia dulce, frutal y amaderada, con una presencia marcada y un perfil elegante y llamativo.",

    salida: "Piña, naranja, limón y bergamota.",

    corazon: "Almizcle, ámbar y notas florales.",

    fondo: "Vainilla, musgo, maderas y almizcle.",

    estacion: "Primavera, otoño e invierno. Versátil para día y noche."
},

{
    id: 63,
    nombre: "Bharara King Soleil",
    marca: "Bharara",
    genero: "Unisex",
    precio: 90000,
    destacado: false,
    etiqueta: "Nuevo",
    imagen: "bharara_king_soleil.jpeg",

    descripcion: "Una fragancia luminosa y gourmand que combina cítricos, frutas y un corazón floral-amaderado con un fondo dulce y sofisticado.",

    salida: "Naranja siciliana, bergamota de Calabria, limón siciliano y frutos rojos.",

    corazon: "Jazmín, sándalo, bálsamo de copaiba, madera de cachemira y ámbar gris.",

    fondo: "Vainilla de Madagascar, chocolate, avellana y benjuí de Siam.",

    estacion: "Primavera y verano. Ideal para días cálidos y noches."
},

{
    id: 64,
    nombre: "Miss Armaf Chic",
    marca: "Armaf",
    genero: "Femenino",
    precio: 60000,
    destacado: false,
    etiqueta: "Nuevo",
    imagen: "miss_armaf_chic.jpeg",

    descripcion: "Una fragancia femenina frutal y floral, fresca y sofisticada, con una apertura jugosa y un fondo suave, dulce y elegante.",

    salida: "Frutilla, frambuesa, pera, naranja, mandarina, bergamota y calone.",

    corazon: "Jazmín, peonía y flor de azahar.",

    fondo: "Pachulí, almizcle, vainilla, ambroxan, cedro y musgo.",

    estacion: "Primavera y verano. Ideal para el día y citas."
},

{
    id: 65,
    nombre: "Ishq Al Shuyukh Gold",
    marca: "Lattafa",
    genero: "Unisex",
    precio: 60000,
    destacado: false,
    etiqueta: "Nuevo",
    imagen: "ishq_al_shuyukh_gold.jpg",

    descripcion: "Una fragancia dulce, cálida y envolvente que combina caramelo y azafrán con cuero y gamuza, sobre un fondo cremoso de vainilla y ámbar.",

    salida: "Caramelo y azafrán.",

    corazon: "Gamuza, cuero y haba tonka.",

    fondo: "Vainilla, ámbar y almizcle.",

    estacion: "Otoño e invierno. Ideal para noches y ocasiones especiales."
},

{
    id: 66,
    nombre: "Teriaq Intense",
    marca: "Lattafa",
    genero: "Unisex",
    precio: 65000,
    destacado: false,
    etiqueta: "Nuevo",
    imagen: "al_teriaq_intense.jpg",

    descripcion: "Una fragancia intensa, cálida y sofisticada que combina cítricos, especias y ciruela licorosa con un fondo dulce, ambarado y envolvente.",

    salida: "Bergamota y azafrán.",

    corazon: "Licor de ciruela y canela.",

    fondo: "Haba tonka, ámbar y benjuí.",

    estacion: "Otoño e invierno. Ideal para noches y ocasiones especiales."
},


];