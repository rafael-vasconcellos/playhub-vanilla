import { IShowInfoRepository } from "../../repositories/IRepo"
import { GetShowInfoDTO } from './GetShowInfoDTO'
import content from '../../content.js'

export default class GetShowInfo {
    constructor(private showInfoRepository:IShowInfoRepository) {}
    execute(reqQuery:GetShowInfoDTO) {
        let data = content
        if (Object.values(reqQuery).length <= 0) {return false}
        for (let indice of Object.values(reqQuery)) {
            data = this.showInfoRepository.search(indice, data)
        }

        return data
    }
}