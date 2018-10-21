module.exports = function(req, res, next){
    //API aberta a ser consumida por qualquer origem. Aqui definimos quais clientes consumirão-a. 
    //Neste caso de teste, está aberta para qualquer origem
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
}