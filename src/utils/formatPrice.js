export default function FormatPrice({ price, discount = 0 }) {
    return <span>
        {new Intl.NumberFormat('vi-VN').format(Math.floor(price - (price * discount) / 100))} đ
    </span>
}
