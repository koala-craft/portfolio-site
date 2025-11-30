import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgLoading = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={2} r={0}>
      <animate
        attributeName="r"
        begin={0}
        calcMode="spline"
        dur="1s"
        keySplines=".2 .2 .4 .8;.2 .2 .4 .8;.2 .2 .4 .8"
        repeatCount="indefinite"
        values="0;2;0;0"
      />
    </circle>
    <circle cx={12} cy={2} r={0} transform="rotate(45 12 12)">
      <animate
        attributeName="r"
        begin=".125s"
        calcMode="spline"
        dur="1s"
        keySplines=".2 .2 .4 .8;.2 .2 .4 .8;.2 .2 .4 .8"
        repeatCount="indefinite"
        values="0;2;0;0"
      />
    </circle>
    <circle cx={12} cy={2} r={0} transform="rotate(90 12 12)">
      <animate
        attributeName="r"
        begin=".25s"
        calcMode="spline"
        dur="1s"
        keySplines=".2 .2 .4 .8;.2 .2 .4 .8;.2 .2 .4 .8"
        repeatCount="indefinite"
        values="0;2;0;0"
      />
    </circle>
    <circle cx={12} cy={2} r={0} transform="rotate(135 12 12)">
      <animate
        attributeName="r"
        begin=".375s"
        calcMode="spline"
        dur="1s"
        keySplines=".2 .2 .4 .8;.2 .2 .4 .8;.2 .2 .4 .8"
        repeatCount="indefinite"
        values="0;2;0;0"
      />
    </circle>
    <circle cx={12} cy={2} r={0} transform="rotate(180 12 12)">
      <animate
        attributeName="r"
        begin=".5s"
        calcMode="spline"
        dur="1s"
        keySplines=".2 .2 .4 .8;.2 .2 .4 .8;.2 .2 .4 .8"
        repeatCount="indefinite"
        values="0;2;0;0"
      />
    </circle>
    <circle cx={12} cy={2} r={0} transform="rotate(225 12 12)">
      <animate
        attributeName="r"
        begin=".625s"
        calcMode="spline"
        dur="1s"
        keySplines=".2 .2 .4 .8;.2 .2 .4 .8;.2 .2 .4 .8"
        repeatCount="indefinite"
        values="0;2;0;0"
      />
    </circle>
    <circle cx={12} cy={2} r={0} transform="rotate(270 12 12)">
      <animate
        attributeName="r"
        begin=".75s"
        calcMode="spline"
        dur="1s"
        keySplines=".2 .2 .4 .8;.2 .2 .4 .8;.2 .2 .4 .8"
        repeatCount="indefinite"
        values="0;2;0;0"
      />
    </circle>
    <circle cx={12} cy={2} r={0} transform="rotate(315 12 12)">
      <animate
        attributeName="r"
        begin=".875s"
        calcMode="spline"
        dur="1s"
        keySplines=".2 .2 .4 .8;.2 .2 .4 .8;.2 .2 .4 .8"
        repeatCount="indefinite"
        values="0;2;0;0"
      />
    </circle>
    <circle cx={12} cy={2} r={0} transform="rotate(180 12 12)">
      <animate
        attributeName="r"
        begin=".5s"
        calcMode="spline"
        dur="1s"
        keySplines=".2 .2 .4 .8;.2 .2 .4 .8;.2 .2 .4 .8"
        repeatCount="indefinite"
        values="0;2;0;0"
      />
    </circle>
  </svg>
);
const Memo = memo(SvgLoading);
export default Memo;
