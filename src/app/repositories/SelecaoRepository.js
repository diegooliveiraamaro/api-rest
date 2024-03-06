import conexao from "../database/conexao.js"
class SelecaoRepository{
create(){}
findAll(){
    const sql = "SELECT * FROM bdcopa.selecoes;"    
    return new Promise((resolve, reject)=>{
        conexao.query(sql, (erro, resultado)=>{
            if(erro) return reject('Não foi possível localizar')
            
            const row = JSON.parse(JSON.stringify(resultado))
            return resolve(row)
        })
    })    
}

findById(id){
    
    const sql = "SELECT * FROM bdcopa.selecoes where id=?"
    return new Promise((resolve, reject)=>{
        conexao.query(sql, id, (erro, resultado)=>{
            if(erro) return reject('Não foi possível localizar')
            
            const row = JSON.parse(JSON.stringify(resultado))
            return resolve(row)
        })
    })  
}
update(){}
delete(){}
}

export default new SelecaoRepository()