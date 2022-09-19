import withAuth from 'src/middleware/withAuth';
import User from 'src/models/User';
import Cart from 'src/models/Cart';
import Products from 'src/models/Products';
import Buyer from 'src/models/Buyer';
import dbConnect from 'src/utils/dbConnect.js';


const paymentsHandler = async (req, res) => {
  await dbConnect();
  const { method } = req;
  const { userId, city, district, ward, specificAddress, firstName, lastName, phoneNumber, check, receipt } = req.body;

  switch (method) {
    case "POST":
      try {
        const currentUser = await User.findById(userId);
        const cart = currentUser.cart;

        if (cart.length < 1) {
          return res.status(200).json({
            success: false,
            message: "Giỏ hàng trống, hãy tiếp tục mua sắm...",
          });
        }

        await Cart.create({
          user: userId,
          name: firstName + " " + lastName,
          phoneNumber,
          address: specificAddress + ", " + ward + ", " + district + ", " + city,
          products: cart,
          payment: check[0],
          receipt
        });

        for (const cartItem of cart) {
          const product = await Products.findById(cartItem.product);
          const storage = product.storage.find(item => item.size == cartItem.size)

          if (cartItem.quantity > storage.quantity) {
            return res.status(400).json({
              success: false,
              message: `Sản phẩm ${cartItem.name} chỉ còn tối đa ${storage.quantity} sản phẩm!`
            });
          }

          await Products.findOneAndUpdate(
            { _id: cartItem.product, "storage.size": cartItem.size },
            { $inc: { "storage.$.quantity": -cartItem.quantity } }
          );

          await Buyer.create({ targetId: cartItem.product, user: userId })
        }

        await User.findByIdAndUpdate(userId, {
          $set: { cart: [] }
        })

        return res.status(200).json({ success: true, message: 'Thanh toán thành công!' });
      } catch (err) {
        console.log(err)
        return res.status(500).json({ success: false, message: err });
      }
      break;
    default:
      return res.status(500).json("Faild to connect to server");
  }
};

export default withAuth(paymentsHandler);
