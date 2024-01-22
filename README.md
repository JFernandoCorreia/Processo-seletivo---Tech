# Projeto Classificatório - Processo seletivo Tech 2024

## SUMÁRIO

### Situação problema: Questões

1. [Recuperação dos dados originais do banco de dados]
2. [Criar relatório de vendas]

### Situação problema

Você é responsável por um software de gestão de uma concessionária multimarcas, e sua gestão solicitou um relatório de desempenho das vendas dos veículos no último ano.

Ao verificar o banco de dados, você percebeu que algumas tabelas foram corrompidas em uma atualização. Todos os nomes de veículos e marcas tiveram alguns caracteres modificados, houve substituição de todos os "a" por "æ", "o" por "ø",.

É preciso reverter essas substituições para recuperar os nomes originais antes de construir o relatório.

Você encontrou um problema com os valores de vendas também, eles devem ser sempre do tipo number, mas alguns deles estão no tipo string. É necessário transformar as strings novamente em number.

Exemplo:

Original:

<pre><div class="bg-black rounded-md"><div class="flex items-center relative text-gray-200 bg-gray-800 dark:bg-token-surface-primary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>json</span><span class="" data-state="closed"><button class="flex gap-1 items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C10.8954 4 10 4.89543 10 6H14C14 4.89543 13.1046 4 12 4ZM8.53513 4C9.22675 2.8044 10.5194 2 12 2C13.4806 2 14.7733 2.8044 15.4649 4H17C18.6569 4 20 5.34315 20 7V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V7C4 5.34315 5.34315 4 7 4H8.53513ZM8 6H7C6.44772 6 6 6.44772 6 7V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V7C18 6.44772 17.5523 6 17 6H16C16 7.10457 15.1046 8 14 8H10C8.89543 8 8 7.10457 8 6Z" fill="currentColor"></path></svg>Copy code</button></span></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-json">"vendas": 11
</code></div></div></pre>

Corrompido:

<pre><div class="bg-black rounded-md"><div class="flex items-center relative text-gray-200 bg-gray-800 dark:bg-token-surface-primary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>json</span><span class="" data-state="closed"><button class="flex gap-1 items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C10.8954 4 10 4.89543 10 6H14C14 4.89543 13.1046 4 12 4ZM8.53513 4C9.22675 2.8044 10.5194 2 12 2C13.4806 2 14.7733 2.8044 15.4649 4H17C18.6569 4 20 5.34315 20 7V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V7C4 5.34315 5.34315 4 7 4H8.53513ZM8 6H7C6.44772 6 6 6.44772 6 7V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V7C18 6.44772 17.5523 6 17 6H16C16 7.10457 15.1046 8 14 8H10C8.89543 8 8 7.10457 8 6Z" fill="currentColor"></path></svg>Copy code</button></span></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-json">"vendas": "11"
</code></div></div></pre>

### Questões

Para esse projeto, você utilizará os arquivos [broken_database_1](https://chat.openai.com/c/broken_database_1.json) e [broken_database_2](https://chat.openai.com/c/broken_database_2.json) (disponível [aqui]()) e irá fazer uma série de transformações até que eles voltem ao formato original. Para isso, será necessário desenvolver algumas funções. Você deverá utilizar a linguagem JavaScript.

#### 1. Recuperação dos dados originais do banco de dados

Você deverá criar uma função para ler o arquivo `broken_database_1.json` e `broken_database_2.json`, e com isso criar funções para percorrer o banco de dados corrompido e corrigir erros descritos anteriormente, além de uma função para exportar os arquivos `.json` como saída.

Portanto, serão 4 funções:

a) Ler os arquivos Json;

b) Corrigir nomes de marca e veículo;

c) Corrigir vendas;

d) Exportar um arquivo JSON com o banco corrigido.

#### 2. Criar relatório de venda

Seu relatório deverá ser um arquivo no formato PDF, nele será necessário responder algumas questões por meio de tabelas e gráficos.

Utilize a linguagem SQL para criar uma tabela única que contenha todos os dados necessários para o seu relatório, você deverá importar seus 2 arquivos JSON corrigidos para a plataforma SQL Online, no final você deverá exportar sua tabela resultante como um arquivo .CSV para utilizar no seu relatório.

Seu relatório deverá responder às seguintes perguntas:

1. Qual marca teve o maior volume de vendas?
2. Qual veículo gerou a maior e menor receita?
3. Qual a média de vendas do ano por marca?
4. Quais marcas geraram uma receita maior com número menor de vendas?
5. Existe alguma relação entre os veículos mais vendidos?

Nesta etapa você 'pode' utilizar recursos que sustentem as respostas acima, como gráficos, textos, entre outros.

## Documentação do trabalho realizado

Você deverá criar um documento em formato PDF contendo uma breve explicação do algoritmo JS e do código SQL criado. Você deverá abordar os seguintes pontos:

* Uma breve explicação de cada função do código;
* Tratamentos feitos no código para evitar bugs;
* Outros pontos que queira compartilhar.

### Entregas esperadas:

* Código JS utilizado para corrigir os dados
* Arquivos corrigidos `broken_database_1.json` e `broken_database_2.json`
* Código SQL
* Tabela unificada `database.csv`
* Relatório de vendas.PDF
* Explicação dos códigos.PDF

Após tudo pronto, coloque seu projeto em uma pasta pública em seu Google Drive ou em seu GitHub e nos envie o link para podermos avaliar o seu projeto.

Observação¹: A documentação é muito importante. Atente-se a isto.

Observação²: NÃO é escopo do teste desenvolver qualquer página .html.
