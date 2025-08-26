const mongoose = require("mongoose");

const sertifikatSchema = new mongoose.Schema({
  nama: { type: String, required: true },
  sertifikat: { type: String, required: true },
  mulai: { type: Date, required: true },
  selesai: { type: Date, required: true },
  keterangan: { type: String }
});

module.exports = mongoose.model("Sertifikat", sertifikatSchema);
