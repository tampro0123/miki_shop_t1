import Products from 'src/models/Products';
import dbConnect from 'src/utils/dbConnect.js';

dbConnect();

const handler = async (req, res) => {
    const { method } = req;

    switch (method) {
        case "GET":
          try {
            const product = await Products.find({});
            return res.status(200).json(product);
          } catch (err) {
            return res.status(500).json(err);
          }
          break;
        default:
          return res.status(500).json("Faild to connect to server");
      }
}

export default handler;