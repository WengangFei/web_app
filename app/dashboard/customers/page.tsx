import React, { Suspense } from 'react'
import SlowPart from './SlowPart'

export default function Page() {
  return (
    <div>
      
      Customers Page
      <Suspense fallback={<div>Slow part is Loading...</div>}>
        <SlowPart />
      </Suspense>
    </div>
  )
}
