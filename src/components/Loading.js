import React from 'react'
import { Loading2 } from './Icons'

const Loading = () => {
    return (
        <div className="bg-bgr text-black">
            <div className="flex flex-col text-center justify-center items-center h-[100vh]">
                <Loading2 />
                <div className="mt-[80px] text-[52px] text-3rd-text">Loading . . .</div>
            </div>
        </div>
    )
}

export default Loading
