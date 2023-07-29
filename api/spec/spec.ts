import { getShowInfo, getShowInfoController } from "../useCases/GetProductionInfo"
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

it('should throw', () => {
    expect(  () => listCategoriesController.handle({}, {})  ).toThrow()
} );

it('should throw', () => {
    expect(  () => getShowInfoController.handle({}, {})  ).toThrow()
} );


