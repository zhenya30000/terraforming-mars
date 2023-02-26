/* const mongoose = require('mongoose');
const DB_URI = process.env.DB_URI || 'mongodb://localhost/terraforming-mars';

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log('Connected to the database!');
});

process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('Disconnected from the database!');
  process.exit(0);
});

module.exports = db;
 */