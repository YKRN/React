module.exports = {
    server: process.env.APP_SERVER,
    authentication: {
        type: "default",
        options: {
            userName: process.env.APP_USERNAME,
            password: process.env.APP_PASSWORD
        }
    },
    options: {
        port: process.env.APP_PORT,
        database: process.env.APP_DATABASE
    }
}