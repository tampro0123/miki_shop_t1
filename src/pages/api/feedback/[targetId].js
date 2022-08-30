import Feedback from 'src/models/Feedback';
import dbConnect from 'src/utils/dbConnect.js';

const feedbackHandler = async (req, res) => {
  const { method } = req;
  const { targetId } = req.query;

  switch (method) {
    case 'GET':
      try {
        await dbConnect();
        const feedbacks = await Feedback.find({ targetId }).sort({ createdAt: -1 }).populate('user');
        return res.status(200).json({
          sucess: true,
          feedbacks: feedbacks,
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

export default feedbackHandler;
