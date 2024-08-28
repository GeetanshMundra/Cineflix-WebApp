export {removePeople} from "../reducers/PeopleSlice";
import axios from "../../utils/Axios";
import {loadPeople} from "../reducers/PeopleSlice";

export const asyncLoadPeople = (id) => async (dispatch,getState) => {
    try {
        const detail = await axios.get(`/person/${id}`);
        const externalId = await axios.get(`/person/${id}/external_ids`);
        const combinedCredits = await axios.get(`/person/${id}/combined_credits`);
        const movieCredits = await axios.get(`/person/${id}/movie_credits`);
        const tvCredits = await axios.get(`/person/${id}/tv_credits`);
        let ultimateDetails = {
            detail : detail.data,
            externalId : externalId.data,
            combinedCredits : combinedCredits.data,
            movieCredits : movieCredits.data,
            tvCredits : tvCredits.data,
        }
        dispatch(loadPeople(ultimateDetails));
    } catch (error) {
        console.error(error);
    }
}