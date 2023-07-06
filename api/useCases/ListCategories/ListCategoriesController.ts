import ListCategories from "./ListCategories";

export default class ListCategoriesController {
    constructor(private listCategories: ListCategories) {}
    handle(req, res) {
        if (req.params.var!=='generos' && req.params.var!=='climas') {return res.send('Insert valid query parameters')}
        return this.listCategories.execute(req.params.var)
    }
}