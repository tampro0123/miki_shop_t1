import React from 'react'
import OverLay from 'src/layouts/managementPage/overlay/OverLay.js'
import Home from 'src/layouts/managementPage/Home/Home.js'
import Link from 'next/link'
export default function Admin() {
  return (
    <OverLay>
      <ul>
        <li>
          <Link href="/">
            <Home />
          </Link>

        </li>
      </ul>
    </OverLay>
  )
}
