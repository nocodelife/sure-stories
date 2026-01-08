export function DecorativeCircle({
  className = "",
  size = 400,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <div
      className={`absolute rounded-full bg-accent/5 blur-3xl pointer-events-none ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    />
  );
}

export function DecorativeBlob({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={`absolute pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16.3,88.5,-0.9C87,14.5,81.4,29,72.8,41.3C64.2,53.6,52.6,63.7,39.3,71.4C26,79.1,11,84.4,-3.8,89.5C-18.6,94.6,-37.2,99.5,-51.4,93.1C-65.6,86.7,-75.4,69,-81.1,51.1C-86.8,33.2,-88.4,15.1,-86.4,2.2C-84.4,-10.7,-78.8,-21.4,-71.5,-30.9C-64.2,-40.4,-55.2,-48.7,-44.5,-57.8C-33.8,-66.9,-21.4,-76.8,-6.1,-81.1C9.2,-85.4,30.6,-83.6,44.7,-76.4Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}
