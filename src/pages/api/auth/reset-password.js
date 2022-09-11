const bcrypt = require("bcrypt");

import PasswordToken from "src/models/PasswordToken";
import User from "src/models/User";
import dbConnect from 'src/utils/dbConnect.js';


const resetPassWordHandler = async (req, res) => {
  await dbConnect();
  const { method } = req;
  const { token } = req.query;
  const { password: newPassword } = req.body;

  console.log(token);

  switch (method) {
    case "POST":
      try {
        const tokenChecker = await PasswordToken.findOne({ token });
        const { email, createdAt } = tokenChecker;
        let date = new Date();
        if (!tokenChecker || Date.parse(createdAt) + 300000 < date.gettime()) {
          return res.status(404).json({ success: false, message: "Link is not valid" });
        }

        //Bcrypyt password
        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(newPassword, salt);

        await User.findOneAndUpdate({ email: tokenChecker.email }, {
          password: password,
        })

        await PasswordToken.deleteMany({ email })

        return res.status(200).json({ success: true, message: 'Your Password has been updated successfully!' })

      } catch (e) {
        console.log(e);
        return res.status(500).json({ success: false, message: e });
      }
      break;
    default:
      return res
        .status(500)
        .json({ success: true, message: "Method not allowed" });
  }
};

export default resetPassWordHandler;
