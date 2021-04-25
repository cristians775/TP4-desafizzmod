import mongoose from "mongoose";
class DataBase {
  connect = () => {
    mongoose.connect(
      process.env.BBDD,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      },
      (err) => {}
    );
  };
}

export default new DataBase();
