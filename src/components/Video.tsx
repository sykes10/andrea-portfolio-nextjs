type VideoProps = {
  src: string;
  className?: string;
};

const Video = ({ src, className }: VideoProps) => {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className={`${className} h-full w-full object-cover`}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default Video;
