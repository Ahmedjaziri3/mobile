import * as React from 'react';
import { View } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { ClipPath, Defs, G, Mask, Path } from 'react-native-svg';
export const CompleteLogo = (props: SvgProps) => (
  <View className="flex h-14 w-48 items-center justify-center">
    <Svg width="100%" height="100%" fill="none" {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#1B2534"
          d="M43.913 42.692h-4.298l-.776 3.224h-4.764l4.764-14.7h6.083l4.556 14.7H44.69l-.776-3.224Zm-2.175-8.304-1.527 5.442h3.08l-1.45-5.442h-.103Zm16.69-.593c.225 0 .458.026.7.077.258.052.448.112.569.18 0 .379-.043 1.007-.13 1.883-.086.86-.163 1.47-.233 1.831a11.56 11.56 0 0 0-.957-.025c-1.088 0-2.054.06-2.9.18v7.995H51.05V34.053h3.702l.518 1.908h.026c.5-.653 1.035-1.178 1.605-1.573.57-.395 1.079-.593 1.527-.593Zm12.968 11.76c-1.398.464-2.96.696-4.686.696-1.933 0-3.383-.481-4.35-1.444-.948-.98-1.423-2.502-1.423-4.565 0-1.014.138-2.011.414-2.991.276-.998.57-1.668.88-2.012.363-.395 1.07-.73 2.123-1.006a13.255 13.255 0 0 1 3.314-.412c1.19 0 2.39.103 3.598.31-.034.429-.095.936-.18 1.52a22.314 22.314 0 0 1-.234 1.522 47.325 47.325 0 0 0-3.029-.103c-.932 0-1.527.052-1.786.155-.138.051-.268.404-.388 1.057a11.73 11.73 0 0 0-.156 1.831c0 .757.104 1.341.311 1.754.224.395.57.67 1.035.825.466.155 1.096.232 1.89.232.346 0 1.105-.034 2.278-.103l.389 2.734ZM84.918 34.8c.155.189.267.662.336 1.418.087.756.13 1.908.13 3.456v6.24h-4.427v-7.194c0-.62-.043-.998-.13-1.135-.051-.069-.18-.12-.388-.155a3.836 3.836 0 0 0-.673-.051l-.44.025a4.484 4.484 0 0 0-1.501.336v8.175h-4.427V30.442l4.427-.18v3.017c0 1.238-.044 2.063-.13 2.476l.026.026c1.174-1.324 2.58-1.986 4.22-1.986.621 0 1.2.086 1.734.258.553.172.967.421 1.243.748Zm5.332-2.218a2.186 2.186 0 0 1-1.527-.593c-.414-.396-.621-.869-.621-1.419s.207-1.023.62-1.418c.432-.396.942-.593 1.528-.593.587 0 1.088.197 1.502.593.414.395.621.868.621 1.418 0 .55-.207 1.023-.621 1.419a2.096 2.096 0 0 1-1.502.593Zm-2.226 1.47h4.427v11.863h-4.427V34.053Zm25.753.825c.276.413.414 2.012.414 4.797v6.24h-4.427V38.722c0-.636-.06-1.015-.181-1.135-.138-.138-.431-.206-.88-.206l-.311.025a4.61 4.61 0 0 0-1.527.361c.017.361.026.998.026 1.909v6.24h-4.427V38.567c0-.533-.06-.86-.181-.98-.138-.138-.432-.206-.88-.206l-.311.025a4.484 4.484 0 0 0-1.501.336v8.175h-4.427V34.053h3.598l.466 1.934c.57-.757 1.225-1.307 1.968-1.65.742-.362 1.492-.542 2.252-.542.638 0 1.242.094 1.812.283.587.19.992.456 1.217.8.103.155.19.438.259.851.552-.67 1.182-1.16 1.889-1.47a5.266 5.266 0 0 1 2.123-.464c.639 0 1.243.094 1.812.283.587.19.993.456 1.217.8Zm10.082 11.038-.414-1.625c-.794 1.29-1.898 1.934-3.313 1.934-1.157 0-2.106-.318-2.848-.954-.725-.653-1.087-1.564-1.087-2.733 0-.723.207-1.35.621-1.883.431-.55 1.018-.937 1.76-1.16.967-.276 2.46-.43 4.479-.465 0-1.135-.052-1.736-.155-1.805-.087-.069-.363-.103-.829-.103-.293 0-.699.017-1.217.051-.828.035-1.95.13-3.365.284a36.373 36.373 0 0 1-.311-2.992 34.61 34.61 0 0 1 2.874-.464 19.985 19.985 0 0 1 2.692-.206c1.381 0 2.416.232 3.107.696.69.447 1.139 1.04 1.346 1.78.207.739.302 1.676.285 2.81l-.026 3.792.077 3.043h-3.676Zm-2.226-2.58c.449 0 .923-.085 1.424-.257v-1.908h-.207c-1.277 0-1.985.068-2.123.206a.914.914 0 0 0-.207.387 2.456 2.456 0 0 0-.052.49c0 .412.095.696.285.85.19.156.483.233.88.233Zm13.855-2.294c0 .31.009.636.026.98.017.326.069.533.155.619.121.12.544.18 1.269.18l.88-.026c.155.826.233 1.78.233 2.863-.328.12-.811.232-1.45.335-.621.103-1.216.155-1.786.155-1.191 0-2.114-.258-2.77-.774-.638-.533-.958-1.35-.958-2.45V36.58h-1.941v-2.347l1.941-.18 1.165-2.837 3.236-.18v3.017h2.744v2.527h-2.744v4.462Zm14.604 4.513c-1.398.464-2.96.696-4.685.696-1.933 0-3.383-.481-4.35-1.444-.949-.98-1.423-2.502-1.423-4.565 0-1.014.138-2.011.414-2.991.276-.998.569-1.668.88-2.012.362-.395 1.07-.73 2.123-1.006a13.25 13.25 0 0 1 3.313-.412c1.191 0 2.391.103 3.599.31-.035.429-.095.936-.181 1.52a22.503 22.503 0 0 1-.233 1.522 47.336 47.336 0 0 0-3.029-.103c-.932 0-1.528.052-1.787.155-.138.051-.267.404-.388 1.057a11.801 11.801 0 0 0-.155 1.831c0 .757.103 1.341.31 1.754.225.395.57.67 1.036.825.466.155 1.096.232 1.89.232.345 0 1.104-.034 2.278-.103l.388 2.734ZM163.614 34.8c.156.189.268.662.337 1.418.086.756.129 1.908.129 3.456v6.24h-4.427v-7.194c0-.62-.043-.998-.129-1.135-.052-.069-.181-.12-.388-.155a3.843 3.843 0 0 0-.673-.051l-.441.025a4.484 4.484 0 0 0-1.501.336v8.175h-4.427V30.442l4.427-.18v3.017c0 1.238-.043 2.063-.129 2.476l.025.026c1.174-1.324 2.581-1.986 4.22-1.986.621 0 1.2.086 1.735.258.552.172.966.421 1.242.748Z"
        />
        <Mask
          id="b"
          width={23}
          height={49}
          x={0}
          y={0}
          maskUnits="userSpaceOnUse"
          mask-type="luminance"
        >
          <Path fill="#fff" d="M22.015 0H0v48.848h22.015V0Z" />
        </Mask>
        <G mask="url(#b)">
          <Mask
            id="c"
            width={23}
            height={49}
            x={0}
            y={0}
            maskUnits="userSpaceOnUse"
            mask-type="luminance"
          >
            <Path fill="#fff" d="M22.015 0H0v48.848h22.015V0Z" />
          </Mask>
          <G fill="#FC5C63" mask="url(#c)">
            <Path d="M22.015 18.11 0 0v9.056l22.015 17.89V18.11Z" />
            <Path
              fillOpacity={0.1}
              d="M22.015 30.57v18.278H7.388V18.537L22.015 30.57Z"
            />
            <Path d="M14.697 33.688v15.16H.07V21.654l7.314 6.018 7.314 6.016Z" />
          </G>
        </G>
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h164.818v49H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  </View>
);
