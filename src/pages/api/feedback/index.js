import withAuth from 'src/middlewares/withAuth';
import Feedback from 'src/models/Feedback';
import Products from 'src/models/Products';
import dbConnect from 'src/utils/dbConnect.js';

const FeedbackHandler = async (req, res) => {
  const { method } = req;
  const { userId, content, rate, targetId } = req.body;
  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        return res.status(200).json({
          success: false,
          message: 'Please insert query string!',
        });
      } catch (err) {
        return res.status(500).json({
          success: false,
          error: err,
        });
      }
    case 'POST':
      try {
        //Check user đã đánh giá hay chưa
        const feedbacks = await Feedback.find({ targetId, user: userId });
        if (feedbacks.length > 0) {
          return res.status(409).json({
            success: false,
            message: 'Bạn đã đánh giá sản phẩm này rồi!',
          });
        }
        //Tạo feedback mới
        await Feedback.create({ user: userId, content, rate, targetId });

        //Tính toán và cập nhật lại rate/count
        const rating = await Feedback.aggregate([
          {
            $group: { _id: '$targetId', avg: { $avg: '$rate' }, count: { $sum: 1 } },
          },
        ]);
        await Products.findByIdAndUpdate(
          targetId,
          {
            rating: {
              rate: rating[0].avg.toFixed(1).toString(),
              count: rating[0].count,
            },
          },
          { new: true }
        );
        //Trả response
        return res.status(200).json({
          success: true,
          message: 'Bạn đã đánh giá thành công!',
        });
      } catch (error) {
        return res.status(500).json({
          success: false,
          error: error,
        });
      }
      break;
    default:
      return res.status(500).json({
        success: false,
        message: 'Faild to connect to server!',
      });
  }
};

export default withAuth(FeedbackHandler);
