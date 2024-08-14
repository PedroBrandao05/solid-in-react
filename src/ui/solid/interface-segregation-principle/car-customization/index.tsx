'use client'

import { NoPrincipleApplied } from './no-principle-applied'
import { PrincipleApplied } from './principle-applied'

export const CarCustomization = () => {
  return (
    <>
      {/* <NoPrincipleApplied carType='with-plate-and-options' /> */}
      <PrincipleApplied />
    </>
  )
}