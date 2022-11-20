import type { IconProps } from "~/types/components";

const Divider = ({ className }: IconProps) => {
  return (
    <svg
      width="110"
      height="10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M30 5c-.3 1.3-1 3.8-4.4 3.8-3.4 0-4.2-2.5-4.9-3.8-.7-1.3-1.6-4-5-4-3.5 0-4.4 2.7-4.7 4M108 5c-.4 1.3-1 3.8-4.5 3.8-3.4 0-4.2-2.5-4.8-3.8-.7-1.3-1.7-4-5.1-4a4.9 4.9 0 0 0-5 4M69.3 5c-.4 1.3-1 3.8-4.5 3.8-3.4 0-4.2-2.5-4.9-3.8-.6-1.3-1.6-4-5-4a4.9 4.9 0 0 0-5 4M49.9 5c-.4 1.3-1 3.8-4.6 3.8-3.5 0-4.3-2.5-5-3.8-.7-1.3-1.7-4-5.2-4a5 5 0 0 0-5 4"
        stroke="#D99079"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M88.6 5c-.3 1.3-1 3.8-4.4 3.8-3.5 0-4.2-2.5-4.9-3.8-.7-1.3-1.6-4-5-4a4.9 4.9 0 0 0-5 4M11 5c-.4 1.3-1.3 4-4.9 4C2.5 9 1.7 6.5 1 5.2"
        stroke="#D99079"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Divider;
