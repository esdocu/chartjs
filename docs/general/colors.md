# Colores

Al proporcionar colores a las opciones del gráfico, puedes utilizar varios formatos. Puedes especificar el color como una cadena de texto en notaciones hexadecimales, RGB o HSL. Si se necesita un color, pero no se especifica, Chart.js utilizará el color predeterminado global. Hay 3 opciones de color, almacenadas en `Chart.defaults`, para configurar:

| Nombre | Tipo | Por defecto | Descripción
| ---- | ---- | ------- | -----------
| `backgroundColor` | `Color` | `rgba(0, 0, 0, 0.1)` | Color de fondo.
| `borderColor` | `Color` | `rgba(0, 0, 0, 0.1)` | Color de bordes.
| `color` | `Color` | `#666` | Color de fuentes.

También puedes pasar un objeto [CanvasGradient](https://developer.mozilla.org/en-US/docs/Web/API/CanvasGradient). Deberás crear esto antes de pasarselo al chart, pero al usarlo puedes lograr algunos efectos interesantes.

## Patrones y degradados

Una opción alternativa es pasar un [CanvasPattern](https://developer.mozilla.org/en-US/docs/Web/API/CanvasPattern) o [CanvasGradient](https://developer.mozilla.org/en/docs/Web/API/CanvasGradient) en lugar de un color de cadena de texto.

Por ejemplo, si quisieras llenar un conjunto de datos con un patrón de una imagen, podrías hacer lo siguiente.

```javascript
const img = new Image();
img.src = 'https://example.com/my_image.png';
img.onload = function() {
    const ctx = document.getElementById('canvas').getContext('2d');
    const fillPattern = ctx.createPattern(img, 'repeat');

    const chart = new Chart(ctx, {
        data: {
            labels: ['Elemento 1', 'Elemento 2', 'Elemento 3'],
            datasets: [{
                data: [10, 20, 30],
                backgroundColor: fillPattern
            }]
        }
    });
};
```

El uso de rellenos de patrones para gráficos de datos puede ayudar a los espectadores con deficiencias visuales (p. ej., daltonismo o visión parcial) a [comprender más fácilmente sus datos](http://betweentwobrackets.com/data-graphics-and-colour-vision/).

Con la biblioteca [Patternomaly](https://github.com/ashiguruma/patternomaly) puedes generar patrones para completar conjuntos de datos.

```javascript
const chartData = {
    datasets: [{
        data: [45, 25, 20, 10],
        backgroundColor: [
            pattern.draw('square', '#ff6384'),
            pattern.draw('circle', '#36a2eb'),
            pattern.draw('diamond', '#cc65fe'),
            pattern.draw('triangle', '#ffce56')
        ]
    }],
    labels: ['Rojo', 'Azul', 'Púrpura', 'Amarillo']
};
```
