import HTTP_STATUS from "../constants/httpStatus.mjs";

const notFoundMiddleware = (req, res) => {
    return res.status(HTTP_STATUS.NOT_FOUND).json({
        success: false,
        message: `Route not found - ${req.originalUrl}`,
    });
};

export default notFoundMiddleware;