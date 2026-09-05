export default function Background() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 h-[920px] overflow-hidden">
      
      {/* Subtle cyan atmosphere */}
      <div className="absolute left-[58%] top-[70px] h-[520px] w-[520px] rounded-full bg-cyan-500/[0.07] blur-[150px]" />

      {/* Very restrained violet depth */}
      <div className="absolute right-[-100px] top-[180px] h-[440px] w-[440px] rounded-full bg-violet-500/[0.06] blur-[160px]" />

      {/* Structural grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:88px_88px]" />

      {/* Fade naturally into the next section */}
      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-b from-transparent to-black" />

    </div>
  );
}