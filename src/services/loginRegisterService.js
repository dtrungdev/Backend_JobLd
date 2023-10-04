import db from "../models";
import bcrypt from "bcrypt";

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const hashUserPassword = (userPassword) => {
  let hashPassword = bcrypt.hashSync(userPassword, salt);
  return hashPassword;
};

const checkFullnameExist = async (userFullname) => {
  let user = await db.User.findOne({
    where: { fullname: userFullname },
  });

  if (user) {
    return true;
  }
  return false;
};

const checkEmailExist = async (userEmail) => {
  let user = await db.User.findOne({
    where: { email: userEmail },
  });

  if (user) {
    return true;
  }
  return false;
};

const registerNewUser = async (rawUserData) => {
  try {
    //check email/fullname are ready exist
    let isFullnameExist = await checkFullnameExist(rawUserData.fullname);
    if (isFullnameExist === true) {
      return {
        EM: "The fullname is already exist",
        EC: 1,
      };
    }
    let isEmailExist = await checkEmailExist(rawUserData.email);
    if (isEmailExist === true) {
      return {
        EM: "The email is already exist",
        EC: 1,
      };
    }
    //hash user password
    let hashPassword = await hashUserPassword(rawUserData.password);
    //create new user
    await db.User.create({
      fullname: rawUserData.fullname,
      email: rawUserData.email,
      password: hashPassword,
    });

    return {
      EM: "A user is created successfully!",
      EC: 0,
    };
  } catch (error) {
    return {
      EM: "Something wrong with service...",
      EC: -1,
    };
  }
};
module.exports = {
  registerNewUser,
};
