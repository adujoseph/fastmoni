import * as React from "react"
import Svg, { SvgProps, Mask, Path, G } from "react-native-svg"
const UploadIcon = (props: SvgProps | any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={32}
    fill="none"
    {...props}
  >
    <Mask
      id="a"
      width={33}
      height={32}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <Path fill="#D9D9D9" d="M.5 0h32v32H.5z" />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill="#fff"
        d="M15.167 26.667V15.8L11.7 19.267l-1.867-1.933 6.667-6.667 6.667 6.667-1.867 1.933-3.467-3.467v10.867h-2.666ZM5.833 12V8c0-.733.261-1.36.784-1.883A2.568 2.568 0 0 1 8.5 5.333h16c.733 0 1.361.262 1.883.784.523.522.784 1.15.784 1.883v4H24.5V8h-16v4H5.833Z"
      />
    </G>
  </Svg>
)
export default UploadIcon
