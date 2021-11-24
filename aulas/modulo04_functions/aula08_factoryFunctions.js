/* Exemplor básico */
/* function criaPessoa(nome, sobrenome) {
    return {
        nome, sobrenome
    };
}

 */

/* Mais avançado */
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto = 'falando besteira') {
            return `${this.nome} está ${assunto}.`
        },

        altura: altura,

        peso: peso,

        //Getter
        get imc(){
            return (this.peso / this.altura**2).toFixed(2);
        }
    };
}

const p1 = criaPessoa('Vinícius', 'Sousa', 1.69, 53.0);