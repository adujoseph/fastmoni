import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { Colors } from "../../utils/themes"

function DashboardIcon(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      {...props}
    >
      <Path
        d="M1 10h6c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v8c0 .55.45 1 1 1zm0 8h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm10 0h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zM10 1v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1z"
        fill={props.focus ? Colors.primary : "#6D6D6D"}
      />
    </Svg>
  )
}

export default DashboardIcon
