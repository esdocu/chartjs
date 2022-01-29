# Rendimiento

Los gráficos de Chart.js se renderizan en elementos `canvas`, lo que hace que la renderización sea bastante rápida. Para grandes conjuntos de datos o aplicaciones sensibles al rendimiento, es posible que desees considerar los siguientes consejos.

## Estructura y formato de datos

### Análisis

Proporciona los datos preparados en el formato interno aceptado por el conjunto de datos y las escalas, y configura `parsing: false`. Consulta [Estructuras de datos](data-structures.md) para obtener más información.

### Normalización de datos

Chart.js es más rápido si proporcionas datos con índices que son únicos, ordenados y coherentes entre conjuntos de datos y proporcionas la opción `normalized: true` para que Chart.js sepa que lo has hecho. Incluso sin esta opción, a veces puede ser más rápido proporcionar datos ordenados.

### Diezmamiento

Diezmar tus datos logrará los mejores resultados. Cuando hay una gran cantidad de datos para mostrar en el gráfico, no tiene sentido mostrar decenas de miles de puntos de datos en un gráfico que tiene solo unos pocos cientos de píxeles de ancho.

El [complemento de eliminación](../configuration/decimation.md) se puede usar con gráficos de líneas para diezmar los datos antes de que se renderice el gráfico. Esto proporcionará el mejor rendimiento ya que reducirá la memoria necesaria para renderizar el gráfico.

Los gráficos de líneas pueden hacer [diezmación automática de datos durante el dibujado](#automatic-data-decimation-during-draw), cuando se cumplen ciertas condiciones. Aún debes considerar diezmar los datos tú mismo antes de pasarlos para obtener el máximo rendimiento, ya que la destrucción automática ocurre tarde en el ciclo de vida del gráfico.

## Cálculo de ticks

### Rotación

[Especifica un valor de rotación](../axes/cartesian/index.md#tick-configuration) configurando `minRotation` y `maxRotation` en el mismo valor, lo que evita que el gráfico tenga que determinar automáticamente un valor para usar.

### Muestreo

Configura la opción [`ticks.sampleSize`](../axes/cartesian/index.md#tick-configuration). Esto determinará qué tan grandes son tus etiquetas al observar solo un subconjunto de ellas para renderizar los ejes más rápidamente. Esto funciona mejor si no hay una gran variación en el tamaño de las etiquetas.

## Deshabilitar animaciones

Si tus gráficos tienen tiempos de procesamiento prolongados, es una buena idea deshabilitar las animaciones. Si lo haces, significará que el gráfico solo debe renderizarse una vez durante una actualización en lugar de varias veces. Esto tendrá el efecto de reducir el uso de la CPU y mejorar el rendimiento general de la página.
Los gráficos de líneas utilizan el almacenamiento en caché de Path2D cuando las animaciones están deshabilitadas y Path2D está disponible.

Para deshabilitar animaciones:

```javascript
new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        animation: false
    }
});
```

## Especifíca `min` y `max` para escalas

Si especificas `min` y `max`, la escala no tiene que calcular el rango a partir de los datos.

```javascript
new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        scales: {
            x: {
                type: 'time',
                min: new Date('2019-01-01').valueOf(),
                max: new Date('2019-12-31').valueOf()
            },
            y: {
                type: 'linear',
                min: 0,
                max: 100
            }
        }
    }
});
```

## Renderización paralela con web workers (solo Chromium)

Chromium (Chrome: versión 69, Edge: 79, Opera: 56) agregó la capacidad de [transferir el control de renderización de un canvas](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/transferControlToOffscreen) a un web worker. Los web workers pueden usar la [API OffscreenCanvas](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas) para renderizar desde un web worker en canvas en el DOM. Chart.js es una biblioteca basada en canvas y admite la renderización en un web worker: simplemente pasa un OffscreenCanvas al constructor Chart en lugar de un elemento Canvas. Ten en cuenta que, a día de hoy, esta API solo es compatible con navegadores basados ​​en Chromium.

Al mover todos los cálculos de Chart.js a un subproceso separado, el subproceso principal se puede liberar para otros usos. Algunos consejos y trucos al usar Chart.js en un web worker:

* La transferencia de datos entre subprocesos puede ser costosa, así que asegúrate de que tu configuración y tus objetos de datos sean lo más pequeños posible. Intenta generarlos en el lado del worker si puedes (¡los workeres pueden hacer solicitudes HTTP!) O pásalos a tu worker como ArrayBuffers, que se pueden transferir rápidamente de un subproceso a otro.
* No puedes transferir funciones entre subprocesos, por lo que si tu objeto de configuración incluye funciones, deberás eliminarlas antes de transferirlas y luego agregarlas nuevamente.
* No puedes acceder al DOM desde subprocesos de worker, por lo que es probable que los complementos de Chart.js que usan el DOM (incluidas las interacciones del mouse) no funcionen.
* Asegúrate de tener una alternativa si es compatible con navegadores que no sean los navegadores Chromium más modernos.
* El cambio de tamaño del chart debe hacerse manualmente. Mira un ejemplo en el código de worker a continuación.

Ejemplo de código de hilo principal:

```javascript
const config = {};
const canvas = new HTMLCanvasElement();
const offscreenCanvas = canvas.transferControlToOffscreen();

const worker = new Worker('worker.js');
worker.postMessage({canvas: offscreenCanvas, config}, [offscreenCanvas]);
```

Ejemplo de código de worker, en `worker.js`:

```javascript
onmessage = function(event) {
    const {canvas, config} = event.data;
    const chart = new Chart(canvas, config);

    // El cambio de tamaño del chart debe hacerse manualmente, ya que OffscreenCanvas no incluye detectores de eventos.
    canvas.width = 100;
    canvas.height = 100;
    chart.resize();
};
```

## Charts de líneas

### Dejar las curvas de Bézier deshabilitadas

Si estás dibujando líneas en su gráfico, deshabilitar las curvas Bézier mejorará los tiempos de renderizado, ya que dibujar una línea recta es más eficaz que una curva Bézier. Las curvas de Bézier están desactivadas de forma predeterminada.

### Eliminación automática de datos durante el dibujado

El elemento de línea diezmará automáticamente los datos, cuando `tension`, `stepped` y `borderDash` se dejen en sus valores predeterminados (`false`, `0` y `[]` respectivamente). Esto mejora la velocidad de renderizado al omitir el dibujo de segmentos de líneas invisibles.

### Habilitar spanGaps

Si tiene muchos puntos de datos, puedea ser más eficaz habilitar `spanGaps`. Esto deshabilita la segmentación de la línea, lo que puede ser un paso innecesario.

Para habilitar `spanGaps`:

```javascript
new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            spanGaps: true // habilitar para un solo conjunto de datos
        }]
    },
    options: {
        spanGaps: true // habilitar para todos los conjuntos de datos
    }
});
```

### Desactivar dibujo lineal

Si tienes muchos puntos de datos, puede ser más eficaz deshabilitar la renderización de la línea para un conjunto de datos y solo dibujar puntos. Hacer esto significa que hay menos para dibujar en el lienzo, lo que mejorará el rendimiento del renderizado.

Para deshabilitar líneas:

```javascript
new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            showLine: false // deshabilitar para un solo conjunto de datos
        }]
    },
    options: {
        showLine: false // deshabilitar para todos los conjuntos de datos
    }
});
```

### Desactivar dibujo de puntos

Si tienes muchos puntos de datos, puede ser más eficaz deshabilitar la renderización de los puntos para un conjunto de datos y solo dibujar una línea. Hacer esto significa que hay menos para dibujar en el lienzo, lo que mejorará el rendimiento del renderizado.

Para deshabilitar el dibujo de puntos:

```javascript
new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            pointRadius: 0 // deshabilitar para un solo conjunto de datos
        }]
    },
    options: {
        datasets: {
            line: {
                pointRadius: 0 // deshabilitar para todos los conjuntos de datos `'line'`
            }
        },
        elements: {
            point: {
                radius: 0 // Predeterminado, deshabilitado en todos los conjuntos de datos
            }
        }
    }
});
```

## Al transpilar con Babel, consider usar el modo `loose`

Babel 7.9 cambió la forma en que se construyen las clases. Es lento, a menos que se use con el modo `loose`.
[Más información](https://github.com/babel/babel/issues/11356)