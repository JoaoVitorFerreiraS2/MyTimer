//Adicionando ao javaScript o que vamos usar para o cronometro
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

//Definindo váriaveis
segundos = 0;
minutos = 0;
hora = 0;


//Uma simples função para ficar em formato de hora
function formatTime(unit) {
    return unit < 10 ? '0' + unit : unit;
}

//Uma função para iniciarmos o relógio
function chama() {
    const d = new Date()
    relogio.innerHTML = (`${formatTime(hora)}:${formatTime(minutos)}:${formatTime(segundos)}`)
    console.log(segundos)
    segundos++;
    if (segundos > 60) {
        minutos++;
        segundos = 0;

        if (minutos > 60) {
            hora++;
            minutos = 0;
        }
    }
}

//Botão de iniciar
iniciar.addEventListener('click', function (event) {
    tiktak = setInterval(chama, 1000)
    iniciar.disabled = true;
    relogio.style.color = 'white'

})

//Botão de pausar
pausar.addEventListener('click', function (event) {
    clearInterval(tiktak)
    console.log('Pausado')
    iniciar.disabled = false;
    relogio.style.color = 'red'
    relogio.style.textShadow = '5px 5px 10px black'

})

//botão de zerar
zerar.addEventListener('click', function (event) {
    segundos = 0;
    minutos = 0;
    hora = 0;
    relogio.innerHTML = (`${formatTime(hora)}:${formatTime(minutos)}:${formatTime(segundos)}`)
    clearInterval(tiktak)
    console.log('Zerado')
    iniciar.disabled = false;
    

})

