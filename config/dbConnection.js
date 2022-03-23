const mysql=require('mysql');//criando a requisição para o mysql, banco de dados
//modularização do banco de dados
module.exports=function(){
	//conexão com o banco de dados
return connection=mysql.createConnection({
		host:'localhost',
		user:'root',
		password:'ifms',
		database:'portal_noticias'
	});	
}