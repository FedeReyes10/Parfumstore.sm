# AGENTS.md --- PARFUMSTORE.SM

## 1. Contexto del proyecto

Este repositorio contiene el sitio web de **PARFUMSTORE.SM**, un negocio
de venta de perfumes árabes originales ubicado en San Martín, Mendoza,
Argentina.

El sitio fue desarrollado como un catálogo comercial para que los
clientes puedan: - Conocer el negocio y sus productos. - Explorar
perfumes por categorías y marcas. - Buscar productos. - Consultar
información y detalles de cada perfume. - Contactar al negocio por
WhatsApp o Instagram.

El sitio está publicado en Cloudflare Pages:

-   URL pública: https://parfumstore-sm.pages.dev/
-   Instagram del negocio: https://www.instagram.com/parfumstore.sm/

El proyecto ya está construido y en funcionamiento. **No se debe tratar
como un proyecto nuevo ni rehacerlo desde cero.** La prioridad es
conservar lo que ya funciona y realizar cambios puntuales, seguros y
coherentes con la estructura existente.

## 2. Rol de OpenCode

Actuá como asistente de desarrollo responsable de mantener y ampliar el
sitio existente.

Antes de modificar: 1. Inspeccioná la estructura real del repositorio.
2. Leé los archivos relevantes y entendé cómo se relacionan HTML, CSS,
JavaScript, datos e imágenes. 3. Identificá cómo están implementados
actualmente el catálogo, las categorías, los filtros, el buscador y las
fichas o ventanas de detalle. 4. Confirmá qué archivos necesitan
cambios. 5. Si existe alguna duda que pueda afectar el comportamiento
actual, explicala antes de tomar una decisión importante.

No inventes nombres de archivos, funciones, categorías, campos ni
estructuras. Primero verificá cómo está organizado el proyecto.

## 3. Forma de trabajo y comunicación

El usuario está aprendiendo desarrollo web y utiliza OpenCode desde su
computadora. Necesita que las tareas se expliquen en español claro, sin
asumir conocimientos avanzados.

Reglas de trabajo: - Trabajá **una tarea por vez**. - Explicá brevemente
qué vas a cambiar y por qué. - No mezcles tareas futuras con la tarea
autorizada. - No hagas rediseños, refactorizaciones generales ni mejoras
adicionales sin autorización. - No cambies archivos que no sean
necesarios para la tarea. - No reemplaces código funcional por una
solución nueva solo por preferencia personal. - Priorizá cambios
pequeños, mantenibles y compatibles con el proyecto actual. - Si
encontrás un problema ajeno a la tarea, informalo; no lo corrijas por
iniciativa propia si implica ampliar el alcance. - No entregues
solamente fragmentos incompletos cuando el usuario necesite copiar un
archivo entero. Si solicita un archivo completo, entregalo completo. -
No afirmes que algo fue probado si no ejecutaste la comprobación
correspondiente. - No publiques ni despliegues cambios sin autorización
explícita.

Antes de finalizar: 1. Revisá los cambios realizados. 2. Comprobá rutas
de imágenes y archivos. 3. Verificá que no haya errores evidentes de
sintaxis. 4. Probá las funciones afectadas cuando el entorno lo permita.
5. Revisá especialmente el comportamiento responsive en móvil y
escritorio. 6. Informá qué no se pudo probar.

## 4. Funcionalidades existentes que deben preservarse

El sitio ya cuenta con funcionalidades de catálogo. Según la
implementación real del repositorio, preservá:

-   Presentación del negocio y portada principal.
-   Catálogo de perfumes.
-   Tarjetas de productos con imagen, nombre, marca y precio.
-   Buscador de productos.
-   Filtros por categorías y marcas.
-   Categorías de perfumes (por ejemplo, masculinos, femeninos y unisex,
    según estén implementadas).
-   Productos destacados, si están presentes.
-   Vista de detalle, modal o ficha de producto, si está presente.
-   Información de notas, temporada, duración u otros datos del perfume,
    cuando corresponda.
-   Botones y enlaces de contacto por WhatsApp.
-   Enlaces a Instagram.
-   Diseño adaptable a celulares y computadoras.

No elimines ni alteres estas funciones al incorporar nuevos productos o
categorías. Si una modificación exige adaptar alguna, mantené su
comportamiento y probá los casos afectados.

## 5. Tarea actual autorizada: actualización del catálogo

El cliente solicitó por ahora:

1.  Agregar los parlantes que comercializa.
2.  Crear una categoría llamada **Accesorios**.
3.  Actualizar precios de perfumes existentes.
4.  Incorporar nuevos perfumes que el cliente entregará con sus datos e
    imágenes.

**El rediseño general a blanco NO forma parte de esta tarea actual.** Se
conversó como una posible modificación futura y debe quedar pendiente
hasta que el usuario lo autorice expresamente.

### 5.1 Categoría Accesorios

La solución preferida es incorporar **Accesorios como una categoría más
dentro del catálogo actual**, no crear otra página HTML ni un catálogo
separado.

Comportamiento esperado: - Al seleccionar «Accesorios», mostrar
únicamente los productos pertenecientes a esa categoría (inicialmente,
los parlantes). - Ocultar los perfumes mientras la categoría Accesorios
esté seleccionada. - Al volver a «Todos», mostrar nuevamente todos los
productos. - Mantener el buscador y los filtros funcionando de manera
coherente con la categoría seleccionada. - No romper los filtros
actuales de marcas o las categorías de perfumes. - Mantener el diseño de
las tarjetas y los detalles de producto coherentes con el sitio actual,
salvo que la estructura existente requiera una adaptación puntual.

Aunque inicialmente haya solo tres parlantes, la implementación debe
permitir agregar más accesorios en el futuro sin tener que rehacer el
catálogo.

Antes de implementar, inspeccioná el sistema de categorías actual.
Reutilizá la lógica existente cuando sea posible. No dupliques
innecesariamente el catálogo ni crees una segunda aplicación.

### 5.2 Datos de los parlantes y nuevos perfumes

No inventes información comercial. Usá solamente los datos que
proporcione el usuario o el cliente.

Para cada producto, verificá qué campos exige el esquema actual. Podrían
incluir: - Identificador. - Nombre. - Marca. - Precio. - Categoría. -
Imagen. - Descripción o información adicional.

No agregues campos nuevos si el sistema actual no los necesita. Si falta
un dato obligatorio, preguntalo o informá qué falta; no lo completes con
información inventada.

Los parlantes deben quedar clasificados como **Accesorios**, no como
perfumes ni como una marca de perfume.

### 5.3 Actualización de precios

-   Modificá únicamente los precios que indique el usuario.
-   Conservá los identificadores y el resto de los datos de cada
    producto.
-   Revisá que el formato monetario coincida con el que ya utiliza el
    catálogo.
-   Comprobá que el precio actualizado aparezca correctamente en la
    tarjeta y en la vista de detalle, si ambas lo muestran.

### 5.4 Imágenes

-   Verificá que el nombre y la extensión del archivo coincidan
    exactamente con la ruta utilizada en los datos.
-   Respetá la organización de imágenes existente.
-   No renombres imágenes en masa ni muevas carpetas sin necesidad.
-   Comprobá que cada imagen cargue en el entorno local y que la ruta
    sea compatible con el deploy.
-   Si falta una imagen, informalo; no uses una imagen de otro producto
    como si fuera la correcta.

## 6. Diseño y experiencia de usuario

Para esta actualización, conservá la identidad visual actual de
PARFUMSTORE.SM.

La nueva categoría Accesorios debe integrarse visualmente con el
catálogo existente: - Mantener jerarquía, espaciados y estilo de
tarjetas. - Evitar que la categoría parezca una sección improvisada. -
Asegurar que el selector de categorías sea cómodo en pantallas
pequeñas. - Evitar desbordamientos horizontales en celulares. - Mantener
legibles los nombres y precios. - No agregar elementos decorativos que
dificulten la navegación.

No cambies ahora el diseño general a blanco. Cuando el usuario lo
solicite, deberá tratarse como una tarea separada, con revisión de
colores, fondos, tipografías, tarjetas, botones, estados y contraste en
todo el sitio.

## 7. Responsive y compatibilidad

Cada cambio debe funcionar en: - Celulares. - Tablets, si el diseño
actual las contempla. - Computadoras de escritorio.

Prestá especial atención a: - Navegación y filtros en móvil. - Grilla de
productos. - Imágenes sin deformaciones. - Textos y precios que no se
corten. - Modales o fichas que puedan desplazarse correctamente. -
Botones de WhatsApp y enlaces de contacto.

No sacrifiques la experiencia móvil para mejorar únicamente la versión
de escritorio.

## 8. Alcance comercial y mantenimiento

El usuario está organizando el servicio de mantenimiento del sitio y
quiere distinguir entre cambios pequeños y desarrollos nuevos.

Como referencia de planificación conversada: - **Mantenimiento básico:**
actualización de precios y carga o modificación sencilla de productos
dentro de la estructura existente. - **Trabajo adicional:** nuevas
categorías, nuevas secciones, cambios estructurales o rediseños. -
**Rediseño a blanco:** posible trabajo futuro, separado de la
actualización actual.

Estos importes y condiciones son decisiones comerciales del usuario, no
reglas técnicas. No decidas ni comuniques precios al cliente por tu
cuenta. Tu responsabilidad es identificar el alcance técnico real y
describir qué trabajo implica para que el usuario pueda presupuestarlo.

## 9. Seguridad del proyecto y límites

-   No borres productos existentes.
-   No cambies identificadores de productos sin una razón necesaria y
    autorización.
-   No elimines filtros, buscador, detalles ni enlaces.
-   No sustituyas el contenido real por datos de prueba en la versión
    final.
-   No agregues dependencias nuevas si se puede resolver con la
    tecnología existente.
-   No cambies configuración de Cloudflare, dominio o deploy sin
    autorización.
-   No publiques cambios automáticamente.
-   No incluyas claves, tokens, contraseñas ni datos privados en el
    código.
-   No hagas cambios masivos de formato o estilo que oculten las
    modificaciones importantes.

Si una petición parece requerir una modificación amplia, explicá el
impacto y pedí confirmación antes de ejecutarla.

## 10. Orden recomendado para la tarea actual

Cuando el usuario entregue los datos, seguí este orden:

1.  Revisar la estructura del catálogo y el esquema de productos.
2.  Identificar cómo se filtran actualmente las categorías.
3.  Planificar el cambio mínimo para sumar Accesorios.
4.  Incorporar la categoría y los parlantes.
5.  Actualizar los precios indicados.
6.  Cargar los nuevos perfumes con los datos e imágenes proporcionados.
7.  Probar «Todos», cada categoría de perfumes y «Accesorios».
8.  Probar el buscador y los filtros de marcas.
9.  Revisar las tarjetas y detalles de los nuevos productos.
10. Revisar móvil y escritorio.
11. Entregar un informe final breve.

No avances con el rediseño a blanco en esta tanda.

## 11. Formato del informe final

Al terminar cada tarea, entregá un informe en español de no más de 10
líneas, claro y concreto. Debe indicar:

-   Qué se modificó.
-   Qué archivos se tocaron.
-   Qué comportamiento se comprobó.
-   Qué quedó pendiente o no se pudo verificar.
-   Si el proyecto está listo para que el usuario lo revise.

No incluyas logs extensos ni afirmaciones de pruebas que no se hayan
realizado.

## 12. Prioridad general

La prioridad es **mantener estable el sitio que ya está publicado,
incorporar los productos y accesorios solicitados y evitar cambios fuera
del alcance autorizado**.

Si hay que elegir entre una solución compleja y una modificación pequeña
que respeta la arquitectura existente, preferí la modificación pequeña
siempre que cumpla correctamente el objetivo.
