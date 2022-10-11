import React from 'react'
import LeftSide from 'src/layouts/managementPage/leftSide/LeftSide.js'
import HeaderAdmin from 'src/layouts/managementPage/headerAdmin/HeaderAdmin.js'
import { useEffect, useState } from 'react'
import { dataUser } from 'src/recoils/dataUser'
import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil'
export default function OverLay({ children }) {
  const user = useRecoilValue(dataUser)
  const router = useRouter()
  const [loading, SetLoading] = useState(true)
  // useEffect(() => {
  //   SetLoading(true)
  //   router.prefetch('/')
  //   if (user.role !== 'admin') {
  //     router.replace('/')
  //   } else {
  //     SetLoading(false)
  //   }
  // }, [])
  // if (loading) {
  //   return <>Loading...</>;
  // }
  return (
    <div className='flex'>
      <LeftSide />
      <div className='max-w-[1280px] w-full ml-[420px]'>
        <HeaderAdmin />
        <div className='mt-[170px]'>

          {children}
        </div>
      </div>
    </div>
  )
}
