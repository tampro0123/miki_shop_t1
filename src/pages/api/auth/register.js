import dbConnect from 'src/utils/dbConnect.js';
import User from 'src/models/User';
import bcrypt from 'bcrypt';

async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case 'POST':
      const { email, password, username, birthday } = req.body;
      console.log(email, password, username, birthday);
      try {
        await dbConnect();
        const currentUser = await User.findOne({ email }).lean();
        if (currentUser) return res.status(409).json({ success: false, message: 'Email đã tồn tại', errEmail:false });
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);
        const newUser = new User({ email, password: passwordHash, username, birthday });
        const user = await newUser.save();

        return res.status(201).json({ message: 'Đăng ký thành công', success: true });
      } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: 'Request Lỗi!' });
      }
      break;
    default:
      return res.status(500).json('khong co request nay');
  }
}
export default handler;
