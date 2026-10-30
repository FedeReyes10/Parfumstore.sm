import os
from PIL import Image

# Las 11 imágenes a comprimir (rutas relativas al proyecto)
imagenes = [
    r'imagenes/accesorios/jbl_boombox4.jpeg',
    r'imagenes/accesorios/jbl_charge6.jpeg', 
    r'imagenes/accesorios/jbl_flip7.jpeg',
    r'imagenes/perfumes/art_of_universe.jpeg',
    r'imagenes/perfumes/hawas_fire.jpeg',
    r'imagenes/perfumes/angham.jpeg',
    r'imagenes/perfumes/dubai_night.jpeg',
    r'imagenes/perfumes/tenderina.jpeg',
    r'imagenes/perfumes/rave_now.jpeg',
    r'imagenes/perfumes/odyssey_candee.jpeg',
    r'imagenes/perfumes/veneno_black.jpeg'
]

for ruta in imagenes:
    if not os.path.exists(ruta):
        print(f'No existe: {ruta}')
        continue
    try:
        img = Image.open(ruta)
        # Guardar con calidad 80 (baja el peso notablemente)
        base, ext = os.path.splitext(ruta)
        ruta_out = base + '_q80.jpg'
        img.save(ruta_out, 'JPEG', quality=80, optimize=True)
        
        original = os.path.getsize(ruta)
        nuevo = os.path.getsize(ruta_out)
        ahorro = 100 - (nuevo / original) * 100
        print(f'OK: {os.path.basename(ruta)}: {original/1024:.1f}KB -> {nuevo/1024:.1f}KB ({ahorro:.1f}% de ahorro)')
        
        # Borrar original y renombrar
        os.remove(ruta)
        os.rename(ruta_out, ruta)
    except Exception as e:
        print(f'ERROR en {os.path.basename(ruta)}: {e}')

print('\nProceso finalizado.')