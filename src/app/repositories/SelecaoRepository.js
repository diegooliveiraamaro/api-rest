import conexao from "../database/conexao.js"
class SelecaoRepository{

create(selecao){
    const sql = "insert into selecoes set ?"
    return new Promise((resolve, reject)=>{
        conexao.query(sql, selecao, (erro, resultado)=>{
            if(erro) return reject('Não foi possivel cadastrar')            
            const row = JSON.parse(JSON.stringify(resultado))
            return resolve(row)
        })
    })  
}

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

update(selecao, id){

    const sql = "update selecoes set ? where id=?"
    return new Promise((resolve, reject)=>{
        conexao.query(sql, [selecao, id], (erro, resultado)=>{
            if(erro) return reject('Não foi possível atualizar')
            
            const row = JSON.parse(JSON.stringify(resultado))
            return resolve(row)
        })
    })  
}
delete(id){
    const sql = "delete from selecoes where id=?"
    return new Promise((resolve, reject)=>{
        conexao.query(sql,  id, (erro, resultado)=>{
            if(erro) return reject('Não foi possível deletar')
            
            const row = JSON.parse(JSON.stringify(resultado))
            return resolve(row)
        })
    })  
}
}

export default new SelecaoRepository()