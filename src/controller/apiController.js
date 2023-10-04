import loginRegisterService from "../services/loginRegisterService";

const handleRegister = async (req, res) => {
  try {
    //req.body : fullname, email, password,
    if (!req.body.fullname || !req.body.email || !req.body.password) {
      return res.status(200).json({
        EM: "Missing required parameters", //error message
        EC: "1", //error code
        DT: "", //data
      });
    }
    if (req.body.password && req.body.password.lenght < 4) {
      return res.status(200).json({
        EM: "Your password must have more than 3 letters", //error message
        EC: "1", //error code
        DT: "", //data
      });
    }
    //service: create user
    let data = await loginRegisterService.registerNewUser(req.body);

    return res.status(200).json({
      EM: data.EM, //error message
      EC: data.EC, //error code
      DT: "", //data
    });
  } catch (error) {
    return res.status(500).json({
      EM: "error from server", //error message
      EC: "-1", //error code
      DT: "", //data
    });
  }
};

module.exports = {
  handleRegister,
};
