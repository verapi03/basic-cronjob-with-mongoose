if (process.env.NODE_ENV !== "production") {
    require('dotenv').config({path:__dirname+'/../.env'})
}

module.exports = {
    MONGO_URI:process.env.MONGO_URI
}