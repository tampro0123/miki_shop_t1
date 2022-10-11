import withAuth from 'src/middleware/withAuth';
import Cart from 'src/models/Cart';
import dbConnect from 'src/utils/dbConnect.js';

const editCartStatus = async (req, res) => {
  await dbConnect();
  const { method } = req;
  const { id } = req.body;

  switch (method) {
    case "POST":
      try {
        const cart = await Cart.findById(id);

        if (!cart)
          return res.status(404).json({
            success: false,
            message: "Cart not found!"
          });

        if (cart.status == 'SUCCESS' || cart.status == 'CANCELLED')
          return res.status(200).json({
            success: false,
            message: "Cart status can't channge!"
          });

        var status;

        cart.status == 'PENDING' ? status = 'SHIPPING' : status = 'SUCCESS';

        await Cart.findByIdAndUpdate(cart.id, { status });

        return res.status(200).json({
          success: true,
          message: "Cart status changed successfully!"
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

export default withAuth(editCartStatus);
