import withAuth from 'src/middlewares/withAuth';
import withRoles from 'src/middlewares/withRoles';
import Products from 'src/models/Products';
import { cloudinary } from 'src/utils/cloudinary.js';
import dbConnect from 'src/utils/dbConnect.js';

const mongoose = require('mongoose');

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb', // Set desired value here
    },
  },
};

const uploadHandler = async (req, res) => {
  await dbConnect();
  const { method } = req;
  const { id } = req.query;

  switch (method) {
    case 'PATCH':
      const { name, image, subImage, description, discount, category, storage } = req.body;
      const currentProduct = await Products.findById(id);

      try {
        //Kiểm tra xem có thay đổi image hay không
        if (!image && subImage.length < 1) {
          await Products.findByIdAndUpdate(
            id,
            {
              name,
              description,
              category,
              discount,
              storage,
            },
            { new: true }
          );

          return res.status(201).json({
            success: true,
            message: 'Product updated',
          });
        }

        //Khởi tạo imageArray global
        const imageArray = currentProduct.images;

        //Cập nhật ảnh chính mới
        if (image) {
          const options = {
            upload_preset: 'products',
            overwrite: true,
            public_id: id,
          };
          const result = await cloudinary.uploader.upload(image, options);
          imageArray.shift();
          imageArray.unshift({ id: id, src: result.secure_url });
        }

        //Cập nhật ảnh phụ mới
        if (subImage.length > 0) {
          if (imageArray.length - 1 > subImage.length) {
            imageArray.splice(1, imageArray.length - 1);
          }
          for (const element of subImage) {
            const _id = new mongoose.Types.ObjectId();
            console.log(imageArray);

            const options = {
              upload_preset: 'products',
              overwrite: true,
              public_id: imageArray[subImage.indexOf(element) + 1]?.id || _id.toString(),
            };
            const result = await cloudinary.uploader.upload(element, options);
            imageArray.splice(subImage.indexOf(element) + 1, 1, {
              id: imageArray[subImage.indexOf(element) + 1]?.id || _id.toString(),
              src: result.secure_url,
            });
          }
        }

        //Cập nhật product mới
        await Products.findByIdAndUpdate(
          id,
          {
            name,
            images: imageArray,
            description,
            discount,
            category,
            storage,
          },
          { new: true }
        );

        return res.status(201).json({
          success: true,
          message: 'Product updated',
        });
      } catch (err) {
        console.log(err);
        return res.status(500).json({
          success: false,
          message: 'Faild to create product',
        });
      }
      break;
    default:
      return res.status(500).json({ success: false, message: 'Faild to connect to server' });
  }
};

export default uploadHandler;
