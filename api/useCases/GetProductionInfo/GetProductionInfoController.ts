//import { Request, Response } from 'express'
import GetProductionInfo from "./GetProductionInfo"

export default class GetProductionInfoController {
    constructor(private getProductionInfo: GetProductionInfo) {}
    handle( req, res ) { 
        const schema = ['nome', 'genero', 'clima']

        try {
            for (let indice of Object.keys(req.query)) {
                if (!schema.includes(indice)) { res.send('Insert valid query parameters') ; return false }
            }

            if ( (req.query.nome === undefined && req.query.genero === undefined && req.query.clima === undefined) || Object.keys(req.query).length === 0 ) {
                res.send('Insert valid query parameters') ;  return false
            }

            if ( Object.values(req.query).length <= 0 ) {res.send('Insert valid query parameters') ;  return false}

            return this.getProductionInfo.execute(req.query)

        } catch(e) { throw new TypeError(e) }

    }
}