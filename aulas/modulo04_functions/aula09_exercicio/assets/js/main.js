function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        
        inicia(){
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', (e) => {
                if (e.keyCode === 13){
                    this.realizaConta();
                }
            });
        },

        cliqueBotoes() {
            document.addEventListener('click', (e) => {
                const el = e.target;

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }
                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                if(el.classList.contains('btn-del')){
                    this.deleteOne();
                }
                if(el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            });
        },

        realizaConta(){
            let conta = this.display.value;
            try{
                conta = eval(conta);

                if(!conta){
                    alert('Conta Invalida¹')
                }

                this.display.value = conta
            } catch(e) {
                alert('Conta inválida');
            }
        },

        deleteOne() {
            this.display.value = this.display.value.slice(0, -1);
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },

        clearDisplay() {
            this.display.value = '';
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();