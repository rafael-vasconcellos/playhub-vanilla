import ProductionInfoRepository from '../../repositories/ProductionInfoRepo'
import GetShowInfo from "./GetProductionInfo";
import GetProductionInfoController from "./GetProductionInfoController";

const showInfoRepository = new ProductionInfoRepository()
const getShowInfo = new GetShowInfo(showInfoRepository)
const getProductionInfoController = new GetProductionInfoController(getShowInfo)

export { getShowInfo, getProductionInfoController }