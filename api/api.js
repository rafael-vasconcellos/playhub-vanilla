const express = require('express')
const app = express()
const content = require('./content')
console.log(express)


app.use(express.json())


app.route('/api').get( (req, res) => {

    let queries = []
    if ( (req.query.nome === undefined && req.query.genero === undefined && req.query.clima === undefined) || Object.keys(req.query).length === 0 ) {
        return res.send('Insert valid query parameters')
    } else {
        if (req.query.nome !== undefined) { queries.push(req.query.nome.toLowerCase()) }
        if (req.query.genero !== undefined) { queries.push(req.query.genero.toLowerCase()) }
        if (req.query.clima !== undefined) { queries.push(req.query.clima.toLowerCase()) }
    }


    function search(query) {
        let target = data.filter(indice => { return Object.values(indice).some(index => {
            if (typeof index === 'string') {return index.toLowerCase().includes(query)}
            else if (typeof index === 'object') {
                return index.some(i => { 
                    i.toLowerCase().includes(query)
                } ) }

        } )
        } )

        data = target
    }

    let data = content
    for (let indice of queries) {
        search(indice)
    }
    res.send(data)

} )

app.get('/api/:var', (req, res) => {
    let arr = []
    function list(target) {
        content.filter(indice => {return indice[target].forEach(i => {
            if (!arr.includes(i)) {arr.push(i)}

        } )
        } )
    }

    
    if (req.params.var === 'generos') { list('genero') ; console.log(arr.length) ; res.send( {generos: arr} ) }
    if (req.params.var === 'climas') { list('style') ; console.log(arr.length) ; res.send( {climas: arr} ) }

} )



app.listen(3000);
console.log('Rodando');
console.log(content.length)

