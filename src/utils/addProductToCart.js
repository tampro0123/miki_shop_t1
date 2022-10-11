import axiosAuth from './axios';
import { showToast } from './showToast';

export default async function addProductToCart(userId, product, category, desc, cart, setCart, setToast) {
  if (product.size) {
    // check nếu không trùng size thì thêm mới sản phẩm
    const check = cart.every((item) => {
      return item.product !== product._id || item.size !== product.size;
    });
    if (check) {
      const data = await axiosAuth({
        method: 'POST',
        url: '/api/cart/addToCart',
        data: {
          userId: userId,
          product: product,
        },
      });
      setCart((prev) => {
        return [
          ...prev,
          {
            ...product,
            category: category,
            desc: desc,
          },
        ];
      });
      showToast('success', 'Thành công', 'Sản phẩm đã được thêm vào giỏ hàng', 3000, setToast);
    } else {
      // tìm product có size trùng
      const newQuantity = cart.find((item) => item.product == product._id && item.size == product.size);
      const data = await axiosAuth({
        method: 'POST',
        url: '/api/cart/addToCart',
        data: {
          userId: userId,
          product: {
            ...newQuantity,
            quantity: newQuantity.quantity + product.quantity,
          },
        },
      });
      let sameProduct = {
        ...newQuantity,
        quantity: newQuantity.quantity + product.quantity,
      }
      setCart((prev) => {
        return [
          ...prev.filter((item) => item.product !== product._id || item.size !== product.size),
          sameProduct
        ]
      })
      showToast('success', 'Thành công', 'Sản phẩm đã được thay đổi số lượng ở giỏ hàng', 3000, setToast);
    }
  } else {
    showToast('error', 'Thất bại', 'Vui lòng chọn size', 3000, setToast);
  }
}
