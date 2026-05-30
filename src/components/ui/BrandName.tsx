export default function BrandName({ className = "" }: { className?: string }) {
  return (
    <span
      className={className}
      style={{
        background: "linear-gradient(to bottom right, #FFFFFF 20%, #E6D5A8 50%, #C9A961 70%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      IntellectAI
    </span>
  );
}
