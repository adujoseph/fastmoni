import * as React from "react"
import Svg, { SvgProps, Mask, Path, G } from "react-native-svg"
const DownloadIcon = (props: SvgProps | any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <Mask
      id="a"
      width={32}
      height={32}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <Path fill="#D9D9D9" d="M0 0h32v32H0z" />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill="#810A82"
        d="m16 21.334-6.667-6.667 1.867-1.934 3.467 3.467V5.334h2.666V16.2l3.467-3.466 1.867 1.933L16 21.334Zm-8 5.333a2.568 2.568 0 0 1-1.883-.784A2.568 2.568 0 0 1 5.333 24v-4H8v4h16v-4h2.667v4c0 .733-.261 1.361-.784 1.884a2.568 2.568 0 0 1-1.883.783H8Z"
      />
    </G>
  </Svg>
)
export default DownloadIcon
