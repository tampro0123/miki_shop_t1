import withAuth from 'src/middleware/withAuth';
import Feedback from 'src/models/Feedback';
import Products from 'src/models/Products';
import dbConnect from 'src/utils/dbConnect.js';
import { cloudinary } from 'src/utils/cloudinary.js';

const mongoose = require('mongoose');

//Set file limit size
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '20mb', // Set desired value here
    },
  },
};


const FeedbackHandler = async (req, res) => {
  await dbConnect();
  const { method } = req;
  const { userId, content, rate, media, targetId } = req.body;

  switch (method) {
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

        //Khởi tạo 1 media Object global
        const _id = new mongoose.Types.ObjectId();
        const mediaInstance = {
          id: '',
          src: '',
          type: ''
        }

        //Kiểm tra xem có file media không sau đó upload theo phân loại nếu có
        if (media.src) {
          const path = media.src;
          const options = {
            upload_preset: 'feedbacks',
            resource_type: media.type,
            overwrite: true,
            public_id: _id
          }
          const result = await cloudinary.uploader.upload(path, options, (err, response) => {
            console.log(err, response);
          });

          mediaInstance.id = _id.toString(),
            mediaInstance.src = result.secure_url,
            mediaInstance.type = media.type
        }

        //Tạo feedback mới
        await Feedback.create({ _id, user: userId, content, rate, media: mediaInstance, targetId });

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
