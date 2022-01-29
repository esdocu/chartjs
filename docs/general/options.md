# Opciones

## Resolución de opciones

Las opciones se resuelven de arriba a abajo, utilizando una ruta dependiente del contexto.

### Opciones a nivel de Chart

* options
* overrides[`config.type`]
* defaults

### Opciones a nivel de conjunto de datos

`dataset.type` por defecto es `config.type`, si no se especifica.

* dataset
* options.datasets[`dataset.type`]
* options
* overrides[`config.type`].datasets[`dataset.type`]
* defaults.datasets[`dataset.type`]
* defaults

### Opciones de animación de conjuntos de datos

* dataset.animation
* options.datasets[`dataset.type`].animation
* options.animation
* overrides[`config.type`].datasets[`dataset.type`].animation
* defaults.datasets[`dataset.type`].animation
* defaults.animation

### Opciones a nivel de elemento del conjunto de datos

Cada scope (alcance) se busca primero con el prefijo `elementType` en el nombre de la opción, luego sin el prefijo. Por ejemplo, `radius` para el elemento `point` se busca usando `pointRadius` y si eso no funciona, entonces `radius`.

* dataset
* options.datasets[`dataset.type`]
* options.datasets[`dataset.type`].elements[`elementType`]
* options.elements[`elementType`]
* options
* overrides[`config.type`].datasets[`dataset.type`]
* overrides[`config.type`].datasets[`dataset.type`].elements[`elementType`]
* defaults.datasets[`dataset.type`]
* defaults.datasets[`dataset.type`].elements[`elementType`]
* defaults.elements[`elementType`]
* defaults

### Opciones de escala

* options.scales
* overrides[`config.type`].scales
* defaults.scales
* defaults.scale

### Opciones de plugins

Un complemento (plugin) puede proporcionar un array de rutas `additionalOptionScopes` para buscar adicionalmente sus opciones. Para el scope raíz, usa una cadena vacía: `''`. La mayoría de los complementos del core también toman opciones del scope raíz.

* options.plugins[`plugin.id`]
* (options.[`...plugin.additionalOptionScopes`])
* overrides[`config.type`].plugins[`plugin.id`]
* defaults.plugins[`plugin.id`]
* (defaults.[`...plugin.additionalOptionScopes`])

## Opciones de Scriptable

Las opciones programables (Scriptable) también aceptan una función que se llama para cada uno de los valores de datos subyacentes y que toma el argumento único `context` que representa la información contextual (ver [contexto de opción](options.md#option-context)).
Se pasa un resolver como segundo parámetro, que se puede usar para acceder a otras opciones en el mismo contexto.

:::tip Nota

El argumento `context` debe validarse en la función programable, porque la función se puede invocar en diferentes contextos. El campo `type` es un buen candidato para esta validación.

:::

Ejemplo:

```javascript
color: function(context) {
    const index = context.dataIndex;
    const value = context.dataset.data[index];
    return value < 0 ? 'red' :  // dibujar valores negativos en rojo
        index % 2 ? 'blue' :    // de lo contrario, valores alternativos en azul y verde
        'green';
},
borderColor: function(context, options) {
    const color = options.color; // resolver el valor de otra opción programable: 'red', 'blue' o 'green'
    return Chart.helpers.color(color).lighten(0.2);
}
```

## Opciones indexables

Las opciones indexables también aceptan un array en el que cada elemento corresponde al elemento en el mismo índice. Ten en cuenta que si hay menos elementos que datos, los elementos se repiten. En muchos casos, usar una [función](#scriptable-options) es más apropiado si es compatible.

Ejemplo:

```javascript
color: [
    'red',    // color para datos en el índice 0
    'blue',   // color para datos en el índice 1
    'green',  // color para datos en el índice 2
    'black',  // color para datos en el índice 3
    //...
]
```

## Contexto de opción

El contexto de opción se usa para brindar información contextual al resolver opciones y actualmente solo se aplica a [Opciones de Scriptable](#scriptable-options).
El objeto se conserva, por lo que se puede utilizar para almacenar y pasar información entre llamadas.

Hay varios niveles de objetos de contexto:

* `chart`
  * `dataset`
    * `data`
  * `scale`
    * `tick`
    * `pointLabel` (solo se usa en la escala lineal radial)
  * `tooltip`

Cada nivel hereda su(s) padre(s) y cualquier información contextual almacenada en el padre está disponible a través del hijo.

El objeto de contexto contiene las siguientes propiedades:

### chart

* `chart`: el chart asociado
* `type`: `'chart'`

### dataset

Además de [chart](#chart)

* `active`: true si el elemento está activo (hovered)
* `dataset`: dataset en el índice `datasetIndex`
* `datasetIndex`: índice del dataset actual
* `index`: igual a `datasetIndex`
* `mode`: el modo de actualización
* `type`: `'dataset'`

### data

Además de [dataset](#dataset)

* `active`: true si el elemento está activo (hovered)
* `dataIndex`: índice del data actual
* `parsed`: los valores de datos analizados para el `dataIndex` y `datasetIndex` dados
* `raw`: los valores de datos sin procesar para el `dataIndex` y `datasetIndex` dados
* `element`: el elemento (punto, arco, barra, etc.) para estos datos
* `index`: igual a `dataIndex`
* `type`: `'data'`

### scale

Además de [chart](#chart)

* `scale`: la escala asociada
* `type`: `'scale'`

### tick

Además de [scale](#scale)

* `tick`: el objeto tick asociado
* `index`: índice del tick
* `type`: `'tick'`

### tooltip

Además de [chart](#chart)

* `tooltip`: el objeto tooltip
* `tooltipItems`: los elementos que muestra el tooltip
