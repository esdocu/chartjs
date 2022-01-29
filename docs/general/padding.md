# Padding

Los valores de padding (padding) en las opciones de charts se pueden proporcionar en un par de formatos diferentes.

## Número

Si este valor es un número, se aplica a todos los lados (izquierda, arriba, derecha, abajo).

Por ejemplo, definiendo un padding de 20px en todos los lados del gráfico:

```javascript
let chart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        layout: {
            padding: 20
        }
    }
});
```

## Objeto {top, left, bottom, right}

Si este valor es un objeto, la propiedad `left` define el padding izquierdo. Del mismo modo, también se pueden especificar las propiedades `right`, `top` y `bottom`.
Las propiedades omitidas tienen el valor predeterminado `0`.

Digamos que deseas agregar 50px de padding al lado izquierdo del canvas del chart, harías lo siguiente:

```javascript
let chart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        layout: {
            padding: {
                left: 50
            }
        }
    }
});
```

## Objeto {x, y}

Esta es una abreviatura para definir izquierda/derecha y arriba/abajo con los mismos valores.

Por ejemplo, 10px de padding a la izquierda/derecha y 4 píxeles en la parte superior/inferior en un Radial Linear Axis [tick backdropPadding](../axes/radial/linear.md#linear-radial-axis-specific-tick-options):

```javascript
let chart = new Chart(ctx, {
    type: 'radar',
    data: data,
    options: {
        scales: {
          r: {
            ticks: {
              backdropPadding: {
                  x: 10,
                  y: 4
              }
            }
        }
    }
});
```
