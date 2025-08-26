const express = require("express");
const router = express.Router();
const Sertifikat = require("/models/Sertifikat");

// GET all
router.get("/", async (req, res) => {
  try {
    const data = await Sertifikat.find().sort({ selesai: 1 });
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST create
router.post("/", async (req, res) => {
  try {
    const { nama, sertifikat, mulai, lama } = req.body;
    const selesai = new Date(new Date(mulai).setFullYear(new Date(mulai).getFullYear() + lama));
    const keterangan = `${lama} Tahun`;

    const newSertifikat = new Sertifikat({ nama, sertifikat, mulai, selesai, keterangan });
    await newSertifikat.save();
    res.json({ success: true, data: newSertifikat });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
