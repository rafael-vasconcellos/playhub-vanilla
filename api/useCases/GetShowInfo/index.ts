import ShowInfoRepository from '../../repositories/ShowInfoRepo'
import GetShowInfo from "./GetShowInfo";
import GetShowInfoController from "./GetShowInfoController";

const showInfoRepository = new ShowInfoRepository()
const getShowInfo = new GetShowInfo(showInfoRepository)
const getShowInfoController = new GetShowInfoController(getShowInfo)

export { getShowInfo, getShowInfoController }