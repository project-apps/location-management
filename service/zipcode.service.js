const dbconfig = require('../config/dbconfig.js'),
  logger = require('../util/log4js.js');
  const ZIPCODE_TABLE = 'zipcode';
exports.findOne = (req_param, cb)=>{
  dbconfig.getCollection(ZIPCODE_TABLE, (err, collection)=>{
    collection.findOne(req_param, (err, result)=>{
      if(err){
        logger.error("Unable to fetch data.");
        return cb(err);
      }
      if(result){
      return cb(null, result);
      }
    });
  });
}
exports.findAll = (req_param, cb)=>{
  dbconfig.getCollection(ZIPCODE_TABLE, (err, collection)=>{
    collection.find(req_param).toArray((err, result)=>{
       if(err){
         logger.error("Unable to fetch data.");
         return cb(err);
       }
       if(result){
       return cb(null, result);
       }
     });
  });
}
