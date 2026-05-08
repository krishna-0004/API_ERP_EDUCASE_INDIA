import HTTP_STATUS from "../constants/httpStatus.mjs";
import MESSAGES from "../constants/messages.mjs";
import ApiResponse from "../utils/apiResponse.mjs";

import {
    addSchoolService,
    listSchoolsService,
} from "../services/school.service.mjs";

const addSchool = async (req, res) => {
    const school = await addSchoolService(req.body);

    return ApiResponse.success(
        res,
        school,
        MESSAGES.SCHOOL_CREATED,
        HTTP_STATUS.CREATED
    );
};

const listSchools = async (req, res) => {
    const { latitude, longitude } = req.query;

    const schools = await listSchoolsService(
        Number(latitude),
        Number(longitude)
    );

    return ApiResponse.success(
        res,
        schools,
        MESSAGES.SCHOOLS_FETCHED,
        HTTP_STATUS.OK
    );
};

export {
    addSchool,
    listSchools,
};