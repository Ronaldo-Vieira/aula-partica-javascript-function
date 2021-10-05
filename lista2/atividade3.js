const retorno = (ano) => {
    if(ano >= 2004) {
        return "Menos de idade"
    } else {
        return "Maior de idade"
    }
}
console.log(retorno(2008))