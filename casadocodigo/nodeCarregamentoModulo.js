//Como funciona o require no node.js
function require(path){
	var codigoDoSeuCodigo = carregado(path);
	var funcaoDeCarregamento = function(){
		eval(codigoDoSeuModulo)
	}
	var module = {
		exports : {};
	}
	funcaoDeCarregamento(module,module.exports);
	return module;
}