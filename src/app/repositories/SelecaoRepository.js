import  { consulta } from "../database/conexao.js"
class SelecaoRepository {

    create(selecao) {
        const sql = "insert into selecoes set ?"
        return consulta(sql, selecao, 'Não foi possivel cadastrar')

    }

    findAll() {
        const sql = "SELECT * FROM bdcopa.selecoes;"
        return consulta(sql, 'Não foi possivel localizar')
    }

    findById(id) {
        const sql = "SELECT * FROM bdcopa.selecoes where id=?"
        return consulta(sql, id, 'Não foi possivel localizar')
    }

    update(selecao, id) {

        const sql = "update selecoes set ? where id=?"
        return consulta(sql, [selecao, id], 'Não foi possivel alterar')
    }
    delete(id) {
        const sql = "delete from selecoes where id=?"
        return consulta(sql, id, 'Não foi possivel deletar')
    }
}

export default new SelecaoRepository()