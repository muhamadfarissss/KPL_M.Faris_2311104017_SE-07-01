const express = require('express');
const router = express.Router();

let mahasiswaList = [
  { Nama: 'Nama Kamu', Nim: '23111040' },
  { Nama: 'Teman A', Nim: '23111040' },
  { Nama: 'Teman B', Nim: '23111040' }
];

// GET semua mahasiswa
router.get('/', (req, res) => {
  res.json(mahasiswaList);
});

// GET mahasiswa by index
router.get('/:index', (req, res) => {
  const i = parseInt(req.params.index);
  if (i >= 0 && i < mahasiswaList.length) {
    res.json(mahasiswaList[i]);
  } else {
    res.status(404).send('Mahasiswa tidak ditemukan');
  }
});

// POST mahasiswa baru
router.post('/', (req, res) => {
  const { Nama, Nim } = req.body;
  if (!Nama || !Nim) {
    return res.status(400).send('Data tidak lengkap');
  }
  mahasiswaList.push({ Nama, Nim });
  res.status(201).send('Mahasiswa berhasil ditambahkan');
});

// DELETE mahasiswa by index
router.delete('/:index', (req, res) => {
  const i = parseInt(req.params.index);
  if (i >= 0 && i < mahasiswaList.length) {
    mahasiswaList.splice(i, 1);
    res.send('Mahasiswa berhasil dihapus');
  } else {
    res.status(404).send('Mahasiswa tidak ditemukan');
  }
});

module.exports = router;
