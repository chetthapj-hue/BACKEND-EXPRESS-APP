import reteLimit from "express-rate-limit";

export const limiter = reteLimit({
    winddowMs: 15 * 60 * 1000, // 15 minuter
    max: 100, //Limit each IP address to 100 requests per 15 minuter
    standardHeaders: true,
    legacyHeaders:false,
});