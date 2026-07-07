// // server start karna
// // db connect karna
require("dotenv").config();

const app = require('./src/app.js');
const connectDB = require('./config/database.js');


connectDB();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
