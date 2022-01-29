# Empezando

¡Comencemos a usar Chart.js!

Primero, necesitamos tener un lienzo en nuestra página. Se recomienda darle al chart su propio contenedor para una [capacidad responsive](../configuration/responsive.md).

```html
<div>
  <canvas id="myChart"></canvas>
</div>
```

Ahora que tenemos un lienzo que podemos usar, debemos incluir Chart.js en nuestra página.

```html
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
```

Ahora, podemos crear un chart. Añadimos un script a nuestra página:

```html
<script>
  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'Mi primer dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };
</script>
```

Finalmente, renderizamos el gráfico usando nuestra configuración:

```html
<script>
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
</script>
```

¡Es así de fácil comenzar a usar Chart.js! Desde aquí puedes explorar las muchas opciones que pueden ayudarte a personalizar tus gráficos con escalas, tooltips, etiquetas, colores, acciones personalizadas y mucho más.

Aquí se presenta la muestra anterior con nuestro bloque de ejemplo:

```js chart-editor
// <block:setup:1>
const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
];
const data = {
  labels: labels,
  datasets: [{
    label: 'Mi primer dataset',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 10, 5, 2, 20, 30, 45],
  }]
};
// </block:setup>

// <block:config:0>
const config = {
  type: 'line',
  data: data,
  options: {}
};
// </block:config>

module.exports = {
  actions: [],
  config: config,
};
```

:::tip Nota
Como puedes ver, algunos de los boilerplates necesarios no están visibles en nuestros bloques de ejemplo, ya que las muestras se centran en las opciones de configuración.
:::

Todos nuestros ejemplos están [disponibles en línea](/samples/).

Para ejecutar los ejemplos localmente, primero debes instalar todos los paquetes necesarios con el comando `npm ci`, luego puedes ejecutar `npm run docs:dev` para compilar la documentación. Tan pronto como termine la compilación, puedes ir a [http://localhost:8080/samples/](http://localhost:8080/samples/) para ver los ejemplos.