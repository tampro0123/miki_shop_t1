import withAuth from 'src/middleware/withAuth';
import User from 'src/models/User';
import dbConnect from 'src/utils/dbConnect.js';


const addToCarthandler = async (req, res) => {
  await dbConnect();
  const { method } = req;
  const { userId, product } = req.body;

  switch (method) {
    case "POST":
      try {
        console.log(userId, product)
        const currentUser = await User.findById(userId);
        const cart = await currentUser.cart;
        const index = cart.findIndex(
          (item) => ((item.product.toString() == product.id) && (item.size == product.size))
        );
        let message = "Sản phẩm không hợp lệ!";
        console.log(index);

        if (index !== -1) {
          cart.splice(index, 1);
          await User.findByIdAndUpdate(userId, { cart }, { new: true });
          message = "Xoá sản phẩm khỏi giỏ hàng thành công!";
        }

        if (product.quantity > 0) {
          await User.findByIdAndUpdate(
            userId,
            {
              $addToSet: {
                cart: {
                  product: product.id,
                  size: product.size,
                  quantity: product.quantity,
                  name: product.name,
                  price: product.price,
                  image: product.image,
                },
              },
            },
            { new: true }
          );
          message = "Thêm vào giỏ hàng thành công!";
        }

        return res.status(200).json({
          success: true,
          message: message,
        });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: err });
      }
      break;
    default:
      return res.status(500).json("Faild to connect to server");
  }
};

export default withAuth(addToCarthandler);
