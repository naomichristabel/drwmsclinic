const { MongoClient } = require('mongodb');

const connectionString = `mongodb+srv://${process.env.ATLAS_USERNAME}:${process.env.ATLAS_PASSWORD}@${process.env.ATLAS_URL}`

const client = new MongoClient(connectionString);

let dbConnection;

module.exports = {
    connectToServer: function (callback) {
      client.connect(function (err, db) {
        if (err || !db) {
          return callback(err);
        }
 
        dbConnection = db.db("drwmsvirtualclinic");
        console.log("Successfully connected to MongoDB.");
  
        return callback();
      });
    },
  
    getDb: function () {
      return dbConnection;
    },
  };