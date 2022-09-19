import Cart from 'src/models/Cart';

const withCartOwner = (handler) => {

  return async (req, res) => {
    const { id } = req.query;
    const cart = await Cart.findById(id);

    if (cart?.user != req.user.id || req.user.role != 'admin') {
      return res.status(403).json({
        success: false,
        message: "You do not have permission to perform this action.",
      });
    }
    return handler(req, res);
  };
};

export default withCartOwner;
