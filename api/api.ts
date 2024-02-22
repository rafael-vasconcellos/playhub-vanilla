import { getShowInfo, getProductionInfoController } from "./useCases/GetProductionInfo"
import { listCategories, listCategoriesController } from "./useCases/ListCategories"
import express from 'express'
const app = express()


app.use(express.json())

app.route('/api').get( (req, res) => {
    const result = getProductionInfoController.handle(req, res)
    if (result) {res.send(result)}

} )

app.get('/api/:var', (req, res) => {
    const result = listCategoriesController.handle(req, res)
    if (result) { res.send(result)}

} )


app.listen(3000);
console.log('Rodando');

