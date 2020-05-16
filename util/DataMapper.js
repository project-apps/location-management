const zipcodeSchema = require('../model/zipcodeSchema.js');
exports.zipcodeDataParser = (data, cb)=>{
    var zipcodeObj = new zipcodeSchema({     
      officename: data.officename,
      pincode: data.pincode,
      officeType: data.officeType,
      deliverystatus: data.Deliverystatus,
      divisionname: data.divisionname,
      regionname: data.regionname,
      circlename: data.circlename,
      taluk: data.Taluk,
      districtname: data.Districtname,
      statename: data.statename,
      telephone: data.Telephone,
      relatedSuboffice: data["Related Suboffice"],
      relatedHeadoffice: data["Related Headoffice"],
      longitude: data.longitude,
      latitude: data.latitude
    });
    return cb(null, zipcodeObj);
}