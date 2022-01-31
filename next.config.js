require ("dotenv").config();

module.exports = {
    reactStrictMode: true,
    env: {
        GOOGLE_ANALYTICS: process.env.GOOGLE_ANALYTICS,
    },
}