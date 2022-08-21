import cookie from 'cookie';
import withAuth from 'src/middleware/withAuth';
import RefreshToken from 'src/models/RefreshToken';
import dbConnect from 'src/utils/dbConnect';


const logoutHandler = async (req, res) => {
  await dbConnect();
  const { method } = req;
  const { id } = req.body;

  switch (method) {
    case 'POST':
      try {
        //Xoá bỏ refreshToken tương ứng với user logout
        await RefreshToken.findByIdAndDelete(id);
        res.setHeader(
          'Set-Cookie',
          cookie.serialize('refreshToken', '', {
            maxAge: -1,
            path: '/',
          })
        );
        return res.status(200).json('Logged out!');
      } catch (err) {
        return res.status(400).json({ success: false, message: err });
      }
      break;
    default:
      return res.status(500).json({ success: false, message: 'Faild to connect to server' });
  }
};

export default withAuth(logoutHandler);
