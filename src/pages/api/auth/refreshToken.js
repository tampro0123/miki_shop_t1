import RefreshToken from 'src/models/RefreshToken';
import dbConnect from 'src/utils/dbConnect';
import jwt from 'jsonwebtoken';
import { generateAccessToken, generateRefreshToken } from 'src/utils/generateToken';
import cookie from 'cookie';


const refreshTokenHandler = async (req, res) => {
  await dbConnect();
  const { method } = req;

  switch (method) {
    case 'POST':
      try {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) {
          return res.status(401).json('You are not authenticated!');
        }
        const exist = await RefreshToken.findOne({ refreshToken });

        if (!exist) {
          return res.status(403).json('Refresh Token is not valid!');
        }
        //Crate new accessToken anh new refreshToken
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, async (err, user) => {
          if (err) {
            return res.status(403).json('Token is not valid!');
          }
          const newAccessToken = generateAccessToken(user);
          const newRefreshToken = generateRefreshToken(user);

          await RefreshToken.findOneAndDelete({ refreshToken });
          await RefreshToken.create({ userId: user._id, refreshToken: newRefreshToken });
          res.setHeader(
            'Set-Cookie',
            cookie.serialize('refreshToken', newRefreshToken, {
              httpOnly: true,
              secure: false, //True khi deloy
              path: '/',
              sameSite: 'strict',
            })
          );
          return res.status(200).json({ accessToken: newAccessToken });
        });
      } catch (err) {
        return res.status(500).json({
          err: err,
          message: 'Error at RefreshToken',
        });
      }
      break;
    default:
      return res.status(500).json('Faild to connect to server');
  }
};

export default refreshTokenHandler;
