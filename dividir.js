const dividir = (x, y) => {

    if (x == 0 || y == 0){
        return 'Nao se pode dividir por zero'
    }
    
    return x / y
}


module.exports = dividir