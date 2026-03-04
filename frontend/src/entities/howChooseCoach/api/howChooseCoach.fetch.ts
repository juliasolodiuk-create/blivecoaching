import * as api from "./howChooseCoach.api";

export const fetchHowChooseCoachData = async () => {
	const [howChooseCoach] = await Promise.all([api.getHowChooseCoach()]);
	return {
		howChooseCoach,
	};
};
