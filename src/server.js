import app from '../src/app.js'

const port = 3000 // criar uma porta


//escutar a porta

app.listen(port, () => { 
    console.log(`Servidor rodando no servidor http://localhost:${port}`)

})