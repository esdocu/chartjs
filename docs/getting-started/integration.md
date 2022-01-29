# Integración

Chart.js se puede integrar con JavaScript simple o con diferentes cargadores de módulos. Los siguientes ejemplos muestran cómo cargar Chart.js en diferentes sistemas.

## Etiqueta Script

```html
<script src="path/to/chartjs/dist/chart.js"></script>
<script>
    const myChart = new Chart(ctx, {...});
</script>
```

## Common JS

```javascript
const Chart = require('chart.js');
const myChart = new Chart(ctx, {...});
```

## Bundlers (Webpack, Rollup, etc.)

Chart.js 3 es tree-shakeable (remoción de código no utilizado), por lo que es necesario importar y registrar los controladores, elementos, escalas y complementos que vayas a utilizar.

Para todas las importaciones disponibles, consulta el siguiente ejemplo.

```javascript
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
} from 'chart.js';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

const myChart = new Chart(ctx, {...});
```

También está disponible un formato de registro corto para registrar rápidamente todo.

```javascript
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
```

Y finalmente, hay una ruta separada para hacer exactamente lo anterior por tí, en una línea:

```javascript
import Chart from 'chart.js/auto';
```

### Funciones de ayuda

Si deseas utilizar las funciones de ayuda, deberás importarlas por separado del paquete de ayuda y utilizarlas como funciones independientes.

Ejemplo de [Conversión de eventos en valores de datos](../configuration/interactions.md#converting-events-to-data-values) usando paquetes.

```javascript
import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';

const chart = new Chart(ctx, {
  type: 'line',
  data: data,
  options: {
    onClick: (e) => {
      const canvasPosition = getRelativePosition(e, chart);

      // Sustituye las IDS de escala apropiadas
      const dataX = chart.scales.x.getValueForPixel(canvasPosition.x);
      const dataY = chart.scales.y.getValueForPixel(canvasPosition.y);
    }
  }
});
```

## Require JS

**Importante:** RequireJS [puede **no** cargar el módulo CommonJS tal cual](https://requirejs.org/docs/commonjs.html#intro), así que asegúrate de requerir una de las compilaciones UMD en su lugar (es decir, `dist/chart.js`, `dist/chart.min.js`, etc.).

```javascript
require(['path/to/chartjs/dist/chart.min.js'], function(Chart){
    const myChart = new Chart(ctx, {...});
});
```

**Nota:** para usar la escala de tiempo, debes asegurarte de que [uno de los adaptadores de fecha disponibles](https://github.com/chartjs/awesome#adapters) y la biblioteca de fechas correspondiente estén completamente cargadas **después** de requerir Chart.js. Para esto puedes usar requisitos anidados:

```javascript
require(['chartjs'], function(Chart) {
    require(['moment'], function() {
        require(['chartjs-adapter-moment'], function() {
            new Chart(ctx, {...});
        });
    });
});
```
