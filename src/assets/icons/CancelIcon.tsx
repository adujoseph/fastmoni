import * as React from "react"
import Svg, { SvgProps, Rect, Path } from "react-native-svg"
const CancelIcon = (props: SvgProps | any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <Rect width={32} height={32} fill="#383838" rx={16} />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m11 21 5-5m0 0 5-5m-5 5-5-5m5 5 5 5"
    />
  </Svg>
)
export default CancelIcon
