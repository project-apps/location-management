const mongoose = require('mongoose');

var zipcodeSchema = new mongoose.Schema({
  officename:{
    type: String
  },
  pincode:{
    type: String
  },

  officeType:{
    type: String
  },

  Deliverystatus:{
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

  Taluk:{
    type: String
  },

  Districtname:{
    type: String
  },

  statename:{
    type: String
  },

  Telephone:{
    type: String
  },

  Related_Suboffice:{
    type: String
  },

  Related_Headoffice:{
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
