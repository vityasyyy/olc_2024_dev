const mongoose = require('mongoose');

const mahasiswaSchema = new mongoose.Schema({
    NIM: String
});
  
module.exports = mongoose.model('Mahasiswa', mahasiswaSchema);
  

  