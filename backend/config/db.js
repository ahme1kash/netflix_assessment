const mongoose = require("mongoose");
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        return `MongoDB Atlas Connection established successfully with database ${mongoose.connection.name} at port ${mongoose.connection.port}\n`.blue.bold.italic
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};
module.exports = connect;
