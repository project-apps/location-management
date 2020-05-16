const mongoose = require('mongoose');

const zipcodeSchema = new mongoose.Schema({
  officename:{
    type: String
  },
  pincode:{
    type: String
  },

  officeType:{
    type: String
  },

  deliverystatus:{
    type: String
  },

  divisionname:{
    type: String
  },

  regionname:{
    type: String
  },

  circlename:{
    type: String
  },

  taluk:{
    type: String
  },

  districtname:{
    type: String
  },

  statename:{
    type: String
  },

  Telephone:{
    type: String
  },

  relatedSuboffice:{
    type: String
  },

  relatedHeadoffice:{
    type: String
  },

  longitude:{
    type: String
  },

  latitude:{
    type: String
  },
});
module.exports = mongoose.model('Zipcode', zipcodeSchema)
