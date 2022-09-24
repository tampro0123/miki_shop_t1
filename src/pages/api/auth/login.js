import bcrypt from 'bcrypt';
import { serialize } from 'cookie';
import RefreshToken from 'src/models/RefreshToken';
import User from 'src/models/User';
import dbConnect from 'src/utils/dbConnect.js';
import { generateAccessToken, generateRefreshToken } from 'src/utils/generateToken';

async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case 'POST':
      const { email, password } = req.body;
      try {
        await dbConnect();
        const user = await User.findOne({ email }).lean();
        if (!user)
          return res.status(400).json({
            success: false,
            message: 'Người dùng không tồn tại trên hệ thống',
            userNameSucc: false,
          });
        // nếu email user đã tồn tại trả về lỗi 400 và message
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
          return res.status(401).json({
            message: 'Mật khẩu không đúng',
            success: false,
            passwordSucc: false,
          });
        }
        if (user && validPassword) {
          const { password, ...userInfo } = user;
          //Tạo refreshToken tương ứng
          const accessToken = generateAccessToken(user);
          const refreshToken = generateRefreshToken(user);
          await RefreshToken.create({
            user: user._id,
            refreshToken,
          });

          res.setHeader(
            'Set-Cookie',
            serialize('refreshToken', refreshToken, {
              httpOnly: true,
              secure: false,
              path: '/',
              sameSite: 'strict',
            })
          );

          return res.status(200).json({
            accessToken: accessToken,
            user: userInfo,
            success: true,
            message: 'Đăng nhập thành công',
          });
        }
      } catch (error) {
        console.log(error);
        return res.status(500).json(error);
      }
      break;
    default:
      return res.status(500).json({ success: false, message: 'Faild to connect to server' });
  }
}
export default handler;
