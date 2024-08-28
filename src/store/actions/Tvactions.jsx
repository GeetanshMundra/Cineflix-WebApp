export {removeTv} from "../reducers/TvSlice";
import axios from "../../utils/Axios";
import {loadTv} from "../reducers/TvSlice";

export const asyncLoadTv = (id) => async (dispatch,getState) => {
    try {
        const detail = await axios.get(`/tv/${id}`);
        const externalId = await axios.get(`/tv/${id}/external_ids`);
        const recommendations = await axios.get(`/tv/${id}/recommendations`);
        const similar = await axios.get(`/tv/${id}/similar`);
        const videos = await axios.get(`/tv/${id}/videos`);
        const watchProvider = await axios.get(`/tv/${id}/watch/providers`);
        let ultimateDetails = {
            detail : detail.data,
            externalId : externalId.data,
            recommendations : recommendations.data.results,
            similar : similar.data.results,
            videos : videos.data.results.find(m => m.type === "Trailer"),
            watchProvider : watchProvider.data.results.IN,
        }
        console.log(ultimateDetails);
        dispatch(loadTv(ultimateDetails));
    } catch (error) {
        console.error(error);
    }
}