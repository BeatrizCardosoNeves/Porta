const dbConnection=require('../../config/dbConnection'); //relacionando com o banco de dados
//modularização
module.exports=function(app){
//conexão com o banco dados para a noticia
	var connection=dbConnection();
	//pegando "get" a noticia e colocando a função de requerimento e resposta
	app.get('/noticias',function(req,res){
		
//consultando a conexão com a noticia e a função para caso de erro e mostrar os resultados
	connection.query('select * from noticias', function(error,result){
		if (error) {
			console.log(error);
		};
		res.send(result);

	});

	});	

}