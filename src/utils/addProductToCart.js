import axiosAuth from "./axios"
import { showToast } from "./showToast";

export default async function addProductToCart( userId, product, category, desc, setCartState, setToast) {
    if (product.size) {
        const data = await axiosAuth({
          method: "POST",
          url: '/api/cart/addToCart',
          data: {
            userId: userId,
            product: product,
          },
        })
        setCartState((prev) => {
          return [
            ...prev,
            {
                ...product,
              category: category,
              desc: desc,
            }
          ]
        })
      showToast('success', 'Thành công', 'Sản phẩm đã được thêm vào giỏ hàng', 3000, setToast);
    } else {
      showToast('error', 'Thất bại', 'Vui lòng chọn size', 3000, setToast);
    }
}
