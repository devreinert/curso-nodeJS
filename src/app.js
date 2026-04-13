import express from 'express' //importar o express
const app = express() //criar uma instacia do express
app.use(express.json()) //indicar para o express ler body com JSON

const selecoes = [
    {id: 1, selecao: 'Brasil', grupo: 'G' },
    {id: 2, selecao: 'Paraguai', grupo: 'G' },
    {id: 3, selecao: 'Uruguai', grupo: 'G' },
    {id: 4, selecao: 'Argentina', grupo: 'G' },
]

//pegar o objeto por id
function buscarSelecaoPorId(id){
    return selecoes.filter(selecao => selecao.id == id)
}

//pegar posição no array
function buscarIndexSelecao(id){
    return selecoes.findIndex(selecao => selecao.id == id)
}

//criar uma rota padrao ou raiz

app.get('/', (req, res) =>{ 
    res.send('Funcionando')

})

app.get('/selecoes', (req, res) =>{
    res.status(200).send(selecoes)
})

app.get('/selecoes/:id', (req, res) => {
    res.json(buscarSelecaoPorId(req.params.id))
})

app.post('/selecoes', (req,res) => {
    selecoes.push(req.body)
    res.status(201).send('Seleção cadastrada!')
})

app.delete('/selecoes/:id', (req, res) =>{
    let index = buscarIndexSelecao(req.params.id)
    selecoes.splice(index, 1)
    res.send(`Seleção com o id ${req.params.id} excluida com sucesso!`)
})
export default app
