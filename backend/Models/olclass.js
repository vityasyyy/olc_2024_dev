const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
  deskripsiSingkat: String,
  kurikulum: String,
  deskripsiLengkap: String,
  prerequisites: String,
  url: String,
});

const penugasanSchema = new Schema({
  deadline: Date,
  linkTugas: String,
})
const olclassSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  divisi: {
    type: String,
    required: true,
  },
  deskripsiKelas: String,
  enrolledBy: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  slots: {
    type: Number,
    default: 40,
  },
  mentor: mentorSchema,
  sesi: [sessionSchema],
  slug: {
    type: String,
    unique: true
  },
  waktuStart: {
    type: Date,
    default: Date.now,
  },
  waktuEnd:{
    type: Date,
    default: Date.now,
  },
  penugasan: penugasanSchema,
  groupWA: String,
});

module.exports = mongoose.model("Olclass", olclassSchema);
