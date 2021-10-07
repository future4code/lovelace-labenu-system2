export const validDate = (date: string) => {
    const dia = Number(date.substr(0,2));
    const mes = Number(date.substr(3,2));
    const ano = Number(date.substr(6,4));
    const anoBisexto = (ano % 4) === 0;
    const mes31 = (mes === 1) || (mes === 3) || (mes === 5) || (mes === 7) || (mes === 8) || (mes === 10) || (mes === 12);
    if(dia>=1 && dia<=31){
        if(mes31){
            return `${ano}/${mes}/${dia}`
        };
        if((mes!==2) && (dia<=30)){
                    return `${ano}/${mes}/${dia}`
        };
        if(mes===2){
            if((anoBisexto)&&(dia<=29)){  
                return `${ano}/${mes}/${dia}`
            } else if(dia<=28) {
                return `${ano}/${mes}/${dia}`
            } else {
                throw "Data inválida"
            }
        }
    }
}