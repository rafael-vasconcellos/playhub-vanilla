import { getShowInfo, getShowInfoController } from "../useCases/GetShowInfo"
import { listCategories, listCategoriesController } from "../useCases/ListCategories"
import { it, expect, assert } from 'vitest'


it('should return false', () => {
    expect(getShowInfo.execute('')).equal(false)
} )

it ('should return false', () => {
    expect(getShowInfoController.handle(  {query: {nome: 'warrior', dada: 'dada'}}, {send: ()=>{}}  )).equal(false)
} )

it ('should return false', () => {
    expect(listCategoriesController.handle(  {params: {var: 'dada'}}, {send: ()=>{}}  )).equal(false)
} )


  

