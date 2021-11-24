function Calculadora() {
    this.display = document.querySelector('.display');
    
    this.inicia = () => {
        this.cliqueBotoes();
        this.pressionaEnter();
    };

    this.pressionaEnter = () => {
        this.display.addEventListener('keypress', (e) => {
            if (e.keyCode === 13) this.realizaConta();
        });
    };

    this.cliqueBotoes = () => {
        document.addEventListener('click', (e) => {
            const el = e.target;

            if(el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText);
            if(el.classList.contains('btn-clear')) this.clearDisplay();
            if(el.classList.contains('btn-del')) this.deleteOne();
            if(el.classList.contains('btn-eq')) this.realizaConta();
        });
    };

    this.realizaConta = () => {
        let conta = this.display.value;
        try{

            conta = eval(conta);
            if(!conta) alert('Conta Invalida¹')
            
            this.display.value = conta;
        } catch(e) {
            alert('Conta inválida');
        }
    };

    this.deleteOne = () => this.display.value = this.display.value.slice(0, -1);
    this.btnParaDisplay = (valor) => {
        this.display.value += valor;
        this.display.focus();
    }
    this.clearDisplay = () => this.display.value = '';
}

const calculadora = new Calculadora();
calculadora.inicia();