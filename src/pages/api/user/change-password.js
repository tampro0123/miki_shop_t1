const bcrypt = require("bcrypt");

import User from "src/models/User";
import dbConnect from 'src/utils/dbConnect.js';


const changePassWordHandler = async (req, res) => {
  await dbConnect();
  const { method } = req;
  const { userId, password, newPassword } = req.body;

  console.log(token);

  switch (method) {
    case "POST":
      try {
        const user = await User.findById(userId);
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
          return res.status(401).json({
            success: false,
            message: 'Current password is incorrect!',
          });
        }

        //Bcrypyt password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(newPassword, salt);

        await User.findByIdAndUpdate(userId, {
          password: hashPassword,
        })

        return res.status(200).json({ success: true, message: 'Your Password has been updated successfully!' })

      } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: error });
      }
      break;
    default:
      return res
        .status(500)
        .json({ success: true, message: "Method not allowed" });
  }
};

export default changePassWordHandler;
