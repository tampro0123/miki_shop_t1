import React from 'react'

const Loading = () => {
    return (
        <div className="bg-black text-white">
            <div className="flex text-center justify-center items-center h-[100vh] ">
                <div className="absolute w-[200px] h-[200px] rounded-[50%] 
                before:absolute before:content-[''] before:left-[0] 
                before:top-[0] before:h-full before:w-full 
                before:shadow-[0_0_5px_rgba(255,255,255,.3)] before:rounded-[50%] animate-loading"></div>
                <span className="text-[$737373] leading-[200px] tracking-[1px] animate-text">LOADING...</span>
            </div>
        </div>
    )
}

export default Loading
