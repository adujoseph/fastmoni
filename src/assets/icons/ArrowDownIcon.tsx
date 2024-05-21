import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ArrowDownIcon = (props: any) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={10}
      viewBox="0 0 16 10"
      fill="none"
      {...props}
    >
      <Path
        d="M2.452.705L8.007 6.26 13.562.705a1.426 1.426 0 012.02 0c.558.558.558 1.46 0 2.018L9.008 9.295a1.426 1.426 0 01-2.018 0L.419 2.723a1.426 1.426 0 010-2.018C.977.16 1.894.146 2.452.705z"
        fill="#818181"
      />
    </Svg>
  )
}

export default ArrowDownIcon;
