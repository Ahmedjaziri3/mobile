import { View } from 'moti';
import React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, {
  ClipPath,
  Defs,
  G,
  LinearGradient,
  Path,
  Stop,
} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export const CompleteLogoClient = (props: SvgProps) => {
  return (
    <View className="flex h-28 w-28  items-center justify-center  ">
      <Svg width="100%" height="100%" viewBox="0 0 117 117" {...props}>
        <Defs>
          <ClipPath id="a">
            <Path d="M28 14h61v60H28zm0 0" />
          </ClipPath>
          <ClipPath id="b">
            <Path d="M38.41 14.773h40.18c5.222 0 9.457 4.23 9.457 9.454V64.41c0 5.219-4.234 9.453-9.457 9.453H38.41c-5.222 0-9.457-4.234-9.457-9.453V24.227c0-5.223 4.235-9.454 9.457-9.454zm0 0" />
          </ClipPath>
          <LinearGradient
            id="c"
            gradientUnits="userSpaceOnUse"
            x1={64.5}
            y1={8.5}
            x2={22.5}
            y2={47.5}
            gradientTransform="matrix(1.18182 0 0 1.18182 5.318 5.318)"
          >
            <Stop offset={0} stopColor="#58cdff" stopOpacity={1} />
            <Stop offset={1} stopColor="#11abec" stopOpacity={1} />
          </LinearGradient>
          <ClipPath id="d">
            <Path d="M47 21h22v26H47zm0 0" />
          </ClipPath>
          <ClipPath id="e">
            <Path d="M38.41 14.773h40.18c5.222 0 9.457 4.23 9.457 9.454V64.41c0 5.219-4.234 9.453-9.457 9.453H38.41c-5.222 0-9.457-4.234-9.457-9.453V24.227c0-5.223 4.235-9.454 9.457-9.454zm0 0" />
          </ClipPath>
          <ClipPath id="f">
            <Path d="M54 38h15v29H54zm0 0" />
          </ClipPath>
          <ClipPath id="g">
            <Path d="M38.41 14.773h40.18c5.222 0 9.457 4.23 9.457 9.454V64.41c0 5.219-4.234 9.453-9.457 9.453H38.41c-5.222 0-9.457-4.234-9.457-9.453V24.227c0-5.223 4.235-9.454 9.457-9.454zm0 0" />
          </ClipPath>
          <ClipPath id="h">
            <Path d="M47 41h15v26H47zm0 0" />
          </ClipPath>
          <ClipPath id="i">
            <Path d="M38.41 14.773h40.18c5.222 0 9.457 4.23 9.457 9.454V64.41c0 5.219-4.234 9.453-9.457 9.453H38.41c-5.222 0-9.457-4.234-9.457-9.453V24.227c0-5.223 4.235-9.454 9.457-9.454zm0 0" />
          </ClipPath>
        </Defs>
        <G clipPath="url(#a)">
          <G clipPath="url(#b)">
            <Path
              d="M38.41 14.773h40.18c5.222 0 9.457 4.23 9.457 9.454V64.41c0 5.219-4.234 9.453-9.457 9.453H38.41c-5.222 0-9.457-4.234-9.457-9.453V24.227c0-5.223 4.235-9.454 9.457-9.454zm0 0"
              stroke="none"
              fillRule="nonzero"
              fill="url(#c)"
            />
          </G>
        </G>
        <G clipPath="url(#d)">
          <G clipPath="url(#e)">
            <Path
              d="M68.105 38.516L47.863 21.863v8.325l20.242 16.449zm0 0"
              stroke="none"
              fillRule="nonzero"
              fill="#fff"
              fillOpacity={1}
            />
          </G>
        </G>
        <G clipPath="url(#f)">
          <G clipPath="url(#g)">
            <Path
              d="M68.105 49.969v16.804H54.656V38.906zm0 0"
              stroke="none"
              fillRule="nonzero"
              fill="#fefefe"
              fillOpacity={0.501961}
            />
          </G>
        </G>
        <G clipPath="url(#h)">
          <G clipPath="url(#i)">
            <Path
              d="M61.375 52.836v13.937h-13.45v-25l6.727 5.532zm0 0"
              stroke="none"
              fillRule="nonzero"
              fill="#fff"
              fillOpacity={1}
            />
          </G>
        </G>
        <Path
          d="M20.738 92.117h-2.941l-.531 2.207h-3.258l3.258-10.062h4.164l3.12 10.062h-3.277zm-1.488-5.683l-1.043 3.722h2.11l-.993-3.722zm11.426-.407c.152 0 .312.016.48.051.176.035.305.078.387.125 0 .258-.027.688-.086 1.29a16.544 16.544 0 01-.16 1.253 7.662 7.662 0 00-.656-.02c-.746 0-1.407.044-1.985.126v5.472h-3.031v-8.12h2.535l.356 1.304h.015a5.07 5.07 0 011.098-1.074c.39-.274.738-.407 1.047-.407zm8.875 8.047c-.957.32-2.024.477-3.207.477-1.32 0-2.317-.328-2.977-.989-.648-.667-.972-1.71-.972-3.124 0-.692.093-1.376.28-2.047.192-.684.391-1.141.602-1.375.25-.274.735-.5 1.453-.692a9.123 9.123 0 012.27-.281c.816 0 1.637.07 2.465.21a16.03 16.03 0 01-.125 1.044c-.047.387-.102.734-.16 1.043-.73-.047-1.422-.07-2.075-.07-.636 0-1.042.035-1.222.105-.094.035-.184.273-.266.723-.07.445-.105.863-.105 1.254 0 .515.07.918.21 1.199.157.27.391.46.712.566.32.106.75.156 1.293.156.238 0 .757-.023 1.558-.07zm9.258-7.36c.105.13.183.454.23.97.059.52.086 1.308.086 2.367v4.273h-3.027v-4.238-.688c0-.425-.032-.683-.09-.777-.035-.047-.125-.082-.266-.105a2.636 2.636 0 00-.46-.036l-.302.016a3.06 3.06 0 00-1.027.23v5.598h-3.031V83.73l3.031-.12v2.062c0 .848-.031 1.414-.09 1.695l.02.02c.8-.907 1.765-1.36 2.887-1.36.425 0 .82.059 1.187.176.379.117.66.29.852.512zm3.648-1.519a1.49 1.49 0 01-1.047-.406 1.297 1.297 0 01-.422-.969c0-.379.14-.703.422-.972.297-.27.645-.407 1.047-.407.402 0 .746.137 1.027.407.286.27.426.593.426.972 0 .375-.14.7-.426.97a1.417 1.417 0 01-1.027.405zm-1.523 1.008h3.03v8.121h-3.03zm17.629.563c.187.285.28 1.379.28 3.285v4.273h-3.027v-4.926c0-.437-.043-.695-.125-.777-.093-.094-.296-.14-.601-.14l-.215.015a3.09 3.09 0 00-1.047.25c.012.246.02.68.02 1.305v4.273h-3.032v-5.031c0-.367-.039-.59-.12-.672-.098-.094-.298-.14-.606-.14l-.211.015a3.06 3.06 0 00-1.027.23v5.598H55.82v-8.12h2.465l.317 1.323c.39-.52.84-.894 1.347-1.129a3.46 3.46 0 011.543-.37c.438 0 .848.062 1.238.19.403.13.68.313.833.548.074.109.132.3.18.586.378-.461.808-.797 1.292-1.008.485-.211.969-.317 1.453-.317.438 0 .852.063 1.239.192.402.129.68.312.835.547zm6.898 7.558l-.281-1.113c-.543.883-1.301 1.324-2.27 1.324-.789 0-1.441-.219-1.95-.652-.495-.45-.741-1.074-.741-1.871 0-.496.14-.926.422-1.29.296-.378.699-.64 1.207-.796.66-.188 1.683-.293 3.066-.317 0-.777-.035-1.187-.105-1.234-.063-.047-.25-.07-.57-.07-.2 0-.477.011-.833.035-.566.023-1.336.086-2.304.191a24.902 24.902 0 01-.211-2.047 23.584 23.584 0 011.968-.316 13.68 13.68 0 011.84-.14c.946 0 1.656.156 2.13.476.472.305.776.71.921 1.215.14.508.203 1.148.191 1.926l-.015 2.593.05 2.086zm-1.523-1.765c.308 0 .632-.059.976-.18v-1.305h-.144c-.872 0-1.356.047-1.454.14a.628.628 0 00-.14.266c-.024.118-.035.23-.035.336 0 .282.066.477.195.582.129.106.332.16.602.16zm9.484-1.575c0 .215.008.438.02.672.011.223.046.367.105.426.082.082.371.121.867.121l.602-.016c.109.563.16 1.22.16 1.958-.223.082-.555.16-.992.23-.426.07-.832.105-1.223.105-.816 0-1.445-.175-1.895-.527-.437-.367-.656-.926-.656-1.68v-4.34h-1.328v-1.609l1.328-.12.797-1.942 2.215-.125v2.066H85.3v1.73h-1.88zm9.996 3.09c-.957.32-2.027.477-3.207.477-1.324 0-2.316-.328-2.977-.989-.648-.667-.976-1.71-.976-3.124 0-.692.097-1.376.285-2.047.187-.684.39-1.141.602-1.375.25-.274.734-.5 1.453-.692a9.123 9.123 0 012.27-.281c.816 0 1.636.07 2.46.21-.023.298-.062.645-.121 1.044-.047.387-.102.734-.16 1.043a32.654 32.654 0 00-2.074-.07c-.637 0-1.047.035-1.223.105-.094.035-.184.273-.266.723-.07.445-.105.863-.105 1.254 0 .515.07.918.21 1.199.157.27.391.46.712.566.316.106.75.156 1.293.156.234 0 .754-.023 1.558-.07zm9.254-7.36c.11.13.183.454.23.97.063.52.09 1.308.09 2.367v4.273h-3.031v-4.238-.688c0-.425-.027-.683-.086-.777-.035-.047-.125-.082-.266-.105a2.667 2.667 0 00-.46-.036l-.301.016a3.06 3.06 0 00-1.028.23v5.598h-3.03V83.73l3.03-.12v2.062c0 .848-.03 1.414-.09 1.695l.016.02c.805-.907 1.77-1.36 2.89-1.36.427 0 .821.059 1.188.176.38.117.66.29.848.512zm0 0"
          stroke="none"
          fillRule="nonzero"
          fill="#344054"
          fillOpacity={1}
        />
      </Svg>
    </View>
  );
};
