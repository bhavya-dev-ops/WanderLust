if (process.env.NODE_ENV != "production") {
  require("dotenv").config({ path: "../.env" });
}

console.log("MAP_TOKEN value:", process.env.MAP_TOKEN); // debug line - hata dena baad me

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");

const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
    return initDB();
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});

  for (let obj of initData.data) {
    const geoData = await geocodingClient
      .forwardGeocode({
        query: `${obj.location}, ${obj.country}`,
        limit: 1,
      })
      .send();

    obj.geometry = geoData.body.features[0].geometry;
    obj.owner = "6ac0d643029a668915f9b7d0";
  }

  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};