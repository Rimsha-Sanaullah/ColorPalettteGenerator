import * as React from "react"
import { SVGProps } from "react"

const UnlockSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    height={30}
    width={30}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 330 330"
    xmlSpace="preserve"
    {...props}
  >
    <path d="M15 160c8.284 0 15-6.716 15-15V85c0-30.327 24.673-55 55-55s55 24.673 55 55v45h-25c-8.284 0-15 6.716-15 15v170c0 8.284 6.716 15 15 15h200c8.284 0 15-6.716 15-15V145c0-8.284-6.716-15-15-15H170V85c0-46.869-38.131-85-85-85S0 38.131 0 85v60c0 8.284 6.716 15 15 15z" />
  </svg>
)

export default UnlockSVG
