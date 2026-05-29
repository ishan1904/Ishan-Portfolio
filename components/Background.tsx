export default function Background() {
  return (
    <>
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute right-0 top-40 h-[400px] w-[400px] rounded-full bg-purple-500/20 blur-[120px]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="absolute inset-0 bg-black/60" />
    </>
  );
}