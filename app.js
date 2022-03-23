//criação de constantes para o requerimento das rotas, para noticia, home e admib, que estão em routes e já estão conectados com os arquivos de views, aqui conecta tudo
const app=require('./config/server.js');
const rotaHome=require('./app/routes/home')(app);
const rotaAdmin=require('./app/routes/admin')(app);
const rotaNoticias=require('./app/routes/noticias')(app);

//Cria um servidor rodando na porta 3000
app.listen('3000',function(){
	console.log('Servidor rodando na porta 3000');
});
