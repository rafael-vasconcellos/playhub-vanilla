import { ShowInfo } from "../entities/showInfo"

export type IProductionInfoRepository = {
    search(query:string, data:ShowInfo[]): ShowInfo[],
}

export type ICategoriesRepository = {
    list(target: string): string[]
}