import Link from 'next/link'
import React from 'react'
import { ArrowRightIcon } from '../Icons'

export default function BreadCrumb({ params = [] }) {
    const length = params?.length
    return (
        <div className='mb-[32px] flex items-center'>
            {
                params.map((e, i) => (
                    <div key={i} className='inline-block '>
                        <Link
                            key={e.href}
                            href={e.href}
                        >
                            <a
                                className='text-[#626262] mr-2'
                            >
                                {e.label}
                            </a>
                        </Link>
                        {
                            i < length - 1 &&
                            <span className='mr-2'><ArrowRightIcon classNameIcon={'inline-block filter-[#626262]'} /></span>
                        }
                    </div>
                ))
            }
        </div>
    )
}
