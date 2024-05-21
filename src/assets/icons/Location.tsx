import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import { memo } from "react"
const LocationIcon = (props: SvgProps | any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill={props?.color}
      d="M8.408 23.516C1.598 13.642.333 12.629.333 9a9 9 0 1 1 18 0c0 3.629-1.264 4.642-8.075 14.516a1.125 1.125 0 0 1-1.85 0Zm.925-10.766a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
    />
  </Svg>
)
const Memo = memo(LocationIcon)
export default Memo
