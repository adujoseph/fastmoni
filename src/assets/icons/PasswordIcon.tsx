import * as React from "react"
import Svg, { SvgProps, G, Rect, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
import { memo } from "react"
const PasswordIcon = (props: SvgProps | any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={36}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Rect width={32} height={32} y={2} fill="#fff" rx={4.571} />
      <Path
        fill="#810A82"
        d="M21.606 11.245 16.89 9.48c-.488-.18-1.285-.18-1.774 0l-4.714 1.765c-.909.343-1.646 1.406-1.646 2.375v6.943c0 .694.454 1.611 1.012 2.022l4.714 3.523c.831.626 2.194.626 3.026 0l4.714-3.523c.557-.42 1.011-1.328 1.011-2.022V13.62c.009-.969-.728-2.032-1.628-2.375Zm-2.623 4.8-3.686 3.686a.636.636 0 0 1-.454.189.636.636 0 0 1-.454-.189l-1.372-1.388a.647.647 0 0 1 0-.909.647.647 0 0 1 .909 0l.925.926 3.232-3.232a.647.647 0 0 1 .909 0 .65.65 0 0 1-.01.917Z"
      />
    </G>
    <Defs></Defs>
  </Svg>
)
// const Memo = memo(SvgComponent)
export default PasswordIcon
