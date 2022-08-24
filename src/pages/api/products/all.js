import Products from 'src/models/Products';
import dbConnect from 'src/utils/dbConnect.js';

const handler = async (req, res) => {
  const { method } = req;
  const { page, limit, sort, order, category } = req.query;
  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const pageInstance = page - 1;
        if (page == 0) return res.status(404).json({ success: false, message: 'No page found' });

        //create sorting option
        let orderInstance = 1;
        if (order === 'desc') {
          orderInstance = -1;
        }

        if (page || limit || sort || category) {
          const findInstance = {};
          if (category) findInstance.category = category;
          //create sort field object
          const sortInstance = {};
          switch (sort) {
            case 'time':
              sortInstance['createdAt'] = orderInstance;
              break;
            case 'sale':
              sortInstance['discount'] = -orderInstance;
              break;
            case 'price':
              sortInstance['storage.price'] = orderInstance;
              break;
            default:
              sortInstance['name'] = orderInstance;
          }
          const product = await Products.find(findInstance).sort(sortInstance)
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
