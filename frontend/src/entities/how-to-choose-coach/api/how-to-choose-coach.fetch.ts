import * as api from "./how-to-choose-coach.api";

export const fetchHowChooseCoachData = async () => {
	const [howChooseCoach] = await Promise.all([api.getHowChooseCoach()]);
	return {
		howChooseCoach,
	};
};
