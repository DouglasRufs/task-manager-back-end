// importação de biblioteca
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const TaskRouter = require("./src/routes/task.routes");
const cors = require("cors");

// importação de arquivo
const connectToDatabase = require("./src/database/mongoose.database");
const TaskModel = require("./src/models/task.model");
const req = require("express/lib/request");
const res = require("express/lib/response");
const { update } = require("./src/models/task.model");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

connectToDatabase();

app.use("/tasks", TaskRouter);

app.listen(8000, () => console.log("listening on port 8000!"));
