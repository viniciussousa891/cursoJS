function clock(){

    function getTimeFromSeconds(seconds) {
        const date = new Date(seconds * 1000);
        return date.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'});
    }

    const relogio = document.querySelector('.relogio');
    let seconds = 0;
    let timer;

    function initClock() {
        timer = setInterval(() => {
            seconds++;
            relogio.innerHTML = getTimeFromSeconds(seconds);
        }, 1000);
    }

    document.addEventListener('click', function(e) {
        const el = e.target;
        if(el.classList.contains('iniciar')) {
            //iniciar
            relogio.classList.remove('pausado');
            clearInterval(timer);
            initClock();
        }

        if(el.classList.contains('pausar')) {
            //Pausar
            relogio.classList.add('pausado')
            clearInterval(timer);
        }

        if(el.classList.contains('zerar')) {
            // Zerar
            relogio.classList.remove('pausado');
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        seconds = 0;
        }
    });
}

clock();