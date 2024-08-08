"use client"

import { GlobalStyles } from "@/ui/shared/styles/global"
import NoPrincipleApplyed from "./no-principle-applied"
import PrincipleApplyed from "./principle-applyed"

export default function Form () {
  return (
    <>
      <GlobalStyles />
      {/* <NoPrincipleApplyed /> */}
      <PrincipleApplyed />
    </>
  )
}