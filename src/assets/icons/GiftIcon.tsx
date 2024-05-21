import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { Colors } from "../../utils/themes"

function GiftIcon(props: any) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1.64 12.27v4.82a.92.92 0 00.92.91h5.62v-5.73H1.64zM9.82 18h5.62a.92.92 0 00.92-.91v-4.82H9.82V18zM17.1 4.09h-1.84a2.82 2.82 0 00.29-1.23A2.87 2.87 0 0012.68 0 4.21 4.21 0 009 2.57 4.21 4.21 0 005.32 0a2.87 2.87 0 00-2.87 2.86c.002.427.102.847.29 1.23H.9c-.5 0-.9.59-.9 1.31v3.93c0 .72.4 1.31.9 1.31h7.28V4.09h1.64v6.55h7.28c.5 0 .9-.59.9-1.31V5.4c0-.72-.4-1.31-.9-1.31zm-11.78 0a1.23 1.23 0 110-2.45c1.4 0 2.19 1.44 2.58 2.45H5.32zm7.36 0H10.1c.39-1 1.18-2.45 2.58-2.45a1.23 1.23 0 110 2.45z"
        fill={props.focus ? Colors.primary :"#6D6D6D"}
      />
    </Svg>
  )
}

export default GiftIcon
