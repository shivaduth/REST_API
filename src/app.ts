import express from "express";
import mongoose from "mongoose";
import candidateRoutes from "./routes/candidateRoutes";
import { json, urlencoded } from "body-parser";

const dbURI = 'mongodb://127.0.0.1:27017/CandidateDb';
const app = express();
const port: number = 3000;


app.use(json());

app.use(urlencoded({ extended: true }));

app.use("/", candidateRoutes);

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(500).json({ message: err.message });
  }
);



mongoose.connect(dbURI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });