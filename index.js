const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const activeAttendanceSessions = {};

// Importar rutas
app.use('/api', require('./routes/students'));
app.use('/api', require('./routes/campus'));
app.use('/api', require('./routes/dailyRoll'));
app.use('/api', require('./routes/permanentRoll'));
app.use('/api', require('./routes/teachers'));
app.use('/api', require('./routes/auth'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
