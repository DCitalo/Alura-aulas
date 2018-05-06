/*produtosController
	lista json

	Cadastro aceita json

	Cdastro aceita urlencoded*/
	
var http = require('http');
var assert = require('assert');
describe('#produtosController',function() {
	it('#listagem json',function(done) {
		var configuracoes = {
		    hostname: 'localhost',
		    port:3000,
		    path: '/produtos',
		    headers:{
		    	'Accept':'application/json'
		    	//'Accept':'text/html'
		    }
		};
		http.get(configuracoes,function(res){
			assert.equal(res.statusCode,200);
			assert.equal(res.headers['content-type'],'application/json; charset=utf-8');
			done();
		});
		
		//console.log('teste de verificação de listagem do json.')

	})
})