const express = require('express');
const cors = require('cors');
const mahasiswaRoutes = require('./mahasiswa');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use('/api/mahasiswa', mahasiswaRoutes);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
