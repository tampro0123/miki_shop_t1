import Products from 'src/models/Products';
import dbConnect from 'src/utils/dbConnect.js';

const searchHandler = async (req, res) => {
    await dbConnect();
    const { method } = req;
    const { filterText } = req.body;

    switch (method) {
        case 'POST':
            try {
                const product = await Products.aggregate([
                    { $match: { $text: { $search: filterText } } },
                    { $project: { name: 1, "storage.price": 1, "images.src": 1 } },
                    { $sort: { score: { $meta: "textScore" } } },
                ]);

                return res.status(200).json({ success: true, product: product });
            } catch (err) {
                console.log(err);
                return res.status(500).json({ success: false, message: err });
            }
            break;
        default:
            return res.status(500).json({
                sucess: false,
                message: 'Method not allowed!',
            });
    }
};

export default searchHandler;
