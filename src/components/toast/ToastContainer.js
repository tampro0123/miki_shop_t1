// Import library
import React from 'react';
import { useRecoilValue } from 'recoil';
// Import components/assets/sections/....
import Toast from 'src/components/toast/Toast';
import { toasts } from "src/recoils/toasts"

export default function ToastContainer() {
    const Toasts = useRecoilValue(toasts);
    return (
        <div className="fixed right-[16px] bottom-[16px] flex flex-col-reverse overflow-hidden z-[999]">
            {Toasts?.map((toast) => (
                <Toast key={toast.id} toast={toast} />
            ))}
        </div>
    );
}
