import HTTP_STATUS from "../constants/httpStatus.mjs";

import logger from "../utils/logger.mjs";

const errorMiddleware = (err, req, res, next) => {
    logger.error({
        message: err.message,
        stack: err.stack,
        method: req.method,
        url: req.originalUrl,
    });

    return res.status(
        err.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR
    ).json({
        success: false,

        message:
            process.env.NODE_ENV === "production"
                ? "Internal Server Error"
                : err.message,

        stack:
            process.env.NODE_ENV === "development"
                ? err.stack
                : undefined,
    });
};

export default errorMiddleware;