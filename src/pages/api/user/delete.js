import User from 'src/models/User';
import dbConnect from 'src/utils/dbConnect.js';
import withAuth from 'src/middleware/withAuth';
import withRoles from 'src/middleware/withRoles';

const deleteHandler = async (req, res) => {
    await dbConnect();
    const { method } = req;
    const { id } = req.query;

    switch (method) {
        case 'DELETE':
            try {
                await User.findByIdAndDelete(id)
                return res.status(200).json({
                    success: true,
                    message: 'User deleted successfully',
                })
            } catch (error) {
                console.log(error)
                return res.status(404).json({
                    success: false,
                    message: error,
                })
            }
            break;
        default: return res.status(500).json({ success: false, message: 'Failed to connect to server!' })
    }
}

export default withAuth(withRoles(deleteHandler, 'admin'))