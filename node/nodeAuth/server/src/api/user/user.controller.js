const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("./user.model");
const { setError } = require("../../helpers/error/handle.error");

const register = async (req, res, next) => {
  try {
    const newUser = new User(req.body);
    const userDuplicate = await User.findOne({ userName: newUser.userName });

    if (userDuplicate) return next("User alredy exits");

    const newUserDB = newUser.save();
    return res.json({
      status: 201,
      message: "user registered",
      data: newUserDB,
    });
  } catch (error) {
    return next(setError(500, "User registered fail"));
  }
};

const login = async (req, res, next) => {
  try {
    const userInfo = await User.findOne({ userName: req.body.userName });
    if (bcrypt.compareSync(req.body.password, userInfo.password)) {
      userInfo.password = null;
      const token = jwt.sign(
        {
          id: userInfo._id,
          userName: userInfo.userName,
        },
        req.app.get("secretKey"),
        { expiresIn: "1h" }
      );
      return res.json({
        status: 200,
        message: "Welcome user",
        user: userInfo,
        token: token,
      });
    } else {
      return next("Incorrect password");
    }
  } catch (error) {
    return next(setError(500, "User login fail"));
  }
};

module.exports = { register, login };
