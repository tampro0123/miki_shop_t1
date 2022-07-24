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

const updateHandler = async (req, res) => {
  const { method } = req;
  const { id } = req.query;

  switch (method) {
    case 'PATCH' :
      const { name, image, price, description, category } = req.body;
      const options = {
        upload_preset: 'products',
        overwrite: true,
        public_id: id,
      };

      try {
        const result = await cloudinary.uploader.upload(image, options);
        const imageUrl = result.data.secure_url;

        await Products.findByIdAndUpdate(id, {
          _id: id,
          name,
          image: imageUrl,
          price,
          description,
          category,
        }, {new: true});
        return res.status(201).json({
          success: true,
          message: 'Product successfully created!',
        });
      } catch (err) {
        return res.status(500).json({
          success: false,
          message: 'Faild to create product!',
        });
      }
      break;
    default:
      return res.status(500).json('Faild to connect to server!');
  }
};

export default withAuth(withRoles(updateHandler, 'admin'));
