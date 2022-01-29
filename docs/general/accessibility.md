# Accesibilidad

Los gráficos de Chart.js se renderizan en elementos `canvas` proporcionados por el usuario. Por lo tanto, depende del usuario crear el elemento `canvas` de una manera que sea accesible. El elemento `canvas` es compatible con todos los navegadores y se renderizará en la pantalla, pero los lectores de pantalla no podrán acceder al contenido `canvas`.

Con `canvas`, la accesibilidad debe agregarse con los atributos ARIA en el elemento `canvas` o debe agregarse utilizando el contenido de respaldo interno ubicado dentro de las etiquetas de apertura y cierre del lienzo.

Este [sitio web](http://pauljadam.com/demos/canvas.html) tienes una explicación más detallada de la accesibilidad de `canvas` así como ejemplos detallados.

## Ejemplos

Estos son algunos ejemplos de elementos `canvas` **accesibles**.

Al configurar `rol` y `aria-label`, este `canvas` ahora tiene un nombre accesible.

```html
<canvas id="goodCanvas1" width="400" height="100" aria-label="Hola, palabra ARIA" role="img"></canvas>
```

Este elemento `canvas` tiene una alternativa de texto a través del contenido alternativo.

```html
<canvas id="okCanvas2" width="400" height="100">
    <p>Hola mundo alternativo</p>
</canvas>
```

Estos son algunos malos ejemplos de elementos `canvas` **inaccesibles**.

Este elemento `canvas` no tiene un nombre o función accesible.

```html
<canvas id="badCanvas1" width="400" height="100"></canvas>
```

Este elemento `canvas` tiene contenido alternativo inaccesible.

```html
<canvas id="badCanvas2" width="400" height="100">Su navegador no soporta el elemento canvas.</canvas>
```
