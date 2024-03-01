import express from 'express'
import conexao from '../infra/conexao.js'

const app = express()

app.use(express.json())

function buscarSelecaoPorId(id) {
  return selecoes.filter(selecao => selecao.id == id)
}

function buscarIndexSelecao(id) {
  return selecoes.findIndex(selecao => selecao.id == id)
}

//ROTAS
app.get('/selecoes', (req, res) => {
  // res.status(200).send(selecoes)
  const sql = "SELECT * FROM bdcopa.selecoes"
  conexao.query(sql, (erro, resultado) => {

    if (erro) {
      res.status(400).json({ 'erro': erro })
    } else {
      res.status(200).json(resultado)
    }
  })
})

app.get('/selecoes/:id', (req, res) => {
  //res.json(buscarSelecaoPorId(req.params.id))
  const id = req.params.id
  const sql = "SELECT * FROM bdcopa.selecoes where id=?"
  conexao.query(sql, id, (erro, resultado) => {
    const linha = resultado[0]
    if (erro) {
      res.status(404).json({ 'erro': erro })
    } else {
      res.status(200).json(linha)
    }
  })
})

app.post('/selecoes', (req, res) => {
  //selecoes.push(req.body)
  //res.status(201).send('Seleção cadastrada com sucesso!')

  const selecao = req.body
  const sql = "insert into selecoes set ?"
  conexao.query(sql, selecao, (erro, resultado) => {

    if (erro) {
      res.status(400).json({ 'erro': erro })
    } else {
      res.status(201).json(resultado)
    }
  })
})

app.delete('/selecoes/:id', (req, res) => {
  // let index = buscarIndexSelecao(req.params.id)
  // selecoes.splice(index, 1)
  // res.send('Seleção com id ' + req.params.id + ' excluida com sucesso!')

  //res.json(buscarSelecaoPorId(req.params.id))
  const id = req.params.id
  const sql = "delete from selecoes where id=?"
  conexao.query(sql, id, (erro, resultado) => {

    if (erro) {
      res.status(400).json({ 'erro': erro })
    } else {
      res.status(200).json(resultado)
    }
  })
})

app.put('/selecoes/:id', (req, res) => {
  // let index = buscarIndexSelecao(req.params.id)
  // selecoes[index].selecao = req.body.selecao
  // selecoes[index].grupo = req.body.grupo

  // res.json(selecoes)
  // //res.send('Seleção com id excluida com sucesso! ${req.params.id}')
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
})
export default app

