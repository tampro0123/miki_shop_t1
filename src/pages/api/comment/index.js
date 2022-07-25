import withAuth from 'src/middlewares/withAuth';
import Comment from 'src/models/Comment';
import dbConnect from 'src/utils/dbConnect.js';

const commentHandler = async (req, res) => {
  const { method } = req;
  const { userId, content, targetId } = req.body;

  switch (method) {
    case 'POST':
      try {
        await dbConnect();
        await Comment.findByIdAndUpdate(targetId, { isReplied: true });
        const result = await Comment.create({ user: userId, content, targetId });

        return res.status(201).json({
          sucess: true,
          message: 'Commented!',
        });
      } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
      }
      break;
    default:
      return res.status(500).json({
        sucess: false,
        message: 'Faild to post connect to server!',
      });
  }
};

export default withAuth(commentHandler);
