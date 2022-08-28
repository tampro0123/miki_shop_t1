import Products from 'src/models/Products';
import dbConnect from 'src/utils/dbConnect.js';

const searchHandler = async (req, res) => {
    await dbConnect();
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const { filterText } = req.query;
                const product = await Products.aggregate([
                    { $match: { $text: { $search: filterText } } },
                    { $project: { name: 1, "storage.price": 1, "images.src": 1, slug: 1 } },
                    { $sort: { score: { $meta: "textScore" } } },
                ]);

                return res.status(200).json({ success: true, product: product });
            } catch (err) {
                console.log(err);
                return res.status(500).json({ success: false, message: err });
            }
            break;
        case 'POST':
            try {
                const { filterText } = req.body;
                const product = await Products.aggregate([
                    { $match: { $text: { $search: filterText } } },
                    { $project: { name: 1, "storage.price": 1, "images.src": 1, slug: 1 } },
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
