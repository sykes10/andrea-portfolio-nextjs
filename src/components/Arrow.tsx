type ArrowProps = {
  className?: string;
};

const Arrow = ({ className }: ArrowProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      width="24"
      className={className}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M13 19V7.8l4.9 5c.4.3 1 .3 1.4 0 .4-.5.4-1.1 0-1.5l-6.6-6.6a1 1 0 00-1.4 0l-6.6 6.6a1 1 0 101.4 1.4L11 7.8V19c0 .6.5 1 1 1s1-.5 1-1z" />
    </svg>
  );
};

export default Arrow;
