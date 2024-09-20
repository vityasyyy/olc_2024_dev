const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const imageSchema = new Schema({
  url: String,
  filename: String,
});

imageSchema.virtual("thumbnail").get(function () {
  return this.url.replace("/upload", "/upload/w_200");
});

const mentorSchema = new Schema({
  nama: String,
  fotoMentor: imageSchema,
  deskripsi: String,
});
const sessionSchema = new Schema({
  judulSesi: String,
  waktu: Date,
  platform: String,
  deskripsi: String,
});


const olconSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    email: [{
        type: String,
        unique: true,
        match: [emailRegex, 'Please fill a valid email address']
    }],
    slots: {
        type: Number,
        default: 40
    },
    mentor: mentorSchema,
    sesi: [sessionSchema],
    slug: {
      type: String,
      unique: true
    }
});

module.exports = mongoose.model('Olcon', olconSchema);