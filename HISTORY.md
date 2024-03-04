As tecnologias utilizadas para a solução do problema foram PHP e Laravel com o banco de dados mysql para o back-end e Angular para o front-end.
Foi criado um banco de dados chamado db_materias, e a tabela matérias:
CREATE TABLE `materias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) NOT NULL,
  `descricao` varchar(500) DEFAULT NULL,
  `texto_completo` varchar(60000) DEFAULT NULL,
  `imagem` varchar(1000) DEFAULT NULL,
  `data_de_publicacao` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
Também foram inseridos alguns registros para a realização de testes de paginação.
Foi criado um MODEL(Materia) especificando os campos da tabela no banco de dados.
Foi ciado um CONTROLLER(MateriaController) para realizar as consultas que seriam chamados pelos endPoints.
O primeiro endpoint deveria retornar somente os dados titulo, descricao, imagem, data_de_publicacao, então foi criado um RECURSO(MateriaResource) para realizar o filtro da coleção de dados que vem da consulta e assim retornar só os campos necessários.
O Segundo endpoint foi criado com uma consulta simples padrão, pois era para trazer todos os campos da tabela materia do banco de dados.
Para a execução da API é bem simples, baixa o projeto cria um projeto utilizando o composer cola os arquivos do repositório e executa os comandos composer update e composer install, em seguida rodar o projeto com o comando php artisan serve.
Na aplicação front-end foi utilizado o framework Angular para a criação das páginas, foram criadas duas páginas além do template, também foram criados um Model e um Service para consumir a API laravel.
Página listaMaterias onde foi utilizado um parâmetro page que é enviado para a API para realização da paginação.
Página detalheMateria onde foi utilizado um parâmetro id da matéria para selecionar a matéria no qual se deseja saber todas as informações.
Foi implementado uma paginação simples utilizando logica pura sem necessidades de ferramentas externas do Angular, porem bem eficiente, se houvesse mais tempo o melhor seria uma paginação com mais informações tipo: pagina atual, número itens dinâmico para paginação.
Para execução do projeto é necessário baixar o projeto atualizar as bibliotecas node_modules e se seguida executar com o comando ng serve.

O endereço da API é http://localhost:8000/api/ e da aplicação web http://localhost:4200/ 

