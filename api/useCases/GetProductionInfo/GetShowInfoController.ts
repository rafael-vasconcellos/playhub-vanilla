import { Request, Response } from 'express'
import GetProductionInfo from "./GetProductionInfo"

export default class GetShowInfoController {
    constructor(private getShowInfo: GetProductionInfo) {}
    handle( req: Request, res: Response ) { 
        const schema = ['nome', 'genero', 'clima']

        try {
            for (let indice of Object.keys(req.query)) {
                if (!schema.includes(indice)) { res.send('Insert valid query parameters') ; return false }
            }

            if ( (req.query.nome === undefined && req.query.genero === undefined && req.query.clima === undefined) || Object.keys(req.query).length === 0 ) {
                res.send('Insert valid query parameters') ;  return false
            }

            if ( Object.values(req.query).length <= 0 ) {res.send('Insert valid query parameters') ;  return false}

            return this.getShowInfo.execute(req.query)

        } catch(e) { throw new TypeError(e) }

    }
}