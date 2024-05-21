import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
import { Colors } from "../../utils/themes"

function OnboardingButton(props: any) {
  return (
    <Svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect
        x={0.25}
        y={0.25}
        width={47.5}
        height={47.5}
        rx={23.75}
        fill={Colors.primary}
      />
      <Path
        d="M19.458 17.932l6.076 6.076-6.076 6.076a1.56 1.56 0 000 2.208c.61.61 1.597.61 2.208 0l7.188-7.188a1.56 1.56 0 000-2.208l-7.188-7.188a1.56 1.56 0 00-2.208 0c-.595.61-.61 1.613 0 2.224z"
        fill="#fff"
      />
    </Svg>
  )
}

export default OnboardingButton
