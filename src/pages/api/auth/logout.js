import RefreshToken from 'src/models/RefreshToken';
import dbConnect from "src/utils/dbConnect";
import cookie from "cookie";

dbConnect();

const logoutHandler = async (req, res) => {
  const { method } = req;

  switch (method) {
    case "POST":
      try {
        res.setHeader(
          "Set-Cookie",
          cookie.serialize("refreshToken", "", {
            maxAge: -1,
            path: "/",
          })
        );
        await RefreshToken.remove({});
        return res.status(200).json("Logged out!");
      } catch (err) {
        return res.status(400).json({ success: false, message: err });
      }
      break;
    default:
      res.status(500).json({ success: false });
      break;
  }
};

export default logoutHandler;
