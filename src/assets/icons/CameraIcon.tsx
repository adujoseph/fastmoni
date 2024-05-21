import * as React from 'react';
import Svg, {G, Rect, Mask, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
import {Colors} from '../../utils/themes';

function CameraIcon(props: any) {
  return (
    <Svg
      width={51}
      height={50}
      viewBox="0 0 71 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#filter0_b_745_2484)">
        <Rect x={0.5} width={70} height={70} rx={35} fill="#DADADA" />
        <Rect
          x={12.1667}
          y={11.667}
          width={46.6667}
          height={46.6667}
          rx={23.3333}
          fill="#fff"
        />
        <Mask
          id="a"
          // style={{
          //   maskType: "alpha"
          // }}
          maskUnits="userSpaceOnUse"
          x={23}
          y={23}
          width={25}
          height={24}
        >
          <Path fill="#fff" d="M23.5 23H47.5V47H23.5z" />
        </Mask>
        <G mask="url(#a)">
          <Path
            d="M42.5 30v-2h-2v-2h2v-2h2v2h2v2h-2v2h-2zm-8 10.5c1.25 0 2.312-.438 3.187-1.313S39 37.25 39 36c0-1.25-.438-2.313-1.313-3.188S35.75 31.5 34.5 31.5c-1.25 0-2.313.437-3.188 1.312S30 34.75 30 36c0 1.25.437 2.312 1.312 3.187S33.25 40.5 34.5 40.5zm0-2c-.7 0-1.292-.242-1.775-.725C32.242 37.29 32 36.7 32 36s.242-1.292.725-1.775c.483-.484 1.075-.725 1.775-.725s1.292.241 1.775.725C36.758 34.708 37 35.3 37 36s-.242 1.291-.725 1.775c-.483.483-1.075.725-1.775.725zm-8 5.5c-.55 0-1.02-.196-1.413-.588A1.926 1.926 0 0124.5 42V30c0-.55.196-1.021.587-1.413A1.926 1.926 0 0126.5 28h3.15l1.85-2h7v4h2v2h4v10c0 .55-.196 1.02-.588 1.412A1.926 1.926 0 0142.5 44h-16z"
            fill="#828282"
          />
        </G>
      </G>
      <Defs></Defs>
    </Svg>
  );
}

export default CameraIcon;
