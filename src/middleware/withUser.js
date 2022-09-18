import User from 'src/models/User';

const withUserOwner = (handler) => {

  return async (req, res) => {
    const { id } = req.query;
    const user = await User.findById(id);

    if (user?._id != req.user.id || req.user.role != 'admin') {
      return res.status(403).json({
        success: false,
        message: "You do not have permission to perform this action.",
      });
    }
    return handler(req, res);
  };
};

export default withUserOwner;
