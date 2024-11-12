import * as React from "react"
import { SVGProps } from "react"

const LockSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    height={30}
    width={30}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 330 330"
    xmlSpace="preserve"
    {...props}
  >
    <path d="M65 330h200c8.284 0 15-6.716 15-15V145c0-8.284-6.716-15-15-15h-15V85c0-46.869-38.131-85-85-85S80 38.131 80 85v45H65c-8.284 0-15 6.716-15 15v170c0 8.284 6.716 15 15 15zm115-95.014V255c0 8.284-6.716 15-15 15s-15-6.716-15-15v-20.014c-6.068-4.565-10-11.824-10-19.986 0-13.785 11.215-25 25-25s25 11.215 25 25c0 8.162-3.932 15.421-10 19.986zM110 85c0-30.327 24.673-55 55-55s55 24.673 55 55v45H110V85z" />
  </svg>
)

export default LockSVG
