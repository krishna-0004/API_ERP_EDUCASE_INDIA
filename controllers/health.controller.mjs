import HTTP_STATUS from "../constants/httpStatus.mjs";
import MESSAGES from "../constants/messages.mjs";

const healthCheck = (req, res) => {
    return res.status(HTTP_STATUS.OK).json({
        success: true,
        message: MESSAGES.SERVER_RUNNING,
        environment: process.env.NODE_ENV,
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
    });
};

export default healthCheck;