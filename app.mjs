import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import compression from "compression";
import hpp from "hpp";

import routes from "./routes/index.mjs";

import apiRateLimiter from "./middlewares/rateLimit.middleware.mjs";
import notFoundMiddleware from "./middlewares/notFound.middleware.mjs";
import errorMiddleware from "./middlewares/error.middleware.mjs";

const app = express();

app.use(
    helmet({
        contentSecurityPolicy:
            process.env.NODE_ENV === "production"
                ? {
                      directives: {
                          defaultSrc: ["'self'"],
                      },
                  }
                : false,
    })
);

const allowedOrigins = process.env.ALLOWED_ORIGINS
    ? process.env.ALLOWED_ORIGINS.split(",")
    : [];

app.use(
    cors({
        origin: (origin, callback) => {
            if (!origin || allowedOrigins.includes(origin)) {
                return callback(null, true);
            }

            return callback(new Error("CORS blocked"));
        },
        credentials: true,
    })
);

app.use(express.json({ limit: "200kb" }));
app.use(express.urlencoded({ extended: true, limit: "200kb" }));

app.use(compression());

app.use(hpp());

app.use(morgan("combined"));

app.use(apiRateLimiter);

app.use("/api", routes);

app.use(notFoundMiddleware);

app.use(errorMiddleware);

export default app;