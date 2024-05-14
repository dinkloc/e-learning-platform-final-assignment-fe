type VideoLessonComponentProps = {
  src: string;
};

const VideoLessonComponent: React.FC<VideoLessonComponentProps> = ({ src }) => {
  return (
    <div>
      <video
        autoPlay={true}
        key={src}
        className="rounded-lg"
        width={"100%"}
        controls
      >
        <source src={src} type="video/mp4" />
        <track kind="captions" srcLang="en" label="english_captions"></track>
      </video>
    </div>
  );
};

export default VideoLessonComponent;
