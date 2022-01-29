# Uso

Chart.js se puede usar con módulos ES6, JavaScript plano y cargadores de módulos.

## Creación de un Chart

Para crear un gráfico, necesitamos instanciar la clase `Chart`. Para hacer esto, debemos pasar el nodo, la instancia de jQuery o el contexto 2d del lienzo *canvas* donde queremos dibujar el gráfico. Aquí hay un ejemplo.

```html
<canvas id="myChart" width="400" height="400"></canvas>
```

```javascript
// Cualquiera de los siguientes formatos puede ser usado
const ctx = document.getElementById('myChart');
const ctx = document.getElementById('myChart').getContext('2d');
const ctx = $('#myChart');
const ctx = 'myChart';
```

Una vez que tengas el elemento o el contexto, estarás listo para instanciar un tipo de gráfico predefinido o crear uno propio.

El siguiente ejemplo crea una instancia de un gráfico de barras que muestra la cantidad de votos para diferentes colores y el eje `y` comienza en `0`.

```html
<canvas id="myChart" width="400" height="400"></canvas>
<script>
const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
</script>
```
