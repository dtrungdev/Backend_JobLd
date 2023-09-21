import express from "express";
import configViewEngine from "./config/viewEngine.js";
import initWebRoutes from "./routes/web.js";
import connection from "./config/connectDB.js";

const app = express();
const PORT = process.env.PORT || 8080;

//config viewEngine
configViewEngine(app);

// test connection DB
connection();

//init Web Routes
initWebRoutes(app);

app.listen(PORT, () => {
  console.log("Backend is running on the port =" + PORT);
});
