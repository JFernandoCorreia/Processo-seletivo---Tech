const fs = require('fs');
const sqlite3 = require('sqlite3');

// Função para ler os arquivos JSON
function lerArquivosJson() {
  try {
    const dados1 = JSON.parse(fs.readFileSync('broken_database_1.json', 'utf8'));
    const dados2 = JSON.parse(fs.readFileSync('broken_database_2.json', 'utf8'));
    return { dados1, dados2 };
  } catch (error) {
    console.error('Erro ao ler arquivos JSON:', error.message);
    return null;
  }
}

// Função para criar e popular o banco de dados SQLite
function criarBancoDeDados(dados1, dados2) {
  const db = new sqlite3.Database('myDB.db');

  // Criação de tabelas
  db.serialize(() => {
    db.run(`
      CREATE TABLE IF NOT EXISTS dados1 (
        data TEXT,
        id_marca_ INTEGER,
        vendas INTEGER,
        valor_do_veiculo INTEGER,
        nome TEXT
      )
    `);

    db.run(`
      CREATE TABLE IF NOT EXISTS dados2 (
        id_marca INTEGER,
        marca TEXT
      )
    `);

    // Popula as tabelas
    const stmt1 = db.prepare('INSERT INTO dados1 VALUES (?, ?, ?, ?, ?)');
    const stmt2 = db.prepare('INSERT INTO dados2 VALUES (?, ?)');

    dados1.forEach(item => stmt1.run(item.data, item.id_marca_, item.vendas, item.valor_do_veiculo, item.nome));
    dados2.forEach(item => stmt2.run(item.id_marca, item.marca));

    stmt1.finalize();
    stmt2.finalize();
  });

  db.close();
}

// Função para corrigir nomes de marca e veículo
function corrigirNomes(dados, marcasCorrigidas) {
  const dadosCorrigidos = dados.map(item => {
    const marcaCorrigida = marcasCorrigidas.find(marca => marca.id_marca === item.id_marca_);
    if (marcaCorrigida) {
      item.nome = item.nome.replace(/æ/g, 'a').replace(/ø/g, 'o');
      item.nome = item.nome.replace(/æ/g, 'a').replace(/ø/g, 'o');
      item.marca = marcaCorrigida.marca;
    }
    return item;
  });
  return dadosCorrigidos;
}

// Função para corrigir valores de vendas
function corrigirVendas(dados) {
  const dadosCorrigidos = dados.map(item => {
    item.vendas = Number(item.vendas);
    return item;
  });
  return dadosCorrigidos;
}

// Função para exportar os arquivos JSON corrigidos
function exportarArquivosCorrigidos(dados1, dados2) {
  fs.writeFileSync('broken_database_1_corrigido.json', JSON.stringify(dados1, null, 2));
  fs.writeFileSync('broken_database_2_corrigido.json', JSON.stringify(dados2, null, 2));
}

// Ler os arquivos JSON
const { dados1, dados2 } = lerArquivosJson();

if (dados1 && dados2) {
  // Corrigir nomes de marca e veículo
  const marcasCorrigidas = corrigirNomes(dados2, dados2);
  const dados1Corrigidos = corrigirNomes(dados1, marcasCorrigidas);

  // Corrigir valores de vendas
  const dados1Final = corrigirVendas(dados1Corrigidos);

  // Exportar arquivos JSON corrigidos
  exportarArquivosCorrigidos(dados1Final, dados2);

  // Criar banco de dados SQLite e importar dados
  criarBancoDeDados(dados1Final, dados2);
} else {
  console.error('Erro ao ler os arquivos JSON.');
}
