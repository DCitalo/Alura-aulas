function ProdutosDAO(connection) {
	this._connection = connection;
}
//selecionar lista
ProdutosDAO.prototype.lista = function (callback) {
	/*
	Normalmente se faria assim:
	var resultados = this._connection.query('select * from produtos');
	return resultados;
	
	Mas para conseguir usar mais a função assincrona do node.js e usar o processador enquanto se faz uma requisição de sistema
	é melhor executar a query e retonar seu callback com uma tread so. "Por isso que se passa callback o tempo inteiro"
	this._connection.query('select * from produtos', callback);
	*/
	this._connection.query('select * from produtos', callback);
}
//inserir dados no db
ProdutosDAO.prototype.salva = function (produto,callback) {
	this._connection.query('insert into produtos set ?',produto, callback);
}

/*ou pode ser usado 

ProdutosDAO.prototype.salva = function (produto, callback) {
    this._connection.query('insert into produtos (titulo, preco, descricao) values (?, ?, ?)',  [produto.titulo, produto.preco, produto.descricao], callback);
}
*/

module.exports = function () {
	return ProdutosDAO;
}