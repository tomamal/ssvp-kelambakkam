export function Video() {
  return (
    <video
      controls
      preload="none"
      poster="/joseph-hospice-3.jpg"
      className="w-full h-full"
    >
      <source src="/video.mp4" type="video/mp4" />
      <track src="" kind="subtitles" srcLang="en" label="English" />
      Your browser does not support the video tag.
    </video>
  );
}
