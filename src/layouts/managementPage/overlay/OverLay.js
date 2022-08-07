import React from 'react'
import LeftSide from 'src/layouts/managementPage/leftSide/LeftSide.js'
import HeaderAdmin from 'src/layouts/managementPage/headerAdmin/HeaderAdmin.js'
export default function OverLay({children}) {
  return (
    <div className ='flex'>
        <LeftSide/>
        <div className ='max-w-[1280px] w-full ml-[420px]'>
          <HeaderAdmin/>
          {children}
        </div>
    </div>
  )
}
