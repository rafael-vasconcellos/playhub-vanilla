//import { Request, Response } from 'express'
import GetShowInfo from "./GetShowInfo"

export default class GetShowInfoController {
    constructor(private getShowInfo: GetShowInfo) {}
    handle(req, res) { 
        const schema = ['nome', 'genero', 'clima']

        for (let indice of Object.keys(req.query)) {
            if (!schema.includes(indice)) {return res.send('Insert valid query parameters')}
        }

        if ( (req.query.nome === undefined && req.query.genero === undefined && req.query.clima === undefined) || Object.keys(req.query).length === 0 ) {
            return res.send('Insert valid query parameters')
        }

        return this.getShowInfo.execute(req.query)
    }
}