import arcjet, { tokenBucket } from "@arcjet/next";

const aj = arcjet({
    key: process.env.ARCJET_KEY,
    defaultDeadline: 3000, //This is new line
    characteristics: ["userId"], // Track based on Clerk userId
    rules: [
        // Rate limiting specifically for collection creation
        tokenBucket({
            mode: "LIVE",
            refillRate: 2, // 10 collections
            interval: 3600, // per hour
            capacity: 10, // maximum burst capacity
        }),
    ],
});

export default aj;