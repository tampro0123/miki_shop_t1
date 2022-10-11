import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import filterSearch from 'src/utils/filterSearch';

export default function SortProduct() {
  const router = useRouter();
  const [sortValue, setSortValue] = useState('price');
  const [orderValue, setOrderValue] = useState(' ');
  const handleSort = (e) => {
    if (e.target.id == 'sale') {
      setSortValue(e.target.id);
      setOrderValue('asc');
    } else {
      setOrderValue(' ');
      setSortValue(e.target.id);
    }
  };
  const handleOrder = (e) => {
    setOrderValue(e.target.value);
  };
  useEffect(() => {
    filterSearch({ router, sort: sortValue, order: orderValue });
  }, [sortValue, orderValue]);
  return (
    <div className="flex items-center justify-between">
      <h1 className="font-bold text-32 leading-10">Danh mục sản phẩm</h1>
      <div className="flex items-center">
        <div className="flex">
          <div
            onClick={handleSort}
            id="price"
            className={
              sortValue == 'price'
                ? 'cursor-pointer py-2 px-6 bg-red-600 text-white mr-3'
                : 'cursor-pointer py-2 px-6 bg-white text-primary-text mr-3'
            }
          >
            Giá
          </div>
          <div
            onClick={handleSort}
            id="sale"
            className={
              sortValue == 'sale'
                ? 'cursor-pointer p-2 px-4 bg-red-600 text-white mr-3'
                : 'cursor-pointer p-2 px-4 bg-white text-primary-text mr-3'
            }
          >
            Ưu đãi
          </div>
          <div
            onClick={handleSort}
            id="time"
            className={
              sortValue == 'time'
                ? 'cursor-pointer p-2 px-4 bg-red-600 text-white mr-3'
                : 'cursor-pointer p-2 px-4 bg-white text-primary-text mr-3'
            }
          >
            Thời gian
          </div>
        </div>
        {sortValue == 'sale' ? (
          <select className="p-2 border-none" onChange={handleOrder}>
            <option disabled>Lọc</option>
            <option value="asc">Giảm dần</option>
            <option value=" ">Tăng dần</option>
          </select>
        ) : (
          <select className="p-2 border-none" onChange={handleOrder}>
            <option disabled>Lọc</option>
            <option value=" ">Tăng dần</option>
            <option value="desc">Giảm dần</option>
          </select>
        )}
      </div>
    </div>
  );
}
