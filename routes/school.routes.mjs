import express from "express";

import {
    addSchool,
    listSchools,
} from "../controllers/school.controller.mjs";

import asyncHandler from "../middlewares/asyncHandler.middleware.mjs";
import validate from "../middlewares/validate.middleware.mjs";

import {
    addSchoolSchema,
    listSchoolsSchema,
} from "../validations/school.validation.mjs";

const router = express.Router();

router.post(
    "/addSchool",
    validate(addSchoolSchema),
    asyncHandler(addSchool)
);

router.get(
    "/listSchools",
    validate(listSchoolsSchema),
    asyncHandler(listSchools)
);

export default router;