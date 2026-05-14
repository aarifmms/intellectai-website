export default function GradientOrbs() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="gradient-orb absolute -right-32 top-[20%] h-[400px] w-[400px] bg-brass-500/8 animate-[orb-drift-1_20s_ease-in-out_infinite]" />
      <div className="gradient-orb absolute -left-32 top-[60%] h-[350px] w-[350px] bg-brass-500/8 animate-[orb-drift-2_25s_ease-in-out_infinite]" />
      <div className="gradient-orb absolute right-[20%] top-[80%] h-[300px] w-[300px] bg-bone-200/5 animate-[orb-drift-1_18s_ease-in-out_infinite]" />
    </div>
  );
}
