import mongoose from 'mongoose';
import withAuth from 'src/middlewares/withAuth';
import withRoles from 'src/middlewares/withRoles';

import Products from 'src/models/Products';
import { cloudinary } from 'src/utils/cloudinary.js';
import dbConnect from 'src/utils/dbConnect.js';

dbConnect();

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
  const _id = new mongoose.Types.Object();

  switch (method) {
    case 'POST':
      try {
        const { name, image, description, price, category } = req.body;

        //cloudinary options
        const options = {
          upload_preset: 'products',
          public_id: _id,
          overwrite: true,
        };

        //upload image to cloudinary
        const result = await cloudinary.uploader.upload(image, options);
        const imageUrl = result.data.secure_url;

        //create new Product with image from cloudinary response
        const newProduct = await Products.create({
          _id,
          name,
          image: imageUrl,
          description,
          price,
          category,
        });
        await newProduct.save();
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
