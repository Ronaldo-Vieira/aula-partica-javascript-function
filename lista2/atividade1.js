const media = (nota1, nota2) => {
    var calc = (nota1 + nota2) / 2
    if(calc >= 7) {
        return "Aprovado"
    } else if (calc >= 5 && calc <= 7) {
        return "Recuperação"
    } else {
        return "Reprovado"
    }
}
console.log(media(8, 8))