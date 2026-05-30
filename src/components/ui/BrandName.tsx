export default function BrandName({ className = "" }: { className?: string }) {
  return (
    <span
      className={className}
      style={{
        background: "linear-gradient(to bottom right, #FFFFFF 50%, #C9A961 50%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      IntellectAI
    </span>
  );
}
