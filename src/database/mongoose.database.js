const mongoose = require("mongoose");

const connecToDatabase = async () => {
    await mongoose.connect(
        `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}
        @fsctaskmanagercluster.2cnex.mongodb.net/myFirstDatabase?
        retryWrites=true&w=majority`,
        (erro) =>{
            if(error){
                return console.log(`could not connect to MongoDB: ${error.message}`)
            }
        }
    );
};

module.exports = connecToDatabase;
