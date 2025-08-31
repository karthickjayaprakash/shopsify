const mongoose = require('mongoose');
const dbUrl = process.env.DB_URL;
console.log("db ul " , dbUrl);

const connectDatabase = () => {
    mongoose.connect(dbUrl).then((con) => {
        console.log('MongoDB connected to host: '+con.connection.host)
    })
};

module.exports = connectDatabase;