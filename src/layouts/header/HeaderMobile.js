// Import Library
import Link from 'next/link';
import React from 'react';
import { useState } from "react"
import Button from 'src/components/Button';
// Import component, function, asset
import { LogoIcon, SearchIcon, CartIcon, UserIcon, Navbar } from 'src/components/Icons/icons.js';

const HeaderMobile = () => {
    // Menu navbar
    const menu = [
        {
            icon: <UserIcon classNameIcon="cursor-pointer hover:scale-90 duration-300 " />,
            title: 'Trang chủ',
            children: [
                {
                    icon: <UserIcon classNameIcon="cursor-pointer hover:scale-90 duration-300 " />,
                    title: 'cấp 2',
                    children: [
                        {
                            icon: <UserIcon classNameIcon="cursor-pointer hover:scale-90 duration-300 " />,
                            title: 'cấp 3.1',
                            children:
                                [
                                    {
                                        icon: <UserIcon classNameIcon="cursor-pointer hover:scale-90 duration-300 " />,
                                        title: 'cấp 4.1',
                                        to: "/"
                                    }, {
                                        icon: <UserIcon classNameIcon="cursor-pointer hover:scale-90 duration-300 " />,
                                        title: 'cấp 4.2',
                                        to: "/"
                                    },
                                ]
                        },
                        {
                            icon: <UserIcon classNameIcon="cursor-pointer hover:scale-90 duration-300 " />,
                            title: 'cấp 3.2',
                            to: "/"
                        },
                        {
                            icon: <UserIcon classNameIcon="cursor-pointer hover:scale-90 duration-300 " />,
                            title: 'cấp 3.3',
                            to: "/"
                        },
                    ],
                },
            ],
        },
        {
            icon: <UserIcon classNameIcon="cursor-pointer hover:scale-90 duration-300 " />,
            title: 'Sản phẩm',
            to: '/',
        },
        {
            icon: <UserIcon classNameIcon="cursor-pointer hover:scale-90 duration-300 " />,
            title: 'Về chúng tôi',
            to: "/"
        },
        {
            icon: <UserIcon classNameIcon="cursor-pointer hover:scale-90 duration-300 " />,
            title: 'Người dùng',
            to: "/"
        },
    ];
    // set option
    const [option, setOption] = useState([menu])
    // 
    const handleSwitchMenu = (item) => {
        setOption([...option, item.children])
    }
    // mount component
    const [mount, setMount] = useState(false)
    // UI
    return (
        <div className="flex items-center w-[1136px] mobile:w-[375px] mb-6 mt-[40px] px-[16px] relative">
            <div onClick={() => setMount(!mount)} className="mr-[56px] pt-4 onClick="><Navbar /></div>
            {/* Mount menu*/}
            {mount && <div className="flex flex-col min-w-max items-start bg-white absolute top-[100%] shadow-xl px-4 py-2 z-[12] left-[16px]">
                {/* If length option > 1, screen mount button "return" */}
                {option?.length > 1 ?
                    <Button
                        onClick={() =>
                            setOption((prev) => {
                                return prev.slice(0, prev.length - 1)
                            })
                        }
                        leftIcon=""
                        className="flex text-black text-base font-medium"
                        text>
                        Quay lại
                    </Button>
                    :
                    ""}
                {/* Mount last element */}
                {option[option.length - 1]?.map((item) =>
                    <Button
                        onClick={() => handleSwitchMenu(item)}
                        key={item.title}
                        leftIcon={item.icon ? item.icon : ""}
                        className="flex text-black text-base font-medium"
                        text
                        to={item.to ? item.to : item.to}>{item.title}
                    </Button>)}
            </div>}
            {/* Logo */}
            <div className="flex flex-col items-center mr-[18px]">
                <Link href="/" passHref>
                    <a>
                        <LogoIcon width={17} height={17} classNameIcon="cursor-pointer" />
                    </a>
                </Link>
                <Link href="/" passHref>
                    <h1 className="cursor-pointer font-plf text-[24px] font-bold text-primary-text leading-8 text-center">
                        MIKI JEWELRY
                    </h1>
                </Link>
            </div>
            {/* search and cart */}
            <div className="flex items-center pt-4">
                <SearchIcon classNameIcon="cursor-pointer hover:scale-90 duration-300 mr-[10px]" />
                <CartIcon classNameIcon="cursor-pointer hover:scale-90 duration-300 " />
            </div>
        </div>
    )
}

export default HeaderMobile
