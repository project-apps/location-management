const dbconfig = require('../config/dbconfig.js'),
  logger = require('../util/log4js.js');
  dataMapper = require('../util/DataMapper.js');
  const ZIPCODE_TABLE = 'zipcode';

exports.findAll = (req_param, cb)=>{
  dbconfig.getCollection(ZIPCODE_TABLE, (err, collection)=>{
    collection.find(req_param).toArray((err, result)=>{
       if(err){
         logger.error("Unable to fetch data.");
         return cb(err);
       }
       if(result){
         var data = [];
         for(i in result){
         dataMapper.zipcodeDataParser(result[i], (err, zipcodeObj)=>{
             data.push(zipcodeObj);
          });
         }
       return cb(null, data);
       }
     });
  });
}

exports.getZipcodeObj = (req_param, cb)=>{
  const zipcodeObj = new zipcodeSchema({
    officename: 'Test data',
    pincode: '000000'
  });
  return cb(null, zipcodeObj);
}
exports.findOne = (req_param, cb)=>{
  dbconfig.getCollection(ZIPCODE_TABLE, (err, collection)=>{
    collection.findOne(req_param, (err, result)=>{
      if(err){
        logger.error("Unable to fetch data.");
        return cb(err);
      }
      if(result){
        let data = [];
        dataMapper.zipcodeDataParser(result, (err, zipcodeObj)=>{
          data.push(zipcodeObj);
        });
        return cb(err, data);  
      }else {
        return cb(null, []);
      }
    });
  });
}