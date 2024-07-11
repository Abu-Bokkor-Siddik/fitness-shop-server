import app from "./app";
import mongoose from "mongoose";
import config from "./app/config";

main().catch((err) => console.log(err));
console.log(config.port, "hello");
console.log(process.env.PORT, "port");
async function main() {
  try {
    await mongoose.connect("mongodb+srv://fitness_shop:fiX6pWLjYDkflJAN@cluster0.kkqbu90.mongodb.net/fitnessShop?retryWrites=true&w=majority&appName=Cluster0");
  console.log('connect')

  } catch (error) {
    console.log(error)
  }
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`);
});
