import * as schoolRepository from "../repositories/school.repository.mjs";

import calculateDistance from "../utils/haversine.mjs";

const addSchoolService = async (payload) => {
    return schoolRepository.createSchool(payload);
};

const listSchoolsService = async (
    latitude,
    longitude
) => {
    const schools =
        await schoolRepository.getAllSchools();

    for (const school of schools) {
        school.distanceInKm = Number(
            calculateDistance(
                latitude,
                longitude,
                Number(school.latitude),
                Number(school.longitude)
            ).toFixed(2)
        );
    }

    schools.sort(
        (a, b) => a.distanceInKm - b.distanceInKm
    );

    return schools;
};

export {
    addSchoolService,
    listSchoolsService,
};