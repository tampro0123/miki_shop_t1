import { LogoIcon } from 'src/components/icons';
import UpdateProduct from 'src/sections/handleAction/updateProduct.js';
import OverLay from 'src/layouts/managementPage/overlay/OverLay';
export default function updateProduct() {
    return (
        <OverLay>
            <div className="w-[510px] bg-bgr-auth rounded-r-16 mx-auto">
                <div className="flex items-center flex-col mt-14 justify-center">
                    <LogoIcon />
                    <h1 className="font-plf font-bold text-[40px] leading-[48px] ">MIKI JEWELRY</h1>
                </div>
                <h1 className="text-xl leading-7 font-bold ml-10 mt-[72px] ">Cập nhật sản phẩm</h1>
                <UpdateProduct />
            </div>
        </OverLay>
    )
}
