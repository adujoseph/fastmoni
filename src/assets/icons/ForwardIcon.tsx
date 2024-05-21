import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ForwardIcon = (props: SvgProps | any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={16}
    fill="none"
    {...props}
  >
    <Path fill="#CACACA" d="m2 16 8-8-8-8L.58 1.42 7.16 8 .58 14.58 2 16Z" />
  </Svg>
)
export default ForwardIcon
