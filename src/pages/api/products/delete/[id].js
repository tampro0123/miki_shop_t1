import withAuth from 'src/middlewares/withAuth';
import withRoles from 'src/middlewares/withRoles';

import Products from 'src/models/Products';
import dbConnect from 'src/utils/dbConnect.js';

const ProductHandler = async (req, res) => {
  const { method } = req;
  const { id } = req.query;
  await dbConnect();

  switch (method) {
    case 'DELETE':
      try {
        const res = await Products.findByIdAndDelete(id);
        console.log(res);
        return res.status(201).json({
          success: true,
          message: 'Product deleted!',
        });
      } catch (error) {
        return res.status(500).json({
          success: false,
          message: error,
        });
      }
      break;
    default:
      res.status(500).json({ success: false, message: 'Faild to connect to server' });
      break;
  }
};

//protect roles
export default withAuth(withRoles(ProductHandler, 'admin'));
