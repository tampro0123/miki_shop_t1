import withAuth from 'src/middleware/withAuth';
import withCartOwner from 'src/middleware/withCartOwner';
import Cart from 'src/models/Cart';
import dbConnect from 'src/utils/dbConnect.js';
const mongoose = require('mongoose');

const cartHistoryHandler = async (req, res) => {
  await dbConnect();
  const { method } = req;
  const { page = 1, limit = 0, id, status } = req.query;

  switch (method) {
    case "GET":
      try {
        const pageInstance = page - 1;
        const idInstance = mongoose.Types.ObjectId(id);
        var filter = "$user";
        const matcher = {
          "user": idInstance,
        }

        if (status) {
          filter = "$status";
          matcher["status"] = status;
        }

        const items = await Cart.aggregate([
          { $match: matcher },
          { $sort: { createdAt: -1 } },
          {
            $group: {
              _id: filter,
              count: { $sum: 1 },
            },
          },
        ]);

        const totalItems = await items[0].count;
        const totalPages = Math.ceil(totalItems / +limit);

        const carts = await Cart.find(matcher, {
          createdAt: 1,
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

export default withAuth(withCartOwner(cartHistoryHandler));
