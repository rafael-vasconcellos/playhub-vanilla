import { IShowInfoRepository } from "../../repositories/IRepo"
import { GetShowInfoDTO } from './GetShowInfoDTO'
import content from '../../content.js'

export default class GetShowInfo {
    constructor(private showInfoRepository:IShowInfoRepository) {}
    execute(reqQuery:GetShowInfoDTO) {
        let data = content
        for (let indice of Object.values(reqQuery)) {
            if (indice) {
                data = this.showInfoRepository.search(indice, data)
            }
        }
        return data
    }
}