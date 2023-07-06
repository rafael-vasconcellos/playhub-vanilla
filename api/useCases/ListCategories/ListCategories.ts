import { ICategoriesRepository } from "../../repositories/IRepo";

export default class ListCategories {
    constructor(private categoriesRepository: ICategoriesRepository) {}
    execute(query: 'generos' | 'climas') {
        const target = query==='generos'? 'genero' : 'style'
        let result = {}
        result[query] = this.categoriesRepository.list(target)
        return result
    }
}