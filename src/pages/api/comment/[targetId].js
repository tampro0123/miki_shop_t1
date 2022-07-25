import withAuth from 'src/middlewares/withAuth';
import Comment from 'src/models/Comment';
import dbConnect from 'src/utils/dbConnect.js';

const commentHandler = async (req, res) => {
  const { method } = req;
  const { targetId } = req.query;

  switch (method) {
    case 'GET':
      try {
        await dbConnect();
        const result = await Comment.find({ targetId }).sort({createdAt: -1}).populate('user');
        return res.status(200).json({
          sucess: true,
          result: result,
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
