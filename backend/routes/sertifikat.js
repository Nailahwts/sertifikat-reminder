const express = require("express");
const router = express.Router();
const Sertifikat = require("backend/models/Sertifikat");

// ===============================
// Simpan data baru (POST /api/sertifikat)
// ===============================
router.post("/", async (req, res) => {
  try {
    const { nama, sertifikat, mulai, lama } = req.body;

    // Hitung tanggal selesai otomatis
    const mulaiDate = new Date(mulai);
    const selesaiDate = new Date(mulaiDate);
    selesaiDate.setFullYear(selesaiDate.getFullYear() + lama);

    const newData = new Sertifikat({
      nama,
      sertifikat,
      mulai: mulaiDate,
      selesai: selesaiDate,
      keterangan: `${lama} Tahun`
    });

    await newData.save();
    res.json({ success: true, message: "Data berhasil disimpan", data: newData });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ===============================
// Ambil semua data (GET /api/sertifikat)
// ===============================
router.get("/", async (req, res) => {
  try {
    const data = await Sertifikat.find().sort({ selesai: 1 });
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
