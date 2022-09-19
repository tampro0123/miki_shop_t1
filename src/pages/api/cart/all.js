import withAuth from 'src/middleware/withAuth';
import withRoles from 'src/middleware/withRoles';
import Cart from 'src/models/Cart';
import dbConnect from 'src/utils/dbConnect.js';

const getAllCartHanlder = async (req, res) => {
  await dbConnect();
  const { method } = req;
  const { page = 1, limit = 0, status } = req.query;

  switch (method) {
    case "GET":
      try {
        const pageInstance = page - 1;
        const findInstance = {};
        var totalItems = await Cart.countDocuments();
        if (status) {
          findInstance.status = status;
          const item = await Cart.aggregate([
            { $match: { "status": status } },
            { $sort: { createdAt: 1 } },
            {
              $group: {
                _id: "$status",
                count: { $sum: 1 },
              }
            },
          ]);

          totalItems = await item[0].count;
        };

        const totalPages = Math.ceil(totalItems / +limit);

        const carts = await Cart.find(findInstance, {
          createdAt: 1,
          user: 1,
          name: 1,
          products: 1,
          payment: 1,
          receipt: 1,
          status: 1,
        }).sort({ createdAt: -1 })
          .limit(limit)
          .skip(limit * pageInstance);

        return res.status(200).json({
          success: true,
          carts: carts,
          perPage: +limit,
          totalItems,
          totalPages,
        });
      } catch (err) {
        console.log(err)
        return res.status(500).json({ success: false, message: err });
      }
      break;
    default:
      return res.status(500).json("Faild to connect to server");
  }
};

export default withAuth(withRoles(getAllCartHanlder, 'admin'));
