import { ShowInfo } from '../entities/showInfo'

export default function ShowInfoRepository() {
    this.search = function(query:string, data:ShowInfo[]) {
        let target = data.filter((indice:ShowInfo) => { return Object.values(indice).some((index) => {
            if (typeof index === 'string') {return index.toLowerCase().includes(query.toLocaleLowerCase())}
            else if (typeof index === 'object') {
                return index.some(i => { 
                    return i.toLowerCase().includes(query.toLocaleLowerCase())
                } ) }

        } )
        } )


        return target
    }
}