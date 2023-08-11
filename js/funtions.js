const stateCheckLogo = document.querySelector("#inputLogos");
//funcion de intercalacion
function placeCaretAtEnd(element) {
    element.focus();
    if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
        var range = document.createRange();
        range.selectNodeContents(element);
        range.collapse(false);
        var target = window.getSelection();
        target.removeAllRanges();
        target.addRange(range);
    } else if (typeof document.body.createTextRange != "undefined") {
        var textRange = document.body.createTextRange();
        textRange.moveToElementText(element);
        textRange.collapse(false);
        textRange.select();
    }
}
//funcion para divir los caracteres
function split(str) {
    let result = [];
    str = str.trimStart();
    for (var i = 0; i < str.length; i++) {
        result.push(`<span class='char' style='z-index: ${100 - i}'>${str[i]}</span>`);
    }
    return result.join('');
}
//funcion para 
function colorize(e) {
    const text = this.textContent;
    this.innerHTML = split(this.textContent);
    placeCaretAtEnd(this);
}

//funcion para limpiar el nombre
function cleanup(e) {
    const text = this.textContent;
    if (text == 'NOMBRE') {
        this.innerHTML = '';
        placeCaretAtEnd(this);
    }
}

function initialize(e) {
    const target = e ? this : document.querySelector('h3');;
    const text = target.textContent;
    if (text === '') {
        target.innerHTML = split('NOMBRE');
    }
}

//funcion de incio para inicializar nombre
function main() {
    const target = document.querySelector('h3');
    target.addEventListener('input', colorize, false);
    target.addEventListener('focusin', cleanup, false);
    target.addEventListener('focusout', initialize, false);
    initialize();
}

//Funciona para convertir el contendor en imagen
function downloadCanvas(canvasId, filename) {
    // Obteniendo la etiqueta la cual se desea convertir en imagen
    var domElement = document.getElementById(canvasId);

    // Utilizando la función html2canvas para hacer la conversión
    html2canvas(domElement, {
        onrendered: function (domElementCanvas) {
            // Obteniendo element contexto del canvas ya generado
            var context = domElementCanvas.getContext('2d');

            // Creando enlace para descargar la imagen generada
            var link = document.createElement('a');
            link.href = domElementCanvas.toDataURL("image/png");
            link.download = filename;

            // Chequeando para browsers más viejos
            if (document.createEvent) {
                var event = document.createEvent('MouseEvents');
                // Simulando clic para descargar
                event.initMouseEvent("click", true, true, window, 0,
                    0, 0, 0, 0,
                    false, false, false, false,
                    0, null);
                link.dispatchEvent(event);
            } else {
                // Simulando clic para descargar
                link.click();
            }
        }
    });
}

function gesContentLogo() {
    if (!checkLogo) {
        alert("Hola")
    }
}

stateCheckLogo.addEventListener("click", () => {
    if (document.querySelector('#inputLogos').checked) {
        document.querySelector("#contenedorLogos").style.display = "none";
    } else {
        document.querySelector("#contenedorLogos").style.display = "block";
    }
});



// btnDescarga.addEventListener("click", function(){
//     downloadCanvas('imagen', 'yosoyguerrer.png');
// } 
// );


//Funcion para descarga
function download() {
    downloadCanvas('imagen', 'yosoyguerrero.png');
}


