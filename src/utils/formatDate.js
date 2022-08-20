import React from 'react'

export default function FormatDate({date}) {
    return <span>
        {new Date(date).toLocaleDateString("vi-VI")}
    </span>
}
