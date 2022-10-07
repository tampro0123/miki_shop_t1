import React from 'react'
import { compareAsc, format } from 'date-fns'


export default function formatTime(date) {
    return format(new Date(date), 'yyyy-MM-dd')
}
