import content from "../content"

export default function CategoriesRepository() {
    this.list = function(target:string) {
        let arr: string[] = []
        content.filter( (indice) => { return indice[target].forEach( (i) => {
            if (!arr.includes(i)) {arr.push(i)}

        } )
        } )

        return arr
    }
}