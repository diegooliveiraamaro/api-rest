class SelecaoController{
index(req, res)  {
    // res.status(200).send(selecoes)
    const sql = "SELECT * FROM bdcopa.selecoes"
    conexao.query(sql, (erro, resultado) => {
  
      if (erro) {
        res.status(404).json({ 'erro': erro })
      } else {
        res.status(200).json(resultado)
      }
    })
  }

show(){}
store(){}
update(){}
delete(){}
}

export default new SelecaoController()
