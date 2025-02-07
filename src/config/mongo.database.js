import mongoose from "mongoose";

class MongoDatabase {
  constructor(){
    this._connect();
  }

  _connect() {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      console.log('MongoDB Database connection successful');
    })
    .catch((err) => {
      console.error('MongoDB Database connection error: ', err);
    }) 
  }

  static getInstance() {
    if (!MongoDatabase.instance) {
      MongoDatabase.instance = new MongoDatabase();
    }
    return MongoDatabase.instance;
  }
}

export default MongoDatabase.getInstance();