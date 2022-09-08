import React from 'react'
import { Loading2 } from './Icons'

const Redirect = ({ href }) => {
    return (
        <div className="bg-bgr text-black">
            <div className="flex flex-col text-center justify-center items-center h-[100vh]">
                <Loading2 />
                <div className="mt-[80px] text-[52px] text-3rd-text">Redirecting . . .</div>
                <div className="mt-[80px] text-[26px] min-w-[800px]">Redirecting to <div className="text-3rd-text inline-block">{href}</div></div>
            </div>
        </div>
    )
}

export default Redirect
