function calcularMedia(notas) {
    if(!(Array.isArray(notas) && notas.every(nota => typeof nota === 'number')))
        throw new Error("Notas deve ser um array de números.");

    return notas.reduce((prev, curr) => prev + curr, 0) / notas.length;
}

module.exports = { calcularMedia };