const app = require('./src/app.js');
const mongoose = require('mongoose');

function connectDB() {
  mongoose
    .connect(
      'mongodb+srv://siddy934_db_user:SosdZ9Lms6cJuctc@cluster0.l9jvvcg.mongodb.net/projectOne'
    )
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      console.log(err);
    });
}
connectDB();

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
