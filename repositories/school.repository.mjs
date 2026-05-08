import { School } from "../models/index.mjs";

const createSchool = async (payload) => {
    return School.create(payload);
};

const getAllSchools = async () => {
    return School.findAll({
        raw: true,

        attributes: [
            "id",
            "name",
            "address",
            "latitude",
            "longitude",
        ],
    });
};

export {
    createSchool,
    getAllSchools,
};