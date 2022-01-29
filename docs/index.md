# Chart.js

[![slack](https://img.shields.io/badge/slack-chartjs-blue.svg?style=flat-square&maxAge=3600)](https://chartjs-slack.herokuapp.com/)

## Instalación

Puedes obtener la última versión de Chart.js de [npm](https://npmjs.com/package/chart.js), de [GitHub releases](https://github.com/chartjs/Chart.js/releases/latest), o usa un [CDN de Chart.js](https://www.jsdelivr.com/package/npm/chart.js). Las instrucciones de instalación detalladas se pueden encontrar en la página [instalación](./getting-started/installation.md).

Si estás utilizando un framework de front-end (por ejemplo, React, Angular o Vue), consulta [integraciones disponibles](https://github.com/chartjs/awesome#integrations).

## Creación de un Chart

Es fácil comenzar con Chart.js. Todo lo que necesitas es incluir el script en tu página junto con un solo nodo `<canvas>` para renderizar el chart.

En este ejemplo, creamos un gráfico de barras para un solo conjunto de datos y lo representamos en nuestra página. Puedes ver todas las formas de usar Chart.js en la [documentación de uso](./getting-started/usage.md).

```html
<canvas id="myChart" width="400" height="400"></canvas>
<script>
const ctx = document.getElementById('myChart').getContext('2d');
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

## Contribuir

Antes de enviar un issue o un pull request al proyecto, tómate un momento para revisar las [directrices de contribución](./developers/contributing.md).

Para obtener ayuda con el uso de Chart.js, publica preguntas con la etiqueta [`chartjs` en Stack Overflow](https://stackoverflow.com/questions/tagged/chartjs).

## Licencia

Chart.js está disponible bajo la [licencia MIT](https://opensource.org/licenses/MIT).

La documentación tiene copyright de contribuidores de © 2014-2021 Chart.js.