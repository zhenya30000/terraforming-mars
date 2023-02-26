const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost/terraforming-mars';

mongoose.connect(DB_URL);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

//, { useNewUrlParser: true, useUnifiedTopology: true }