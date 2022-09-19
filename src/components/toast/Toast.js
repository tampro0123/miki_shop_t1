// Import library
import React from 'react';
// Import components/assets/sections/....
import { CloseIcon, ErrorIcon, InfoIcon, SuccessIcon, WarningIcon, LoadingIcon } from '../Icons/iconToast';
import { toasts } from "src/recoils/toasts"
import { useSetRecoilState } from "recoil"


export default function Toast({ toast }) {
    const setToast = useSetRecoilState(toasts)
    const toastType = [
        { type: 'success', component: <SuccessIcon className="animate-bounce" key="success" /> },
        { type: 'info', component: <InfoIcon className="animate-bounce" key="info" /> },
        { type: 'warning', component: <WarningIcon className="animate-bounce" key="warning" /> },
        { type: 'error', component: <ErrorIcon className="animate-bounce" key="error" /> },
        {
            type: 'loading',
            component: <LoadingIcon className="animate-spin" key="loading" />,
        },
    ];
    const toastStyle = { text: '', bg: '' };
    switch (toast.type) {
        case 'success':
            toastStyle.text = 'text-[#47d864]';
            toastStyle.bg = 'bg-[#47d864]';
            break;
        case 'info':
            toastStyle.text = 'text-[#2f86eb]';
            toastStyle.bg = 'bg-[#2f86eb]';
            break;
        case 'warning':
            toastStyle.text = 'text-[#ffc021]';
            toastStyle.bg = 'bg-[#ffc021]';
            break;
        case 'error':
            toastStyle.text = 'text-[#ff623d]';
            toastStyle.bg = 'bg-[#ff623d]';
            break;
        case 'loading':
            toastStyle.text = 'text-[#999]';
            toastStyle.bg = 'bg-[#999]';
            break;
        default:
        // code block
    }

    return (
        <div className="flex items-center shadow-lg rounded-lg my-2 px-2 py-4 animate-fromRight relative">
            <div className="mx-[12px]">
                {toastType?.map((item) => {
                    if (item.type === toast.type) {
                        return item.component;
                    }
                })}
            </div>
            <div className="w-[300px]">
                <h5 className={`${toastStyle.text}`}>{toast.title}</h5>
                <p className={`py-1`}>{toast.message}</p>
            </div>
            <button onClick={() => setToast((prev) => prev.filter((item) => item.id !== toast.id))}>
                <CloseIcon />
            </button>
            <div className={`absolute top-0 left-0 animate-growWidth h-[3px] ${toastStyle.bg}`}></div>
        </div>
    );
}
