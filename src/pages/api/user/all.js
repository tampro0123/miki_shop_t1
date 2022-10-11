import User from 'src/models/User';
import dbConnect from 'src/utils/dbConnect.js';
import withAuth from 'src/middleware/withAuth';
import withRoles from 'src/middleware/withRoles';

const userHandler = async (req, res) => {
  await dbConnect();
  const { method } = req;
  const { page, limit, role } = req.query;

  switch (method) {
    case "GET":
      try {
        const pageInstance = page - 1;
        const totalUsers = await User.countDocuments()
        const totalPages = Math.ceil(totalUsers / +limit)

        if (page == 0 || page > totalPages) return res.status(404).json({ success: false, message: 'No page found' });

        if ((page && limit) || role) {
          const findInstance = {};
          if (role) findInstance.role = role;

          const users = await User.find(findInstance, {
            username: 1,
            avatar: 1,
            role: 1,
            email: 1,
          }).sort({ 'username': 1 })
            .limit(limit)
            .skip(limit * pageInstance);

          return res.status(200).json({
            success: true,
            users: users,
            perPage: +limit,
            totalUsers,
            totalPages
          });
        }

        const users = await User.find({});
        return res.status(200).json({
          success: true,
          users: users,
          totalUsers,
          totalPages
        });

      } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: err });
      }
      break;
    default:
      return res.status(500).json({ success: false, message: 'Faild to connect to server' });
  }
};

export default withAuth(withRoles(userHandler, 'admin'));
