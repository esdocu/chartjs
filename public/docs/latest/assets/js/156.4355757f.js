(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{486:function(a,t,e){"use strict";e.r(t);var s=e(6),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"responsive-charts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#responsive-charts"}},[a._v("#")]),a._v(" Responsive Charts")]),a._v(" "),e("p",[a._v("Cuando se trata de cambiar el tamaño del chart en función del tamaño de la ventana, una limitación importante es que el tamaño del "),e("em",[a._v("renderizado")]),a._v(" del canvas ("),e("code",[a._v("canvas.width")]),a._v(" y "),e("code",[a._v(".height")]),a._v(") "),e("strong",[a._v("no")]),a._v(" puede expresarse con valores relativos, contrario al tamaño de "),e("em",[a._v("display")]),a._v(" ("),e("code",[a._v("canvas.style.width")]),a._v(" y "),e("code",[a._v(".height")]),a._v("). Además, estos tamaños son independientes entre sí y, por lo tanto, el tamaño de la "),e("em",[a._v("renderización")]),a._v(" del canvas no se ajusta automáticamente en función del tamaño de "),e("em",[a._v("display")]),a._v(", lo que hace que la renderización sea imprecisa.")]),a._v(" "),e("p",[a._v("Los siguientes ejemplos "),e("strong",[a._v("no funcionan")]),a._v(":")]),a._v(" "),e("ul",[e("li",[e("code",[a._v('<canvas height="40vh" width="80vw">')]),a._v(": valores "),e("strong",[a._v("no válidos")]),a._v(", el canvas no cambia de tamaño ("),e("a",{attrs:{href:"https://codepen.io/chartjs/pen/oWLZaR",target:"_blank",rel:"noopener noreferrer"}},[a._v("ejemplo"),e("OutboundLink")],1),a._v(")")]),a._v(" "),e("li",[e("code",[a._v('<canvas style="height:40vh; width:80vw">')]),a._v(": comportamiento "),e("strong",[a._v("no válido")]),a._v(", el canvas cambia de tamaño pero se vuelve borroso ("),e("a",{attrs:{href:"https://codepen.io/chartjs/pen/WjxpmO",target:"_blank",rel:"noopener noreferrer"}},[a._v("ejemplo"),e("OutboundLink")],1),a._v(")")]),a._v(" "),e("li",[e("code",[a._v('<canvas style="margin: 0 auto;">')]),a._v(": comportamiento "),e("strong",[a._v("no válido")]),a._v(", el canvas se encoge continuamente. Chart.js necesita un contenedor dedicado para cada canvas y este estilo debe aplicarse allí.")])]),a._v(" "),e("p",[a._v("Chart.js proporciona "),e("a",{attrs:{href:"#configuration-options"}},[a._v("algunas opciones")]),a._v(" para habilitar la capacidad de ser responsive y controlar el comportamiento de cambio de tamaño de los charts al detectar cuándo cambia el tamaño de "),e("em",[a._v("display")]),a._v(" (pantalla) del canvas y actualizar el tamaño de "),e("em",[a._v("renderización")]),a._v(" en consecuencia.")]),a._v(" "),e("h2",{attrs:{id:"opciones-de-configuracion"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#opciones-de-configuracion"}},[a._v("#")]),a._v(" Opciones de configuración")]),a._v(" "),e("p",[a._v("Espacio de nombres: "),e("code",[a._v("options")])]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("Nombre")]),a._v(" "),e("th",[a._v("Tipo")]),a._v(" "),e("th",[a._v("Por defecto")]),a._v(" "),e("th",[a._v("Descripción")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[e("code",[a._v("responsive")])]),a._v(" "),e("td",[e("code",[a._v("boolean")])]),a._v(" "),e("td",[e("code",[a._v("true")])]),a._v(" "),e("td",[a._v("Cambia el tamaño del canvas del chart cuando lo hace su contenedor ("),e("a",{attrs:{href:"#nota-importante"}},[a._v("nota importante...")]),a._v(").")])]),a._v(" "),e("tr",[e("td",[e("code",[a._v("maintainAspectRatio")])]),a._v(" "),e("td",[e("code",[a._v("boolean")])]),a._v(" "),e("td",[e("code",[a._v("true")])]),a._v(" "),e("td",[a._v("Mantener la relación de aspecto del canvas original "),e("code",[a._v("(ancho / alto)")]),a._v(" al cambiar el tamaño.")])]),a._v(" "),e("tr",[e("td",[e("code",[a._v("aspectRatio")])]),a._v(" "),e("td",[e("code",[a._v("number")])]),a._v(" "),e("td",[e("code",[a._v("2")])]),a._v(" "),e("td",[a._v("Relación de aspecto del canvas (es decir, "),e("code",[a._v("ancho/alto")]),a._v(", un valor de 1 que representa un canvas cuadrado). Ten en cuenta que esta opción se ignora si la altura se define explícitamente como atributo o mediante el estilo.")])]),a._v(" "),e("tr",[e("td",[e("code",[a._v("onResize")])]),a._v(" "),e("td",[e("code",[a._v("function")])]),a._v(" "),e("td",[e("code",[a._v("null")])]),a._v(" "),e("td",[a._v("Se llama cuando se produce un cambio de tamaño. Obtiene dos argumentos: la instancia del chart y el nuevo tamaño.")])]),a._v(" "),e("tr",[e("td",[e("code",[a._v("resizeDelay")])]),a._v(" "),e("td",[e("code",[a._v("number")])]),a._v(" "),e("td",[e("code",[a._v("0")])]),a._v(" "),e("td",[a._v("Retrasa la actualización de cambio de tamaño en una cantidad determinada de milisegundos. Esto puede facilitar el proceso de cambio de tamaño eliminando la actualización de los elementos.")])])])]),a._v(" "),e("h2",{attrs:{id:"nota-importante"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nota-importante"}},[a._v("#")]),a._v(" Nota IMPORTANTE")]),a._v(" "),e("p",[a._v("No se puede detectar cuándo cambia el tamaño del canvas directamente desde el elemento "),e("code",[a._v("canvas")]),a._v(". Chart.js usa su contenedor principal para actualizar los tamaños de "),e("em",[a._v("render")]),a._v(" y "),e("em",[a._v("display")]),a._v(" del canvas. Sin embargo, este método requiere que el contenedor esté "),e("strong",[a._v("relativamente posicionado")]),a._v(" y "),e("strong",[a._v("dedicado solo al canvas del chart")]),a._v(". La capacidad responsive se puede lograr estableciendo valores relativos para el tamaño del contenedor ("),e("a",{attrs:{href:"https://codepen.io/chartjs/pen/YVWZbz",target:"_blank",rel:"noopener noreferrer"}},[a._v("ejemplo"),e("OutboundLink")],1),a._v("):")]),a._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("div")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("chart-container"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),e("span",{pre:!0,attrs:{class:"token special-attr"}},[e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("style")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),e("span",{pre:!0,attrs:{class:"token value css language-css"}},[e("span",{pre:!0,attrs:{class:"token property"}},[a._v("position")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" relative"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v("height")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("40vh"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v("width")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("80vw")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("canvas")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("id")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("chart"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("canvas")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])]),e("p",[a._v("El gráfico también se puede cambiar de tamaño mediante programación modificando el tamaño del contenedor:")]),a._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[a._v("chart"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("canvas"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("parentNode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("style"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("height "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'128px'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nchart"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("canvas"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("parentNode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("style"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("width "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'128px'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("p",[a._v("Ten en cuenta que para que el código anterior cambie correctamente el tamaño de la altura del gráfico, la opción "),e("a",{attrs:{href:"#configuration-options"}},[e("code",[a._v("maintainAspectRatio")])]),a._v(" también debe establecerse en "),e("code",[a._v("false")]),a._v(".")]),a._v(" "),e("h2",{attrs:{id:"impresion-de-graficos-de-tamano-variable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#impresion-de-graficos-de-tamano-variable"}},[a._v("#")]),a._v(" Impresión de gráficos de tamaño variable")]),a._v(" "),e("p",[a._v("Las media queries CSS permiten cambiar los estilos al imprimir una página. El CSS aplicado a partir de estas consultas de medios puede hacer que los gráficos deban cambiar el tamaño. Sin embargo, el cambio de tamaño no ocurrirá automáticamente. Para admitir el cambio de tamaño de los gráficos al imprimir, debes conectar el evento "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onbeforeprint",target:"_blank",rel:"noopener noreferrer"}},[a._v("onbeforeprint"),e("OutboundLink")],1),a._v(" y activar manualmente el cambio de tamaño de cada gráfico.")]),a._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("beforePrintHandler")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("let")]),a._v(" id "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" Chart"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("instances"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        Chart"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("instances"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("resize")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("p",[a._v("También puede encontrar que, debido a las complejidades cuando el navegador diseña el documento para imprimir y cuando se activan los eventos de cambio de tamaño, Chart.js no puede cambiar el tamaño correctamente para el diseño de impresión. Para evitar esto, puedes pasar un tamaño explícito a "),e("code",[a._v(".resize()")]),a._v(" y luego usar un evento "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onafterprint",target:"_blank",rel:"noopener noreferrer"}},[a._v("onafterprint"),e("OutboundLink")],1),a._v(" para restaurar el tamaño automático cuando hayas terminado.")]),a._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[a._v("window"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("addEventListener")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'beforeprint'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  myChart"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("resize")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("600")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("600")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nwindow"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("addEventListener")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'afterprint'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  myChart"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("resize")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);