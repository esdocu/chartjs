# Responsive Charts

Cuando se trata de cambiar el tamaño del chart en función del tamaño de la ventana, una limitación importante es que el tamaño del *renderizado* del canvas (`canvas.width` y `.height`) **no** puede expresarse con valores relativos, contrario al tamaño de *display* (`canvas.style.width` y `.height`). Además, estos tamaños son independientes entre sí y, por lo tanto, el tamaño de la *renderización* del canvas no se ajusta automáticamente en función del tamaño de *display*, lo que hace que la renderización sea imprecisa.

Los siguientes ejemplos **no funcionan**:

- `<canvas height="40vh" width="80vw">`: valores **no válidos**, el canvas no cambia de tamaño ([ejemplo](https://codepen.io/chartjs/pen/oWLZaR))
- `<canvas style="height:40vh; width:80vw">`: comportamiento **no válido**, el canvas cambia de tamaño pero se vuelve borroso ([ejemplo](https://codepen.io/chartjs/pen/WjxpmO))
- `<canvas style="margin: 0 auto;">`: comportamiento **no válido**, el canvas se encoge continuamente. Chart.js necesita un contenedor dedicado para cada canvas y este estilo debe aplicarse allí.

Chart.js proporciona [algunas opciones](#configuration-options) para habilitar la capacidad de ser responsive y controlar el comportamiento de cambio de tamaño de los charts al detectar cuándo cambia el tamaño de *display* (pantalla) del canvas y actualizar el tamaño de *renderización* en consecuencia.

## Opciones de configuración

Espacio de nombres: `options`

| Nombre | Tipo | Por defecto | Descripción
| ---- | ---- | ------- | -----------
| `responsive` | `boolean` | `true` | Cambia el tamaño del canvas del chart cuando lo hace su contenedor ([nota importante...](#nota-importante)).
| `maintainAspectRatio` | `boolean` | `true` | Mantener la relación de aspecto del canvas original `(ancho / alto)` al cambiar el tamaño.
| `aspectRatio` | `number` | `2` | Relación de aspecto del canvas (es decir, `ancho/alto`, un valor de 1 que representa un canvas cuadrado). Ten en cuenta que esta opción se ignora si la altura se define explícitamente como atributo o mediante el estilo.
| `onResize` | `function` | `null` | Se llama cuando se produce un cambio de tamaño. Obtiene dos argumentos: la instancia del chart y el nuevo tamaño.
| `resizeDelay` | `number` | `0` | Retrasa la actualización de cambio de tamaño en una cantidad determinada de milisegundos. Esto puede facilitar el proceso de cambio de tamaño eliminando la actualización de los elementos.

## Nota IMPORTANTE

No se puede detectar cuándo cambia el tamaño del canvas directamente desde el elemento `canvas`. Chart.js usa su contenedor principal para actualizar los tamaños de *render* y *display* del canvas. Sin embargo, este método requiere que el contenedor esté **relativamente posicionado** y **dedicado solo al canvas del chart**. La capacidad responsive se puede lograr estableciendo valores relativos para el tamaño del contenedor ([ejemplo](https://codepen.io/chartjs/pen/YVWZbz)):

```html
<div class="chart-container" style="position: relative; height:40vh; width:80vw">
    <canvas id="chart"></canvas>
</div>
```

El gráfico también se puede cambiar de tamaño mediante programación modificando el tamaño del contenedor:

```javascript
chart.canvas.parentNode.style.height = '128px';
chart.canvas.parentNode.style.width = '128px';
```

Ten en cuenta que para que el código anterior cambie correctamente el tamaño de la altura del gráfico, la opción [`maintainAspectRatio`](#configuration-options) también debe establecerse en `false`.

## Impresión de gráficos de tamaño variable

Las media queries CSS permiten cambiar los estilos al imprimir una página. El CSS aplicado a partir de estas consultas de medios puede hacer que los gráficos deban cambiar el tamaño. Sin embargo, el cambio de tamaño no ocurrirá automáticamente. Para admitir el cambio de tamaño de los gráficos al imprimir, debes conectar el evento [onbeforeprint](https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onbeforeprint) y activar manualmente el cambio de tamaño de cada gráfico.

```javascript
function beforePrintHandler () {
    for (let id in Chart.instances) {
        Chart.instances[id].resize();
    }
}
```

También puede encontrar que, debido a las complejidades cuando el navegador diseña el documento para imprimir y cuando se activan los eventos de cambio de tamaño, Chart.js no puede cambiar el tamaño correctamente para el diseño de impresión. Para evitar esto, puedes pasar un tamaño explícito a `.resize()` y luego usar un evento [onafterprint](https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onafterprint) para restaurar el tamaño automático cuando hayas terminado.

```javascript
window.addEventListener('beforeprint', () => {
  myChart.resize(600, 600);
});
window.addEventListener('afterprint', () => {
  myChart.resize();
});
```
