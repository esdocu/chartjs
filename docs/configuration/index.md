# Configuración

La configuración se utiliza para cambiar el comportamiento del chart. Hay propiedades para controlar el estilo, las fuentes, la leyenda, etc.

## Estructura del objeto de configuración

La estructura de nivel superior de la configuración de Chart.js:

```javascript
const config = {
  type: 'line'
  data: {}
  options: {}
  plugins: []
}
```

### type

El chart type determina el tipo principal del gráfico.

**Nota:** Un conjunto de datos puede sobrescribir el `type`, así es como se construyen los gráficos mixtos.

### data

Consulta [Estructuras de datos](../general/data-structures) para obtener más detalles.

### options

La mayoría de la documentación habla de estas opciones.

### plugins

Los complementos en línea se pueden incluir en este array. Es una forma alternativa de agregar complementos para un solo gráfico (en lugar de registrar el complemento globalmente).
Más información sobre complementos en la [sección de desarrolladores](../developers/plugins.md).

## Configuración global

Este concepto se introdujo en Chart.js 1.0 para mantener la configuración [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) y permitir cambiar las opciones globalmente entre los tipos de gráficos, evitando la necesidad de especificar opciones para cada instancia, o el predeterminado para un tipo de gráfico en particular.

Chart.js fusiona el objeto de opciones pasado al gráfico con la configuración global utilizando los valores predeterminados del tipo de gráfico y escala los valores predeterminados de manera adecuada. De esta manera, puedes ser tan específico como desees en la configuración de tu gráfico individual, al mismo tiempo que cambias los valores predeterminados para todos los tipos de gráficos cuando corresponda. Las opciones generales globales se definen en `Chart.defaults`. Los valores predeterminados para cada tipo de gráfico se analizan en la documentación de ese tipo de gráfico.

El siguiente ejemplo establecería el modo de interacción en 'nearest' para todos los gráficos donde esto no fue sobrescrito por los valores predeterminados del tipo de gráfico o las opciones pasadas al constructor en la creación.

```javascript
Chart.defaults.interaction.mode = 'nearest';

// El modo de interacción se establece en nearest porque no se sobrescribió aquí
const chartInteractionModeNearest = new Chart(ctx, {
    type: 'line',
    data: data
});

// Este gráfico tendría el modo de interacción que se le pasó
const chartDifferentInteractionMode = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        interaction: {
            // Sobrescribe la configuración global
            mode: 'index'
        }
    }
});
```

## Configuración del conjunto de datos

Las opciones se pueden configurar directamente en el conjunto de datos. Las opciones del conjunto de datos se pueden cambiar en múltiples niveles diferentes. Consulta [opciones](../general/options.md#dataset-level-options) para obtener detalles sobre cómo se resuelven las opciones.

El siguiente ejemplo establecería la opción `showLine` en `false` para todos los conjuntos de datos de línea, excepto para aquellos sobrescritos por las opciones pasadas al conjunto de datos en la creación.

```javascript
// No mostrar líneas para todos los conjuntos de datos por defecto
Chart.defaults.datasets.line.showLine = false;

// Este gráfico mostraría una línea solo para el tercer conjunto de datos
const chart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            data: [0, 0],
        }, {
            data: [0, 1]
        }, {
            data: [1, 0],
            showLine: true // sobrescribe el valor predeterminado del conjunto de datos `line`
        }, {
            type: 'scatter', // El valor predeterminado del conjunto de datos de 'line' no afecta este conjunto de datos ya que es un 'scatter'
            data: [1, 1]
        }]
    }
});
```
