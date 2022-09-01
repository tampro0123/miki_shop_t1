import User from 'src/models/User';
import dbConnect from 'src/utils/dbConnect.js';
import withAuth from 'src/middleware/withAuth';


const userHandler = async (req, res) => {
  await dbConnect();
  const { method } = req;
  const { id } = req.query;

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
    default:
      return res.status(500).json({ success: false, message: 'Faild to connect to server' });
  }
};

export default withAuth(userHandler);
