 const data = new Date('2002-01-29 00:00:00');
 const diaSemana = data.getDay();
 const semana = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'];

switch (diaSemana){
    case 0:
        console.log(`Esse dia ${futureOrPast(data)} no ${semana[0]}`);
        break;
    case 1:
        console.log(`Esse dia ${futureOrPast(data)} na ${semana[1]}`);
        break; 
    case 2:
        console.log(`Esse dia ${futureOrPast(data)} na ${semana[2]}`);
        break;
    case 3:
        console.log(`Esse dia ${futureOrPast(data)} na ${semana[3]}`);
        break;
    case 4:
        console.log(`Esse dia ${futureOrPast(data)} na ${semana[4]}`);
        break;
    case 5:
        console.log(`Esse dia ${futureOrPast(data)} na ${semana[5]}`);
        break;
    case 6:
        console.log(`Esse dia ${futureOrPast(data)} no ${semana[6]}`);
        break;
    default:
        console.log('Data inválida');
        break;
 }

 function futureOrPast(date) {
    const dataAtual = new Date();
    if (dataAtual.getFullYear() > date.getFullYear()){ // A data do paramêtro é do passado
        return 'foi';
    } else if (dataAtual.getFullYear() === date.getFullYear()) {
        if (dataAtual.getMonth()> date.getMonth()) {
            return 'foi'
        } else if (dataAtual.getMonth() === date.getMonth()) {
            if (dataAtual.getDate() > date.getDate()) {
                return 'foi'
            } else if (dataAtual.getDate() === date.getDate()) {
                return 'é'
            } else {
                return 'será'
            }
        } else {
            return 'será'
        }
        
    } else {
        // futuro
        return 'será'
    }
 }