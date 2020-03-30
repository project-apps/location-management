const logger = require('../util/log4js.js');
const MongoClient = require('mongodb').MongoClient;
const PropertiesReader = require('properties-reader');

var prop = PropertiesReader('./resource.properties');
var dbname = prop.get('db.name');
var dbusername = prop.get('db.username');
var dbpassword = prop.get('db.password');
var dburl = prop.get('db.url');
var dbConnection;
exports.initialize = ()=>{
    return new Promise((resolve, reject)=>{
      //const uri = "mongodb+srv://"+dbusername+":"+dbpassword+"@cluster-1-jbicd.mongodb.net/test?retryWrites=true&w=majority";
      const client = new MongoClient(dburl, { useNewUrlParser: true, useUnifiedTopology: true });
      client.connect(err => {
        if(err){
          logger.error("DB Connnection failed!")
          throw err;
        }
        dbConnection = client.db(dbname);

        /* const collection = client.db(dbname).collection("zipcode");
        logger.info("DB Connnection success.")
        collection.findOne({}, function(err, result){
          if(err){
            logger.error("Unable to fetch data.");
            throw err;
          }
          if(result){
            logger.info(result);
          }
        }); */
        //logger.info("collections: "+collection.find({pincode:122001}))
        //client.close();
      });
    });
}
exports.getCollection = (collName, cb)=>{
  try{
    var collection = dbConnection.collection(collName);
    return cb(null, collection);
  }catch(err){
      return cb(err);
  };
}
