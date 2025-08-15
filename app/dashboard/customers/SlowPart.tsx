import { resolve } from 'path'
import React from 'react'

export default function SlowPart() {
  return (
    <div>
        { new Promise(resolve => setTimeout(resolve, 3000)) }
        Slow Part
    </div>
  )
}
