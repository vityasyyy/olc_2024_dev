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
});

const olclassSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
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
  slug: String,
});

olclassSchema.pre("save", function (next) {
  if (this.title) {
    // Generate the slug when saving
    this.slug = this.title
      .split(" ")
      .map((word) => word.toLowerCase())
      .join("-");
  }
  next();
});

module.exports = mongoose.model("Olclass", olclassSchema);
