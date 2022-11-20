import type { IconProps } from "~/types/components";

const IconWork = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      width="24"
      className={className}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M14 6V4h-4v2h4zM4 9v9c0 .6.5 1 1 1h14c.6 0 1-.5 1-1V9c0-.6-.5-1-1-1H5a1 1 0 00-1 1zm16-3a2 2 0 012 2v11a2 2 0 01-2 2H4a2 2 0 01-2-2V8c0-1.1.9-2 2-2h4V4c0-1.1.9-2 2-2h4a2 2 0 012 2v2h4z" />
    </svg>
  );
};

export default IconWork;
