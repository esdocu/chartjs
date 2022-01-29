# Fuentes

Hay configuraciones globales especiales que pueden cambiar todas las fuentes en el chart. Estas opciones están en `Chart.defaults.font`. La configuración de fuente global solo se aplica cuando no se incluyen opciones más específicas en la configuración.

Por ejemplo, en este gráfico, el texto tendrá un tamaño de fuente de 16 px, excepto las etiquetas de la leyenda.

```javascript
Chart.defaults.font.size = 16;
let chart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        plugins: {
            legend: {
                labels: {
                    // Esta propiedad de fuente más específica sobrescribe la propiedad global
                    font: {
                        size: 14
                    }
                }
            }
        }
    }
});
```

| Nombre | Tipo | Por defecto | Descripción
| ---- | ---- | ------- | -----------
| `family` | `string` | `"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"` | Familia de fuentes predeterminada para todo el texto, sigue las opciones de familia de fuentes CSS.
| `size` | `number` | `12` | Tamaño de fuente predeterminado (en px) para el texto. No se aplica a las etiquetas de punto de escala radialLinear.
| `style` | `string` | `'normal'` | Estilo de fuente predeterminado. No se aplica al título o pie de página de tooltip. No se aplica al título del chart. Sigue las opciones de estilo de fuente CSS (es decir, normal, italic, oblique, initial, inherit).
| `weight` | `string` | `undefined` | Peso de fuente predeterminado (boldness). (ver [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight)).
| `lineHeight` | `number`\|`string` | `1.2` | Altura de una línea de texto individual (ver [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)).


## Fuentes que faltan

Si se especifica una fuente para un gráfico que existe en el sistema, el navegador no aplicará la fuente cuando se establezca. Si notas que aparecen fuentes extrañas en tus gráficos, verifica que la fuente que estás aplicando exista en tu sistema. Consulta el [issue 3318](https://github.com/chartjs/Chart.js/issues/3318) para obtener más detalles.

## Cargando fuentes

Si una fuente no está en caché y debe cargarse, los charts que usan la fuente deberán actualizarse una vez que se cargue la fuente. Esto se puede lograr mediante las [API de carga de fuentes](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Font_Loading_API). Consulta el [issue 8020](https://github.com/chartjs/Chart.js/issues/8020) para obtener más detalles.