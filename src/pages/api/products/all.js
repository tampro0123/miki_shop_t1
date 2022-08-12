import Products from 'src/models/Products';
import dbConnect from 'src/utils/dbConnect.js';

const handler = async (req, res) => {
  const { method } = req;
  const { page, limit } = req.query;
  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const pageInstance = page - 1;
        if (page == 0) return res.status(404).json({ success: false, message: 'No page found' });

        if (page || limit) {
          const product = await Products.find({})
            .limit(limit)
            .skip(limit * pageInstance);
          return res.status(200).json({
            success: true,
            product: product,
          });
        }

        const product = await Products.find({});
        return res.status(200).json({
          success: true,
          product: product,
        });
      } catch (err) {
        return res.status(500).json({ success: false, message: err });
      }
      break;
    default:
      return res.status(500).json({ success: false, message: 'Faild to connect to server' });
  }
};

export default handler;
