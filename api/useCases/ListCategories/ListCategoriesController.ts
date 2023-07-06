import ListCategories from "./ListCategories";

export default class ListCategoriesController {
    constructor(private listCategories: ListCategories) {}
    handle(req, res) {
        try {
            if (req.params.var!=='generos' && req.params.var!=='climas') {
                res.send('Insert valid query parameters') ; return false
            }

            return this.listCategories.execute(req.params.var)

        } catch(e) { console.error(e) }
    }
}