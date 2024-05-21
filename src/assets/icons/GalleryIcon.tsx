import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { Colors } from "../../utils/themes"

function GalleryIcon(props:any) {
  return (
    <Svg
      width={21}
      height={20}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1.08 17.011l-.02.02c-.27-.59-.44-1.26-.51-2 .07.73.26 1.39.53 1.98zM7.501 8.381a2.38 2.38 0 100-4.76 2.38 2.38 0 000 4.76z"
        fill={props.focus? Colors.primary :"#6D6D6D"}
      />
      <Path
        d="M14.69 0H6.31C2.67 0 .5 2.17.5 5.81v8.38c0 1.09.19 2.04.56 2.84.86 1.9 2.7 2.97 5.25 2.97h8.38c3.64 0 5.81-2.17 5.81-5.81V5.81C20.5 2.17 18.33 0 14.69 0zm4.18 10.5c-.78-.67-2.04-.67-2.82 0l-4.16 3.57c-.78.67-2.04.67-2.82 0l-.34-.28c-.71-.62-1.84-.68-2.64-.14l-3.74 2.51C2.13 15.6 2 14.95 2 14.19V5.81C2 2.99 3.49 1.5 6.31 1.5h8.38C17.51 1.5 19 2.99 19 5.81v4.8l-.13-.11z"
        fill={props.focus? Colors.primary :"#6D6D6D"}
      />
    </Svg>
  )
}

export default GalleryIcon
