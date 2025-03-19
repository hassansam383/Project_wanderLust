const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderLust"
main()
.then(()=>{
    console.log("Connected to DB!");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);

}

const initDB = async () => {
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();



//for docker
// const mongoose = require("mongoose");
// const initData = require("./data.js");
// const Listing = require("../models/listing.js");

// const MONGO_URL = process.env.MONGO_URL || "mongodb://mongo:27017/wanderLust"; // Use "mongo" as hostname inside Docker

// async function main() {
//   await mongoose.connect(MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
//   console.log("Connected to DB!");
// }

// const initDB = async () => {
//   try {
//     await main(); // Ensure DB connection before inserting data
//     await Listing.deleteMany({});
//     await Listing.insertMany(initData.data);
//     console.log("Data initialized successfully!");
//     await mongoose.connection.close(); // Close connection after initialization
//   } catch (err) {
//     console.error("Error initializing DB:", err);
//     process.exit(1);
//   }
// };

// initDB();
