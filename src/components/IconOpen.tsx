import type { IconProps } from "~/types/components";

const IconOpen = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      width="24"
      className={className}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M18 19H6a1 1 0 01-1-1V6c0-.6.5-1 1-1h5c.6 0 1-.5 1-1s-.5-1-1-1H5a2 2 0 00-2 2v14c0 1.1.9 2 2 2h14a2 2 0 002-2v-6c0-.6-.5-1-1-1s-1 .5-1 1v5c0 .6-.5 1-1 1zM14 4c0 .6.5 1 1 1h2.6l-9.1 9.1a1 1 0 101.4 1.4l9.1-9V9c0 .6.5 1 1 1s1-.5 1-1V4c0-.6-.5-1-1-1h-5a1 1 0 00-1 1z" />
    </svg>
  );
};

export default IconOpen;
