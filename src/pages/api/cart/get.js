import withAuth from 'src/middleware/withAuth';
import withCartOwner from 'src/middleware/withCartOwner';
import Cart from 'src/models/Cart';
import dbConnect from 'src/utils/dbConnect.js';

const getCartHandler = async (req, res) => {
  await dbConnect();
  const { method } = req;
  const { id } = req.query;

  switch (method) {
    case "GET":
      try {
        const cart = await Cart.findById(id);

        if (!cart)
          return res.status(404).json({
            success: false,
            message: "Cart not found!"
          });

        return res.status(200).json({
          success: true,
          cart: cart
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

export default withAuth(withCartOwner(getCartHandler));
