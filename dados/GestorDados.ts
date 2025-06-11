import db from './DatabaseInstance';
import { Produto } from './Produto';

const sqlCreate = `
  CREATE TABLE IF NOT EXISTS PRODUTO(
    CODIGO INTEGER PRIMARY KEY,
    NOME VARCHAR(20),
    QUANTIDADE INTEGER
  )
`;
const sqlInsert = `INSERT INTO PRODUTO (CODIGO, NOME, QUANTIDADE) VALUES (?, ?, ?)`;
const sqlDelete = `DELETE FROM PRODUTO WHERE CODIGO=?`;
const sqlSelect = `SELECT * FROM PRODUTO`;

class GestorDados {
  private async criarBanco() {
    db.transaction(txn => txn.executeSql(sqlCreate, []));
  }

  public async remover(codigo: string) {
    db.transaction(txn => txn.executeSql(sqlDelete, [parseInt(codigo)]));
  }

  public async adicionar(produto: Produto) {
    db.transaction(txn =>
      txn.executeSql(sqlInsert, [produto.codigo, produto.nome, produto.quantidade])
    );
  }

  public async obterTodos(useRetorno: (produtos: Produto[]) => void) {
    let objetos: Produto[] = [];
    db.transaction(txn =>
      txn.executeSql(sqlSelect, [], (txn, results) => {
        for (let i = 0; i < results.rows.length; ++i) {
          let row = results.rows.item(i);
          objetos.push(new Produto(row.CODIGO, row.NOME, row.QUANTIDADE));
        }
        useRetorno(objetos);
        if (objetos.length < 1) this.criarBanco();
      })
    );
  }
}

export default GestorDados;
