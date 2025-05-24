const express = require('express');
const router = express.Router();

let mahasiswaList = [
  { Name: 'Andi', Nim: '12345678', Course: ['Math', 'Physics'], Year: 2022 },
  { Name: 'Budi', Nim: '87654321', Course: ['Biology', 'Chemistry'], Year: 2023 },
  { Name: 'Citra', Nim: '13579246', Course: ['Economics', 'History'], Year: 2021 }
];

// GET all Mahasiswa
router.get('/', (req, res) => {
  res.json(mahasiswaList);
});

// GET Mahasiswa by ID
router.get('/:id', (req, res) => {
  const index = parseInt(req.params.id);
  if (index >= 0 && index < mahasiswaList.length) {
    res.json(mahasiswaList[index]);
  } else {
    res.status(404).send('Mahasiswa tidak ditemukan');
  }
});

// POST Mahasiswa
router.post('/', (req, res) => {
  const { Name, Nim, Course, Year } = req.body;
  if (!Name || !Nim || !Course || !Year) {
    return res.status(400).send('Data tidak lengkap');
  }
  mahasiswaList.push({ Name, Nim, Course, Year });
  res.status(201).send('Mahasiswa berhasil ditambahkan');
});

// DELETE Mahasiswa by ID
router.delete('/:id', (req, res) => {
  const index = parseInt(req.params.id);
  if (index >= 0 && index < mahasiswaList.length) {
    mahasiswaList.splice(index, 1);
    res.send('Mahasiswa berhasil dihapus');
  } else {
    res.status(404).send('Mahasiswa tidak ditemukan');
  }
});

module.exports = router;
