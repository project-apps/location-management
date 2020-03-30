const zipcodeSchema = require('../model/zipcode.schema.js'),
  zipcodeService = require('../service/zipcode.service.js'),
  logger = require('../util/log4js.js');
exports.findOne = (req, res) => {
  let zipcode = req.params.pincode;
  logger.debug('Pincode request for:'+zipcode);
  let req_param = {'pincode': zipcode};
  zipcodeService.findOne(req_param, (err, zipcodeDetails)=>{
    new Promise((resolve, reject)=>{
      if(err){
        reject(err);
      }else if(Object.keys(zipcodeDetails).length<1) {
          logger.debug('No data found for Zipcode:'+zipcode);
      }else{
          logger.debug('Data found for Zipcode:'+zipcode+' as below:\n'+ JSON.stringify(zipcodeDetails));
      }
      resolve(zipcodeDetails);
    }).then(value=>{
      res.status(200);
      res.send(value);
    }).catch(err=>{
      res.status(404);
      res.send('Error while fetching data.');
      logger.error(`Error while fetching data:\n${err.stack || err}`);
    });
  });
};
exports.findAll = (req, res) => {
  let zipcode = req.params.pincode;
  logger.debug('Pincode request for:'+zipcode);
  let req_param = {'pincode': zipcode};
  zipcodeService.findAll(req_param, (err, zipcodeDetails)=>{
    new Promise((resolve, reject)=>{
      if(err){
        reject(err);
      }else if(Object.keys(zipcodeDetails).length<1) {
          logger.debug('No data found for Zipcode:'+zipcode);
      }else{
          logger.debug('Data found for Zipcode:'+zipcode+' as below:\n'+ JSON.stringify(zipcodeDetails));
      }
      resolve(zipcodeDetails);
    }).then(value=>{
      res.status(200);
      res.send(value);
    }).catch(err=>{
      res.status(404);
      res.send('Error while fetching data.');
      logger.error(`Error while fetching data:\n${err.stack || err}`);
    });
  });
};
