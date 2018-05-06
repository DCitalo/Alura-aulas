function ProdutosDAO(connection) {
	this._connection = connection;
}
//selecionar lista
ProdutosDAO.prototype.lista = function (callback) {
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