const mongoose = require("mongoose");

// Definisi schema untuk koleksi sertifikat
const SertifikatSchema = new mongoose.Schema({
  nama: { 
    type: String, 
    required: true // wajib diisi
  },
  sertifikat: { 
    type: String, 
    required: true // wajib diisi
  },
  mulai: { 
    type: Date, 
    required: true // tanggal mulai berlaku
  },
  selesai: { 
    type: Date, 
    required: true // tanggal selesai berlaku
  },
  keterangan: { 
    type: String // misal "5 Tahun"
  }
});

// Export model untuk digunakan di route
module.exports = mongoose.model("Sertifikat", SertifikatSchema);
