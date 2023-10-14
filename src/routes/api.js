import express from "express";
import apiController from "../controller/apiController";
import jobController from "../controller/jobController";

const router = express.Router();

const initApiRoutes = (app) => {
  router.post("/register", apiController.handleRegister);
  router.post("/login", apiController.handleLogin);

  router.post("/job/create", jobController.CreateFn);
  router.get("/job/read", jobController.ReadFn);
  router.put("/job/update"), jobController.UpdateFn;
  router.delete("/job/delete", jobController.DeleteFn);
  return app.use("/api/v1/", router);
};

export default initApiRoutes;
