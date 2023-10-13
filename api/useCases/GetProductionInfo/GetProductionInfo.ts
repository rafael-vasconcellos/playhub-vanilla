import { IProductionInfoRepository } from "../../repositories/IRepo"
import { IGetProductionInfoDTO } from './GetProductionInfoDTO'
import content from '../../content.js'

export default class GetProductionInfo {
    constructor(private ProductionInfoRepository:IProductionInfoRepository) {}
    execute( reqQuery: IGetProductionInfoDTO ) {
        let data = content
        for (let indice of Object.values(reqQuery)) {
            data = this.ProductionInfoRepository.search(indice, data)
        }

        return data
    }
}