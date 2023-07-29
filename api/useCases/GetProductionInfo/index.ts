import ProductionInfoRepository from '../../repositories/ProductionInfoRepo'
import GetShowInfo from "./GetProductionInfo";
import GetShowInfoController from "./GetShowInfoController";

const showInfoRepository = new ProductionInfoRepository()
const getShowInfo = new GetShowInfo(showInfoRepository)
const getShowInfoController = new GetShowInfoController(getShowInfo)

export { getShowInfo, getShowInfoController }