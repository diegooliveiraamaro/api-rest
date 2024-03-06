import conexao from '../database/conexao.js'
import SelecaoRepository from '../repositories/SelecaoRepository.js'

class SelecaoController {

  async index(req, res) {
   const row = await SelecaoRepository.findAll()
   res.json(row)
  }

  async show(req, res) {    
    const id =req.params.id
    const row = await SelecaoRepository.findById(id)
    res.json(row)
  }

  store(req, res) {    
    const selecao = req.body
    const sql = "insert into selecoes set ?"
    conexao.query(sql, selecao, (erro, resultado) => {

      if (erro) {
        res.status(400).json({ 'erro': erro })
      } else {
        res.status(201).json(resultado)
      }
    })
  }
  update(req, res) {   
    const id = req.params.id
    const selecao = req.body
    const sql = "update selecoes set ? where id=?"
    conexao.query(sql, [selecao, id], (erro, resultado) => {

      if (erro) {
        res.status(400).json({ 'erro': erro })
      } else {
        res.status(200).json(resultado)
      }
    })
  }
  delete(req, res) {
    const id = req.params.id
    const sql = "delete from selecoes where id=?"
    conexao.query(sql, id, (erro, resultado) => {

      if (erro) {
        res.status(400).json({ 'erro': erro })
      } else {
        res.status(200).json(resultado)
      }
    })
  }
}

export default new SelecaoController()
