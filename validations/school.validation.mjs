import { z } from "zod";

const latitudeSchema = z
    .number({
        required_error: "Latitude is required",
    })
    .min(-90, "Latitude must be greater than -90")
    .max(90, "Latitude must be less than 90");

const longitudeSchema = z
    .number({
        required_error: "Longitude is required",
    })
    .min(-180, "Longitude must be greater than -180")
    .max(180, "Longitude must be less than 180");

const addSchoolSchema = z.object({
    body: z.object({
        name: z
            .string()
            .trim()
            .min(2)
            .max(100),

        address: z
            .string()
            .trim()
            .min(2)
            .max(255),

        latitude: latitudeSchema,

        longitude: longitudeSchema,
    }),
});

const listSchoolsSchema = z.object({
    query: z.object({
        latitude: z.coerce.number()
            .min(-90)
            .max(90),

        longitude: z.coerce.number()
            .min(-180)
            .max(180),
    }),
});

export {
    addSchoolSchema,
    listSchoolsSchema,
};