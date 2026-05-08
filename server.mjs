import dotenv from "dotenv";
dotenv.config();

import app from "./app.mjs";
import sequelize from "./configs/database.mjs";
import logger from "./utils/logger.mjs";

const PORT = process.env.PORT || 4000;

const startServer = async () => {
    try {
        await sequelize.authenticate();
        logger.info("MySQL connected successfully");

        await sequelize.sync();
        logger.info("MySQL synced successfully");

        const server = app.listen(PORT, () => {
            logger.info(`Server running on port ${PORT}`);
        });

        process.on("SIGINT", async () => {
            logger.info("SIGINT received");

            await sequelize.close();

            server.close(() => {
                logger.info("Server closed successfully");
                process.exit(0);
            });
        });

    } catch (err) {
        logger.error("Server startup failed", err);
        process.exit(1);
    }
};

startServer();