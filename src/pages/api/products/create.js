import withAuth from 'src/middlewares/withAuth';
import withRoles from 'src/middlewares/withRoles';

import Products from 'src/models/Products';
import { cloudinary } from 'src/utils/cloudinary.js';
import dbConnect from 'src/utils/dbConnect.js';

const mongoose = require('mongoose');

//Set file limit size
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb', // Set desired value here
    },
  },
};

const ProductHandler = async (req, res) => {
  const { method } = req;
  await dbConnect();

  switch (method) {
    case 'POST':
      try {
        const { name, image, subImage, description, category, storage } = req.body;
        const _id = new mongoose.Types.ObjectId();
        const imageArray = [];

        //cloudinary options
        const options = {
          upload_preset: 'products',
          public_id: _id,
          overwrite: true,
        };

        //upload image to cloudinary
        if (subImage.length > 0) {
          for (const element of subImage) {
            const _id = new mongoose.Types.ObjectId();
            const options = {
              upload_preset: 'products',
              overwrite: true,
              public_id: _id,
            };
            const result = await cloudinary.uploader.upload(element, options);
            imageArray.push({ id: _id, src: result.secure_url });
          }
        }
        const result = await cloudinary.uploader.upload(image, options);
        imageArray.unshift({ id: _id, src: result.secure_url });

        //create new Product with image from cloudinary response
        await Products.create({
          _id,
          name,
          images: imageArray,
          description,
          category,
          storage
        });

        return res.status(201).json({
          success: true,
          message: 'Product created successfully!',
        });
      } catch (error) {
        return res.status(500).json({
          success: false,
          message: error,
        });
      }

    default:
      res.status(500).json({ success: false, message: 'Faild to connect to server' });
      break;
  }
};

//protect roles
export default withAuth(withRoles(ProductHandler, 'admin'));
