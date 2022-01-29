# Estructuras de datos

La propiedad `data` de un conjunto de datos (dataset) se puede pasar en varios formatos. De forma predeterminada, esos datos se analizan utilizando el tipo de gráfico y las escalas asociadas.

Si se utiliza la propiedad `labels` de la propiedad `data` principal, debe contener la misma cantidad de elementos que el conjunto de datos con la mayor cantidad de valores. Estas etiquetas se utilizan para etiquetar el eje de índice (ejes x predeterminados). Los valores de las etiquetas deben proporcionarse en un array.
Las etiquetas proporcionadas pueden ser del tipo cadena de texto o número para que se representen correctamente. En caso de que desees etiquetas de varias líneas, puedes proporcionar un array con cada línea como una entrada en el array.

## Primitive[]

```javascript
type: 'bar',
data: {
    datasets: [{
      data: [20, 10],
    }],
    labels: ['a', 'b']
}
```

Cuando `data` es un array de números, los valores del array `labels` en el mismo índice se utilizan para el eje del índice (`x` para gráficos verticales, `y` para gráficos horizontales).

## Object[]

```javascript
type: 'line',
data: {
  datasets: [{
    data: [{x: 10, y: 20}, {x: 15, y: null}, {x: 20, y: 10}]
  }]
}
```

```javascript
type: 'line',
data: {
  datasets: [{
    data: [{x:'2016-12-25', y:20}, {x:'2016-12-26', y:10}]
  }]
}
```

```javascript
type: 'bar',
data: {
  datasets: [{
    data: [{x:'Ventas', y:20}, {x:'Beneficios', y:10}]
  }]
}
```

Este es también el formato interno utilizado para los datos analizados. En este modo, el análisis se puede deshabilitar especificando `parsing: false` en las opciones del chart o en el dataset (conjunto de datos). Si el análisis está deshabilitado, los datos deben estar ordenados y en los formatos que el tipo de gráfico asociado y las escalas usan internamente.

Los valores proporcionados deben ser analizables por las escalas asociadas o en el formato interno de las escalas asociadas. Un error común sería proporcionar números enteros para la escala de `category`, que utiliza números enteros como formato interno, donde cada número entero representa un índice en el array de etiquetas. `null` se puede usar para valores omitidos.

## Object[] usando propiedades personalizadas

```javascript
type: 'bar',
data: {
    datasets: [{
        data: [{id: 'Ventas', nested: {value: 1500}}, {id: 'Compras', nested: {value: 500}}]
    }]
},
options: {
    parsing: {
        xAxisKey: 'id',
        yAxisKey: 'nested.value'
    }
}
```

Cuando se utiliza el tipo de gráfico pie/doughnut, el objeto `parsing` debe tener un elemento `key` que apunte al valor a mirar. En este ejemplo, el gráfico de anillos mostrará dos elementos con valores 1500 y 500.

```javascript
type: 'doughnut',
data: {
    datasets: [{
        data: [{id: 'Ventas', nested: {value: 1500}}, {id: 'Compras', nested: {value: 500}}]
    }]
},
options: {
    parsing: {
        key: 'nested.value'
    }
}
```

## Object

```javascript
type: 'pie',
data: {
    datasets: [{
      data: {
          January: 10,
          February: 20
      }
    }]
}
```

En este modo, el nombre de la propiedad se usa para la escala de `index` y el valor para la escala de `value`. Para gráficos verticales, la escala de índice es `x` y la escala de valor es `y`.

## Configuración del Dataset

| Name | Type | Description
| ---- | ---- | -----------
| `label` | `string` | La etiqueta del conjunto de datos que aparece en la leyenda y el tooltip.
| `clip` | `number`\|`object` | Cómo recortar en relación con chartArea. Un valor positivo permite el desbordamiento, un valor negativo recorta muchos píxeles dentro de chartArea. 0 = recortar en chartArea. El recorte también se puede configurar por lado: clip: {left: 5, top: false, right: -2, bottom: 0}
| `order` | `number` | El orden de dibujo del conjunto de datos. También afecta el orden de apilamiento, el tooltip y la leyenda.
| `stack` | `string` | El ID del grupo al que pertenece este conjunto de datos (cuando se apilan, cada grupo será una pila separada). El valor predeterminado es el `type` del conjunto de datos.
| `parsing` | `boolean`\|`object` | Cómo analizar el conjunto de datos. El análisis se puede deshabilitar especificando `parsing: false` en las opciones de gráfico o conjunto de datos. Si el análisis está deshabilitado, los datos deben estar ordenados y en los formatos que el tipo de gráfico asociado y las escalas usan internamente.
| `hidden`  | `boolean` | Configura la visibilidad del conjunto de datos. El uso de `hidden: true` ocultará el conjunto de datos para que no se renderice en el gráfico.

### parsing

```javascript
const data = [{x: 'Jan', net: 100, cogs: 50, gm: 50}, {x: 'Feb', net: 120, cogs: 55, gm: 75}];
const cfg = {
    type: 'bar',
    data: {
        labels: ['Ene', 'Feb'],
        datasets: [{
            label: 'Ventas netas',
            data: data,
            parsing: {
                yAxisKey: 'net'
            }
        }, {
            label: 'Costo de los bienes vendidos',
            data: data,
            parsing: {
                yAxisKey: 'cogs'
            }
        }, {
            label: 'Margen bruto',
            data: data,
            parsing: {
                yAxisKey: 'gm'
            }
        }]
    },
};
```
