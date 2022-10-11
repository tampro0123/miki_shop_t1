import withAuth from 'src/middleware/withAuth';
import User from 'src/models/User';
import { cloudinary } from 'src/utils/cloudinary';
import dbConnect from 'src/utils/dbConnect.js';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb', // Set desired value here
    },
  },
};


const userHandler = async (req, res) => {
  await dbConnect();
  const { method } = req;
  const { id } = req.query;
  console.log(id)
  switch (method) {
    case "GET":
      try {
        const user = await User.findById(id);

        if (!user) {
          return res.status(404).json({ success: false, message: "User not found" });
        }

        return res.status(200).json({
          success: true,
          user: user
        });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: err });
      }
      break;
    case "PATCH":
      try {
        const { username, birthday, avatar, gender, phoneNumber } = req.body;
        const user = await User.findById(id);

        if (!user) {
          return res.status(404).json({ success: false, message: "User not found" });
        }

        if (!avatar) {
          await User.findByIdAndUpdate(
            id,
            {
              username,
              birthday,
              gender,
              phoneNumber,
            },
            { new: true }
          );

          return res.status(201).json({
            success: true,
            message: 'User updated',
          });
        }

        const options = {
          upload_preset: 'usersAvatar',
          public_id: user._id,
          overwrite: true,
        };
        const result = await cloudinary.uploader.upload(avatar, options);

        await User.findByIdAndUpdate(
          id,
          {
            username,
            birthday,
            avatar: result.secure_url,
            gender,
            phoneNumber
          },
          { new: true }
        );

        return res.status(200).json({
          success: true,
          message: "User profile successfully uploaded!"
        });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: err });
      }
      break;
    default:
      return res.status(500).json({ success: false, message: 'Faild to connect to server' });
  }
};

export default withAuth(userHandler);
