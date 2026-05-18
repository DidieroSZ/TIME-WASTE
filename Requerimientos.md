## App: Password Generator

---

# Requerimientos — Time Waste

### Generales
- Navegación entre secciones mediante rutas.
- Interfaz responsiva para móvil y escritorio.
- Persistencia de datos con LocalStorage.
- Actualización dinámica sin recargar la página.
- Sistema de temas (dark/light).

---

## Contador de Tiempo

### Funcionales
- Permitir ingresar una fecha personalizada.
- Calcular tiempo transcurrido en:
  - años
  - meses
  - días
  - horas
  - minutos
  - segundos
- Actualizar contador en tiempo real.
- Mostrar equivalencias temporales curiosas.
- Mostrar frases dinámicas aleatorias.
- Visualizar estadísticas alternativas.
- Compartir resultados.

### No funcionales
- Precisión en cálculos temporales.
- Animaciones fluidas.
- Bajo consumo de recursos.
- Compatibilidad cross-browser.

---

## Tiempo Gastado

### Funcionales
- Seleccionar horas gastadas por semana.
- Seleccionar actividad.
- Calcular tiempo acumulado según edad.
- Mostrar equivalencias y referencias.
- Generar predicciones futuras.
- Mostrar visualizaciones dinámicas.
- Compartir estadísticas.

### No funcionales
- Interacción fluida del slider.
- Renderizado reactivo.
- Escalabilidad modular.
- Diseño adaptable.

---

# Requerimientos técnicos

## Frontend
- Lit-Element
- JavaScript ES6+
- HTML5
- CSS3
- Vite

---

## APIs y utilidades
- Date API
- Intl API
- LocalStorage API
- Clipboard API
- RequestAnimationFrame

---

Inspiración:
[Time Waste Calculator](https://www.instagram.com/p/DX94QTfCKO0/?utm_source=ig_web_button_share_sheet)
[Image](https://instagram.fbjx1-1.fna.fbcdn.net/v/t51.82787-15/687523139_17993478740952021_9157767818949293187_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=102&ig_cache_key=Mzg5MDUxMjk5ODEzOTI1NjA1Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=ZCI1RQUL4xgQ7kNvwH0pn6Z&_nc_oc=Adrvofb7TYUbvHtyOJ0-Zy09_cxY00IJjr_7WK0u8ANQzITr73YpZFqoFIle4mQ-rKk5tokdU_Dh3nyuaG51JJZW&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbjx1-1.fna&_nc_gid=ig5rzb0X6WVTA0LZhhC5TA&_nc_ss=7a22e&oh=00_Af6h5g4P1BOb6z17ywdFBfkiIPBKZxjUahj817IAF89Lqg&oe=6A110AFD)