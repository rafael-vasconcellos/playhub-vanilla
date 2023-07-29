import { IProductionInfoRepository } from "../../repositories/IRepo"
import { GetProductionInfoDTO } from './GetProductionInfoDTO'
import content from '../../content.js'

export default class GetProductionInfo {
    constructor(private showInfoRepository:IProductionInfoRepository) {}
    execute( reqQuery:GetProductionInfoDTO ) {
        let data = content
        for (let indice of Object.values(reqQuery)) {
            data = this.showInfoRepository.search(indice, data)
        }

        return data
    }
}