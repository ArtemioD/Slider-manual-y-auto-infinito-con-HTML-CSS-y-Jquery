// almacenar elementos en variable
let slider = $('#slider');
let siguiente = $('#btn_next');
let anterior = $('#btn_prev');

// mover ultimo imagen al primer lugar
$('#slider section:last').insertBefore('#c_slider section:first');

// mostrar la primera imagen con un margen de -100%
slider.css('margin-left', `-${100}%`);
                        //'-' + 100 + '%'
function moverDerecha() {
                        // mover imagen a -200%
    slider.animate({marginLeft:`-${200}%`}, 700,
    terminaTodo = () => {
        // mover primer a ultimo lugar
        $('#slider section:first').insertAfter('#slider section:last');
        slider.css('margin-left', `-${100}%`);
    });
}

function moverIzquerda() {
    slider.animate({marginLeft:0}, 700,
    terminaTodo = () => {
        $('#slider section:last').insertBefore('#slider section:first');
        slider.css('margin-left', `-${100}%`);
    });
}

function autoPlay() {
    interval = setInterval(f = () => {
        moverDerecha();
    },  5000);
}

siguiente.on('click', e = () => moverDerecha());
anterior.on('click', e = () => moverIzquerda());
autoPlay();