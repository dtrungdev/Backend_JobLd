import express from "express";
import apiController from "../controller/apiController";
import jobController from "../controller/jobController";
import addressController from "../controller/AddressController";
import companyController from "../controller/companyController";
import experienceController from "../controller/experienceController";
import salaryController from "../controller/salaryController";

const router = express.Router();

const initApiRoutes = (app) => {
  router.post("/register", apiController.handleRegister);
  router.post("/login", apiController.handleLogin);

  ///job
  router.post("/job/create", jobController.CreateFn);

  ////company

  router.get("/company/read", companyController.FindCompany);
  //////////

  router.get("/experience/read", experienceController.FindExperience);

  //////

  router.get("/salary/read", salaryController.FindSalary);
  ///////
  router.get("/job/read", jobController.ReadFn);
  router.get("/job/position/read", jobController.FindJobPosition);
  router.get("/find-job", jobController.FindJob);
  router.get("/find-job-in-province", jobController.FindJobInProvince);
  router.get("/find-job-with-position", jobController.FindJobWithPosition);
  router.get(
    "/find-job-with-position-in-province",
    jobController.FindJobWithPositionInProvince
  );

  ////////

  router.put("/job/update"), jobController.UpdateFn;
  router.delete("/job/delete", jobController.DeleteFn);

  ///address
  router.get("/address/read", addressController.ReadAllProvince);
  return app.use("/api/v1/", router);
};

export default initApiRoutes;
