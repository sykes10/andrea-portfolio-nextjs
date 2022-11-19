export default function AppButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`${className} m-0
      h-11
      rounded-full border
      border-black
      bg-transparent
      px-6
      py-2
      text-xl
      font-bold
      leading-8
      outline-1
      outline-offset-2
      outline-secondary
      transition-colors
      duration-300
      hover:border-brown
      hover:bg-peach-600
      focus:outline
      md:h-13`}
    >
      {children}
    </button>
  );
}
